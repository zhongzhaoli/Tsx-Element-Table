import {
  defineComponent,
  PropType,
  ref,
  unref,
  getCurrentInstance,
  watch,
  computed,
} from 'vue';
import {
  type ColumnSlotCallback,
  type HandleProps,
  type ComponentProps,
  type ComponentSize,
  type TableProps,
  type HandleDisplayProps,
  PaginationProps,
} from './types';
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_LAYOUT,
  DEFAULT_PAGE_SIZE,
  DEFAULT_SIZE,
  DEFAULT_COLUMN_SLOT_PREFIX,
  COMPONENT_SIZE_LIST,
  DEFAULT_HANDLE_SLOT_KEY,
  SPECIAL_COLUMN,
  DEFAULT_HANDLE_SHOW,
  DEFAULT_PAGE_SHOW,
  DEFAULT_PAGE_TOTAL,
  DEFAULT_COLUMN_HEADER_SLOT_SUFFIX,
  DEFAULT_PAGE_SIZES,
} from './constant';
import './index.css';
import { Refresh, Operation, Open } from '@element-plus/icons-vue';
import { type TableInstance } from 'element-plus/lib/components/table';

const TsxElementTable = defineComponent({
  name: 'TsxElementTable',
  props: {
    // Normal
    size: {
      type: String as PropType<ComponentSize>,
      default: DEFAULT_SIZE,
    },
    table: {
      type: Object as PropType<TableProps>,
      required: true,
    },
    handle: {
      type: Object as PropType<HandleProps>,
      default: () => {},
    },
    pagination: {
      type: Object as PropType<PaginationProps>,
      default: () => {},
    },
    currentPage: {
      type: Number,
      default: DEFAULT_PAGE,
    },
    pageSize: {
      type: Number,
      default: DEFAULT_PAGE_SIZE,
    },
  },
  setup(props: ComponentProps, { slots, emit, expose }) {
    const componentSize = ref(props.size);
    const tableRef = ref<TableInstance | null>(null);
    const columns = ref<HandleDisplayProps[]>();
    watch(
      () => props.table,
      (nV) => {
        columns.value = nV.columns.map((column) => {
          return {
            ...column,
            show: column.show ?? true,
          };
        });
      },
      { deep: true, immediate: true }
    );
    const drawerVisible = ref(false);
    // 公开的方法或属性
    expose({
      getTableRef: () => tableRef.value,
    });
    // 根据column的prop属性，获取对应的插槽内容
    function getColumnSlot(column: HandleDisplayProps) {
      const slotName = `${DEFAULT_COLUMN_SLOT_PREFIX}${column.prop}`;
      return slots[slotName];
    }
    // 根据column的prop属性，获取对应的Header插槽内容
    function getColumnHeaderSlot(column: HandleDisplayProps) {
      const slotName = `${DEFAULT_COLUMN_SLOT_PREFIX}${column.prop}${DEFAULT_COLUMN_HEADER_SLOT_SUFFIX}`;
      return slots[slotName];
    }
    // 获取handleLeft的prop属性，获取对应的插槽内容
    function getHandleSlot() {
      return slots[DEFAULT_HANDLE_SLOT_KEY];
    }
    // 根据ElTableColumn的默认插槽default，放入我们自定义的插槽内容
    function renderTableColumn(column: HandleDisplayProps) {
      const columnSlots: {
        default?: ColumnSlotCallback;
        header?: ColumnSlotCallback;
      } = {};
      const slot = getColumnSlot(column);
      const headerSlot = getColumnHeaderSlot(column);
      if (slot)
        columnSlots.default = (scope: Record<string, any>) => slot(scope);
      if (headerSlot)
        columnSlots.header = (scope: Record<string, any>) => headerSlot(scope);
      return (
        column.show && (
          <el-table-column {...column} key={column.prop}>
            {columnSlots}
          </el-table-column>
        )
      );
    }
    // 生成分页器
    function renderPagination() {
      const currentPage = ref(props?.currentPage || DEFAULT_PAGE);
      const pageSize = ref(props?.pageSize || DEFAULT_PAGE_SIZE);
      const total = props?.pagination?.total || DEFAULT_PAGE_TOTAL;
      const _paginationShow = props.pagination?.show ?? DEFAULT_PAGE_SHOW;
      const paginationShow =
        _paginationShow === 'auto' ? total > pageSize : _paginationShow;
      if (!paginationShow) return;
      const onPageChange = (pageNum: number) => {
        emit('update:currentPage', pageNum);
        emit('page-change', { currentPage: pageNum, pageSize });
      };
      const onSizeChange = (pageSize: number) => {
        emit('update:pageSize', pageSize);
        emit('page-change', { currentPage: currentPage.value, pageSize });
      };
      return (
        <div className="tetPaginationBox">
          <el-pagination
            size={unref(componentSize)}
            v-model:current-page={currentPage.value}
            v-model:page-size={pageSize.value}
            total={total}
            pageSizes={props.pagination?.pageSizes || DEFAULT_PAGE_SIZES}
            layout={props.pagination?.layout || DEFAULT_PAGE_LAYOUT}
            onCurrentChange={onPageChange}
            onSizeChange={onSizeChange}
          />
        </div>
      );
    }
    // 生成Table
    function renderTable() {
      const { table } = props;
      const instance = getCurrentInstance();
      const events: any = {};
      const eventKeys = Object.keys(instance?.vnode?.props ?? []).filter(
        (v) => v.startsWith('on') && !v.startsWith('onUpdate')
      );
      eventKeys.forEach((key) => {
        const newKey = key.replace('on', '');
        const emitKey = newKey
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .toLowerCase();
        events[key] = (...args: any[]) => {
          emit(emitKey, ...args);
        };
      });
      return (
        <div className="tetTableBox">
          <el-table
            ref={tableRef}
            size={unref(componentSize)}
            {...events}
            {...table}
          >
            {(unref(columns) || []).map((column: HandleDisplayProps) => {
              return renderTableColumn(column);
            })}
          </el-table>
        </div>
      );
    }
    // 生成Handle
    function renderHandle() {
      if (!props.handle) return;
      const handleShow = props.handle?.show ?? DEFAULT_HANDLE_SHOW;
      if (!handleShow) return;
      // 左侧可配置options，或者slot
      const handleSize = computed(() =>
        unref(componentSize) === 'large' ? 'default' : unref(componentSize)
      );
      function renderLeft() {
        // 通用左侧按钮点击
        const handleClick = (key: string) => {
          emit('handle-click', key);
        };
        const slot = getHandleSlot();
        return (
          <>
            <div className="tetHandleLeftBtnBox">
              {(props.handle?.columns || []).map((item) => {
                return (
                  <el-button
                    size={unref(handleSize)}
                    key={item.key}
                    type={item.type || ''}
                    onClick={item.action ?? (() => handleClick(item.key))}
                  >
                    {item.label}
                  </el-button>
                );
              })}
            </div>
            <div className="tetHandleLeftSlotBox">{slot && slot()}</div>
          </>
        );
      }
      function renderRight() {
        const dropdownSlot = {
          default: () => (
            <el-button
              circle
              size={unref(handleSize)}
              icon={Operation}
            ></el-button>
          ),
          dropdown: () => (
            <el-dropdown-menu>
              {COMPONENT_SIZE_LIST.map((item) => (
                <el-dropdown-item
                  command={item.value}
                  disabled={unref(componentSize) === item.value}
                >
                  {item.label}
                </el-dropdown-item>
              ))}
            </el-dropdown-menu>
          ),
        };
        const sizeChange = (size: ComponentSize) => {
          componentSize.value = size;
          emit('size-change', size);
        };
        const tableRefresh = () => {
          emit('table-refresh');
        };
        const openDrawer = () => {
          drawerVisible.value = true;
        };
        const handleRightClick = (key: string) => {
          emit('handle-right-click', key);
        };
        const renderRightColumns = () => {
          if (props.handle?.rightColumns) {
            return props.handle?.rightColumns.map((item) => {
              return (
                <div>
                  <el-tooltip content={item.tooltip}>
                    <el-button
                      circle
                      size={unref(handleSize)}
                      icon={item.icon}
                      onClick={() => handleRightClick(item.key)}
                    ></el-button>
                  </el-tooltip>
                </div>
              );
            });
          }
        };
        return (
          <>
            {renderRightColumns()}
            <div>
              <el-tooltip content="表格刷新">
                <el-button
                  circle
                  size={unref(handleSize)}
                  icon={Refresh}
                  onClick={tableRefresh}
                ></el-button>
              </el-tooltip>
            </div>
            <div>
              <el-tooltip content="表格大小">
                <el-dropdown trigger="click" onCommand={sizeChange}>
                  {dropdownSlot}
                </el-dropdown>
              </el-tooltip>
            </div>
            <div>
              <el-tooltip content="字段管理">
                <el-button
                  circle
                  size={unref(handleSize)}
                  icon={Open}
                  onClick={openDrawer}
                ></el-button>
              </el-tooltip>
            </div>
          </>
        );
      }
      function renderDrawer() {
        const close = () => {
          drawerVisible.value = false;
        };
        const normalCheckBox = (column: HandleDisplayProps) => {
          return (
            <el-checkbox key="normal" v-model={column.show} label={column.prop}>
              {column.label}
            </el-checkbox>
          );
        };
        const specialCheckBox = (column: HandleDisplayProps) => {
          return (
            <el-checkbox key={column.type} disabled={true} model-value={true}>
              {SPECIAL_COLUMN[column.type as string]}
            </el-checkbox>
          );
        };
        const drawerSlot = {
          default: () =>
            (unref(columns) || []).map((column: HandleDisplayProps) => {
              return column.type && SPECIAL_COLUMN[column.type]
                ? specialCheckBox(column)
                : normalCheckBox(column);
            }),
        };
        return (
          <el-drawer
            width="320px"
            append-to-body
            model-value={drawerVisible.value}
            title="字段管理"
            onClose={close}
          >
            {drawerSlot}
          </el-drawer>
        );
      }
      return (
        <div className="tetHandleBox">
          <div className="tetHandleLeftBox">{renderLeft()}</div>
          <div className="tetHandleRightBox">{renderRight()}</div>
          {renderDrawer()}
        </div>
      );
    }
    return () => (
      <div className="TsxElementTableContainer">
        {renderHandle()}
        {renderTable()}
        {renderPagination()}
      </div>
    );
  },
});

export default TsxElementTable;
