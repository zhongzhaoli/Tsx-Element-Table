# Tsx-Element-Table

基于 `Vue3` 和 `Element ui` 二次封装的`Table`组件。

---

## 展示

![实例1](https://zhongzhaoli.github.io/publicAssets/first.jpg)

## 安装与引入

```node
// npm
npm install tsx-element-table
// pnpm
pnpm install tsx-element-table
```

```javascript
// 按需引入组件
import TsxElementTable from 'tsx-element-table';
```

```javascript
// 样式
import 'tsx-element-table/dist/index.css';
```

```javascript
// 类型引入 - 举例
import { type ComponentProps } from 'tsx-element-table';
```

---

## 组件介绍与使用

- 组件分为三个部分：`Handle`，`Table`，`Pagination`组成。除了`Table`都可以置空。

  ```typescript
  export interface ComponentProps {
    // Normal
    size?: ComponentSize;
    // Handle
    handle?: HandleProps;
    // TableColumns（1.6.0更新）
    tableColumns: TableColumnProps[];
    // Table
    table: TableProps;
    // Pagination
    pagination?: PaginationProps;
    pageSize?: number;
    currentPage?: number;
  }
  ```

  ### Handle

  `Handle` 组件可自定义左侧按钮，通过配置 JSON 实现，也可以通过`Slot`自定义显示。

  ```typescript
  // HandleProps
  export interface HandleProps {
    columns?: HandleColumnProps[];
    show?: boolean;
  }
  // JSON for Typescript
  export interface HandleColumnProps {
    key: string; // 唯一标识，用作点击事件的判断
    label: string; // 按钮文本
    type?: ButtonType; // 按钮类型 Enum，参考Element 按钮类型
    action?: () => void; // 点击后的回调，也可以使用点击事件处理
  }
  ```

  Slot 插槽

  ```html
  <template #handle-left> ... </template>
  ```

  `@handle-click` 为左侧菜单栏的点击事件回调，只有一个参数 key。根据参数 key 作相应的业务处理。
  `@table-refresh` 为右侧操作按钮，刷新表格数据。
  `@size-change` 为右侧调整组件大小按钮，可以将大小设置为持久化数据，并通过组件 `size` 属性作为默认组件大小。

  ### Table

  `Table` 组件通过 JSON 配置表格列，参数参考 Element Table Column。也可通过 `slot` 自定义列。
  `slot` 为具名插槽，其名称为 `table-${列prop}` ，如下实例所示。

  ```javascript
  // Slot
  <template #table-name="{ row }">
    {{ row.name }}
  </template>
  ```

  原生 `Element Table` 组件中的回调函数都统一进行转发。

  ```html
  <tsxElementTable ... @row-click="..." @selection-change="..." />
  ```

  原生 `Element Table` 组件中暴露出的方法也都进行统一转发。

  ```typescript
  const tsxElementTableRef = ref<ComponentInstance>();
  onMounted(() => {
    const current = unref(tsxElementTableRef);
    const tableExpose = current && current.getTableRef();
  });
  ```

  组件还有一个字段管理功能，用户可选择展示哪些字段，隐藏哪些字段。

  ### Pagination

  `Pagination` 组件做了修改，通过 `v-model:pageSize` 和 `v-model:currentPage` 实现组件之间的双向绑定。
  `show` 可传布尔值：`true` 一直展示，`false`一直不展示。还可传`auto`字符串：数据大于 1 页时展示，否则不展示。

  ```typescript
  // PaginationProps
  export interface PaginationProps {
    total?: number;
    show?: PaginationShow;
  }
  // PaginationShow
  type PaginationShow = boolean | 'auto';
  ```

## TsxElementTable API

### TsxElementTable 属性

| 属性名                            | 说明       | 类型                                 | 默认值                      |
| :-------------------------------- | :--------- | :----------------------------------- | :-------------------------- |
| size                              | 组件大小   | string ('large', 'default', 'small') | 'default'                   |
| handle                            | 操作参数   | HandleProps (见下表)                 | { show: true, columns: [] } |
| tableColumns                      | 表格列     | TableColumnProps                     | -                           |
| table                             | 表格参数   | TableProps (见下表)                  | -                           |
| pagination                        | 分页参数   | PaginationProps (见下表)             | { show: true, total: 0 }    |
| v-model:pageSize / pageSize       | 每页数据量 | number                               | 10                          |
| v-model:currentPage / currentPage | 页数       | number                               | 1                           |

#### HandleProps

| 属性名       | 说明           | 类型                     | 默认值 |
| :----------- | :------------- | :----------------------- | :----- |
| columns      | 操作列数组     | HandleColumnProps[]      | []     |
| rightColumns | 右侧操作列数组 | HandleRightColumnProps[] | []     |
| show         | 展示           | boolean                  | true   |

#### HandleRightColumnProps

| 属性名  | 说明     | 类型             | 默认值 |
| :------ | :------- | :--------------- | :----- |
| key     | 唯一标识 | string           | -      |
| tooltip | 提示词   | string           | -      |
| icon    | 图标     | ElButton['icon'] | -      |

#### HandleColumnProps

| 属性名 | 说明     | 类型                                                                                      | 默认值 |
| :----- | :------- | :---------------------------------------------------------------------------------------- | :----- |
| key    | 唯一标识 | string                                                                                    | -      |
| label  | 按钮文本 | string                                                                                    | -      |
| type   | 按钮类型 | [同 Element button type](https://element-plus.org/zh-CN/component/button.html#button-api) | -      |
| action | 回调函数 | () => void                                                                                | -      |

#### TableProps

| 属性名 | 说明   | 类型                                                                              | 默认值 |
| :----- | :----- | :-------------------------------------------------------------------------------- | :----- |
| data   | 源数据 | TableDataProps[]                                                                  | []     |
| ...    | 其他   | [同 Element table](https://element-plus.org/zh-CN/component/table.html#table-api) | -      |

#### PaginationProps

| 属性名    | 说明     | 类型           | 默认值                                  |
| :-------- | :------- | :------------- | :-------------------------------------- |
| total     | 数据量   | number         | 0                                       |
| show      | 展示     | PaginationShow | true                                    |
| layout    | 排列     | string         | total, sizes, prev, pager, next, jumper |
| pageSizes | 页码列表 | number[]       | [10, 20, 50, 100]                       |

### TsxElementTable 插槽

| 插槽名              | 说明             |
| :------------------ | :--------------- |
| table-{prop}        | 自定义表格列数据 |
| table-{prop}-header | 自定义表格列头   |
| handle-left         | 自定义左侧操作栏 |

### TsxElementTable 方法

| 方法名        | 说明               | 类型                                                                                                   |
| :------------ | :----------------- | ------------------------------------------------------------------------------------------------------ |
| size-change   | 组件大小发生变化   | () => void                                                                                             |
| table-refresh | 表格数据刷新       | () => void                                                                                             |
| handle-click  | 左侧操作按钮点击   | (key: string) => void                                                                                  |
| page-change   | 页数和页码发生变化 | {currentPage: number, pageSize: number}                                                                |
| ...           | 其他               | [同 Element Table Event](https://element-plus.org/zh-CN/component/table.html#table-%E4%BA%8B%E4%BB%B6) |

### TsxElementTable 暴露

| 方法名             | 说明                                                                        | 返回值                                                                                       | 类型                      |
| :----------------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- | :------------------------ |
| getTableRef        | Element Table Expose                                                        | [同 Element Table Expose](https://element-plus.org/zh-CN/component/table.html#table-exposes) | TableInstance ( Element ) |
| updateTableColumns | 当 tableColumns 不是响应式数据时，更新 Columns 数据后可以使用此方法手动刷新 | -                                                                                            | -                         |

### TsxElementTable 类型

| 类型名称           | 说明                                                                                                              |
| :----------------- | :---------------------------------------------------------------------------------------------------------------- |
| ComponentProps     | TsxElementTable Props 类型                                                                                        |
| ComponentSize      | 组件大小类型                                                                                                      |
| ComponentInstance  | 整个组件的 Expose (包括[Element Table Expose](https://element-plus.org/zh-CN/component/table.html#table-exposes)) |
| ColumnSlotCallback | 自定义表格列数据回调类型                                                                                          |
| TableProps         | Props 中 table 类型                                                                                               |
| TableColumnProps   | Table 列类型                                                                                                      |
| TableDataProps     | Table 数据类型                                                                                                    |
| HandleProps        | Props 中 handle 类型                                                                                              |
| HandleDisplayProps | Handle 管理字段附加类型                                                                                           |
| HandleColumnProps  | Handle 左侧操作列类型                                                                                             |
| PaginationProps    | Props 中 pagination 类型                                                                                          |
| PaginationShow     | Pagination 中 显示类型                                                                                            |
| ButtonType         | 通用操作按钮类型                                                                                                  |

## 后续开发任务

- ~~`Table Column` 颗粒度与 `Element` 对其（属性、方法、暴露）。~~
- ~~`Pagination` 增加可配置一定条件下显示与隐藏。~~
- ~~`Handle` 右侧可在一定限度内配置新的按钮。~~
- 组件拆分解耦。

## 反馈与提问

本组件长期更新，直至组件完善。如有问题、BUG 反馈、更新意见可直接提交 `Issues`。
