import { defineComponent, PropType, ref, unref, getCurrentInstance } from 'vue';
import {
  type ColumnSlotCallback,
  type HandleProps,
  type ComponentProps,
  type ComponentSize,
  type TableProps,
  type HandleColumnProps,
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
} from './constant';
import './index.css';
import { Refresh, Operation, Open } from '@element-plus/icons-vue';

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
    handleList: {
      type: Array as PropType<HandleProps[]>,
      default: () => [],
    },
    // Pagination
    total: {
      type: Number,
      default: 0,
    },
    'v-model:pageSize': {
      type: Number,
      default: DEFAULT_PAGE_SIZE,
    },
    'v-model:currentPage': {
      type: Number,
      default: DEFAULT_PAGE,
    },
  },
  setup(props: ComponentProps, { slots, emit, expose }) {
    const _size = ref(props.size);
    const tableRef = ref(null);
    const _columns = ref<HandleColumnProps[]>(
      (props.table.columns || []).map((column) => {
        return {
          ...column,
          show: true,
        };
      })
    );
    const drawerVisible = ref(false);
    // 公开的方法或属性
    expose({
      getTableRef: () => tableRef.value,
    });
    // 根据column的prop属性，获取对应的插槽内容
    function getColumnSlot(column: HandleColumnProps) {
      const slotName = `${DEFAULT_COLUMN_SLOT_PREFIX}${column.prop}`;
      return slots[slotName];
    }
    // 获取handleLeft的prop属性，获取对应的插槽内容
    function getHandleSlot() {
      return slots[DEFAULT_HANDLE_SLOT_KEY];
    }
    // 根据ElTableColumn的默认插槽default，放入我们自定义的插槽内容
    function renderTableColumn(column: HandleColumnProps) {
      const columnSlots: {
        default?: ColumnSlotCallback;
      } = {};
      const slot = getColumnSlot(column);
      if (slot)
        columnSlots.default = (scope: Record<string, any>) => slot(scope);
      return (
        column.show && (
          <el-table-column {...column}>{columnSlots}</el-table-column>
        )
      );
    }
    // 生成分页器
    function renderPagination() {
      const _currentPage = props['v-model:currentPage'] || DEFAULT_PAGE;
      const _pageSize = props['v-model:pageSize'] || DEFAULT_PAGE_SIZE;
      const onPageChange = (pageNum: number) => {
        emit('update:currentPage', pageNum);
      };
      const onSizeChange = (pageSize: number) => {
        emit('update:pageSize', pageSize);
      };
      return (
        <el-pagination
          size={unref(_size)}
          defaultCurrentPage={_currentPage}
          pageSize={_pageSize}
          total={props.total}
          layout={DEFAULT_PAGE_LAYOUT}
          onCurrentChange={onPageChange}
          onSizeChange={onSizeChange}
        />
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
        <el-table ref={tableRef} size={unref(_size)} {...events} {...table}>
          {unref(_columns).map((column: HandleColumnProps) => {
            return renderTableColumn(column);
          })}
        </el-table>
      );
    }
    // 生成Handle
    function renderHandle() {
      // 左侧可配置options，或者slot
      function renderLeft() {
        // 通用左侧按钮点击
        const handleClick = (key: string) => {
          emit('handle-click', key);
        };
        const slot = getHandleSlot();
        return (
          <>
            <div className="cuHandleLeftBtnBox">
              {(props.handleList || []).map((item) => {
                return (
                  <el-button
                    key={item.key}
                    type={item.type || ''}
                    onClick={item.action ?? (() => handleClick(item.key))}
                  >
                    {item.label}
                  </el-button>
                );
              })}
            </div>
            <div className="cuHandleLeftSlotBox">{slot && slot()}</div>
          </>
        );
      }
      function renderRight() {
        const dropdownSlot = {
          default: () => <el-button circle icon={Operation}></el-button>,
          dropdown: () => (
            <el-dropdown-menu>
              {COMPONENT_SIZE_LIST.map((item) => (
                <el-dropdown-item
                  command={item.value}
                  disabled={unref(_size) === item.value}
                >
                  {item.label}
                </el-dropdown-item>
              ))}
            </el-dropdown-menu>
          ),
        };
        const sizeChange = (size: ComponentSize) => {
          _size.value = size;
          emit('size-change', size);
        };
        const tableRefresh = () => {
          emit('table-refresh');
        };
        const openDrawer = () => {
          drawerVisible.value = true;
        };
        return (
          <>
            <div>
              <el-button
                circle
                icon={Refresh}
                onClick={tableRefresh}
              ></el-button>
            </div>
            <div>
              <el-dropdown trigger="click" onCommand={sizeChange}>
                {dropdownSlot}
              </el-dropdown>
            </div>
            <div>
              <el-button circle icon={Open} onClick={openDrawer}></el-button>
            </div>
          </>
        );
      }
      return (
        <>
          <div className="cuHandleLeftBox">{renderLeft()}</div>
          <div className="cuHandleRightBox">{renderRight()}</div>
        </>
      );
    }
    // 生成Drawer 字段管理
    function renderDrawer() {
      const close = () => {
        drawerVisible.value = false;
      };
      const normalCheckBox = (column: HandleColumnProps) => {
        return (
          <el-checkbox key="normal" v-model={column.show} label={column.prop}>
            {column.label}
          </el-checkbox>
        );
      };
      const specialCheckBox = (column: HandleColumnProps) => {
        return (
          <el-checkbox key={column.type} disabled={true} model-value={true}>
            {SPECIAL_COLUMN[column.type as string]}
          </el-checkbox>
        );
      };
      const drawerSlot = {
        default: () =>
          unref(_columns).map((column: HandleColumnProps) => {
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
    return () => (
      <div className="TsxElementTableContainer">
        <div className="cuHandleBox">
          {/* Handle */}
          {renderHandle()}
          {renderDrawer()}
        </div>
        <div className="cuTableBox">
          {/* Table */}
          {renderTable()}
        </div>
        <div className="cuPaginationBox">
          {/* Pagination */}
          {renderPagination()}
        </div>
      </div>
    );
  },
});

export default TsxElementTable;
