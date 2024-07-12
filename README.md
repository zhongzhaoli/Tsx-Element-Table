## Tsx-Element-Table

基于 `Vue3` 和 `Element ui` 二次封装的`Table`组件。

---

### 展示

![实例1](https://zhongzhaoli.github.io/publicAssets/first.jpg)

### 安装与引入

```
// npm
npm install tsx-element-table
// pnpm
pnpm install tsx-element-table
```

```
// 按需引入组件
import TsxElementTable from 'tsx-element-table';
```

---

### 组件介绍与使用

- 组件分为三个部分：`Handle`，`Table`，`Pagination`组成。除了`Table`都可以置空。

  ```typescript
  export interface ComponentProps {
    // Normal
    size?: 'large' | 'default' | 'small';
    // Handle
    handleList?: HandleProps[];
    // Table
    table: TableProps;
    // Pagination
    total?: number;
    'v-model:pageSize'?: number;
    'v-model:currentPage'?: number;
  }
  ```

  #### Handle

  `Handle` 组件可自定义左侧按钮，通过配置 JSON 实现，也可以通过`Slot`自定义显示。

  ```typescript
  // JSON for Typescript
  export interface HandleProps {
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

  #### Table

  `Table` 组件通过 JSON 配置表格列，参数参考 Element Table Column。也可通过 `slot` 自定义列。
  `slot` 为具名插槽，其名称为 `table-${列prop}` ，如下实例所示。

  ```javascript
  // Slot
  <template #table-name="{ row }">
    {{ row.name }}
  </template>
  ```

  组件还有一个字段管理功能，用户可选择展示哪些字段，隐藏哪些字段。

  #### Pagination

  `Pagination` 组件做了修改，通过 `v-model:pageSize` 和 `v-model:currentPage` 实现组件之间的双向绑定。默认 `pageSize` 为 `10`。

### TsxElementTable API

#### TsxElementTable 属性

| 属性名              | 说明         | 类型                                 | 默认值    |
| :------------------ | :----------- | :----------------------------------- | :-------- |
| size                | 组件大小     | string ('large', 'default', 'small') | 'default' |
| total               | 表格数据总数 | number                               | 0         |
| v-model:pageSize    | 每页数据量   | number                               | 10        |
| v-model:currentPage | 页数         | number                               | 1         |
| handleList          | 左侧操作按钮 | HandleProps[] (见下表)               | []        |
| table               | 表格参数     | TableProps (见下表)                  | -         |

#### HandleProps

| 属性名 | 说明     | 类型                                                                                      | 默认值 |
| :----- | :------- | :---------------------------------------------------------------------------------------- | :----- |
| key    | 唯一标识 | string                                                                                    | -      |
| label  | 按钮文本 | string                                                                                    | -      |
| type   | 按钮类型 | [同 Element button type](https://element-plus.org/zh-CN/component/button.html#button-api) | -      |
| action | 回调函数 | () => void                                                                                | -      |

#### TableProps

| 属性名  | 说明       | 类型                                                                                            | 默认值 |
| :------ | :--------- | :---------------------------------------------------------------------------------------------- | :----- |
| columns | 表格列数据 | [同 Element table column](https://element-plus.org/zh-CN/component/table.html#table-column-api) | -      |
| ...     | 其他       | [同 Element table](https://element-plus.org/zh-CN/component/table.html#table-api)               | -      |

#### TsxElementTable 插槽

| 插槽名       | 说明             |
| :----------- | :--------------- |
| table-{prop} | 自定义表格列数据 |
| handle-left  | 自定义左侧操作栏 |

#### TsxElementTable 方法

| 方法名           | 说明             | 类型                          |
| :--------------- | :--------------- | ----------------------------- |
| size-change      | 组件大小发生变化 | () => void                    |
| table-refresh    | 表格数据刷新     | () => void                    |
| handle-click     | 左侧操作按钮点击 | (key: string) => void         |
| selection-change | 选择项发生改变时 | (newSelection: any[]) => void |

#### TsxElementTable 类型

| 类型名称           | 说明                      |
| :----------------- | :------------------------ |
| TableColumnProps   | 表格列 JSON 类型          |
| TableProps         | table 类型                |
| HandleColumnProps  | 字段管理类型 (无实际用处) |
| TableDataProps     | table 数据类型            |
| ComponentSize      | 组件大小类型              |
| ButtonType         | 按钮类型                  |
| ColumnSlotCallback | 自定义表格列数据回调类型  |
| HandleProps        | 左侧操作按钮 JSON 类型    |
| ComponentProps     | 整个组件的 Props          |

### 后续开发任务

- [ ] `Table Column` 颗粒度与 `Element` 对其（属性、方法、暴露）。
- [ ] `Pagination` 增加可配置一定条件下显示与隐藏。
- [ ] `Handle` 右侧可在一定限度内配置新的按钮。

### 反馈与提问

本组件长期更新，直至组件完善。如有问题、BUG 反馈、更新意见可直接提交 `Issues`。
