import { ComponentSize, PaginationShow } from './types.ts';

// 表格插槽前缀
export const DEFAULT_COLUMN_SLOT_PREFIX: string = 'table-';

// 表格header插槽后缀
export const DEFAULT_COLUMN_HEADER_SLOT_SUFFIX: string = '-header';

// 操作按钮插槽Key
export const DEFAULT_HANDLE_SLOT_KEY: string = 'handle-left';

// 默认操作按钮显示
export const DEFAULT_HANDLE_SHOW: boolean = true;

// 表格特殊列
export const SPECIAL_COLUMN: { [key: string]: string } = {
  index: '索引',
  selection: '选择',
};

// 默认组件大小
export const DEFAULT_SIZE: ComponentSize = 'default';

// 默认页码
export const DEFAULT_PAGE_SIZE: number = 10;

// 默认当前页数
export const DEFAULT_PAGE: number = 1;

// 默认总数
export const DEFAULT_PAGE_TOTAL: number = 0;

// 默认分页展示
export const DEFAULT_PAGE_SHOW: PaginationShow = true;

// 默认分页布局
export const DEFAULT_PAGE_LAYOUT: string =
  'total, sizes, prev, pager, next, jumper';

// 默认页码列表
export const DEFAULT_PAGE_SIZES: number[] = [10, 20, 50, 100, 200];

// 组件大小列表
export const COMPONENT_SIZE_LIST: { value: ComponentSize; label: string }[] = [
  { value: 'large', label: '宽松' },
  { value: 'default', label: '默认' },
  { value: 'small', label: '紧凑' },
];
