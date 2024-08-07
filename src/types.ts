import {
  type ElTableColumn,
  ElTable,
  TableInstance,
} from 'element-plus/lib/components/table';
import { type ElButton } from 'element-plus/lib/components/button';

type ElTableProps = InstanceType<typeof ElTable>['$props'];
type ElTableColumnProps = InstanceType<typeof ElTableColumn>['$props'];
type ElButtonProps = InstanceType<typeof ElButton>['$props'];

// 基础
export type TableDataProps = { [key: string]: any };
export type ComponentSize = 'large' | 'default' | 'small';
export type PaginationShow = boolean | 'auto';
export type ButtonType = ElButtonProps['type'];
export type ColumnSlotCallback = (scope: Record<string, any>) => any;

// 附加
export interface TableColumnProps extends ElTableColumnProps {
  show?: boolean;
}
export interface HandleDisplayProps extends TableColumnProps {
  show: boolean;
}
export interface HandleColumnProps {
  key: string;
  label: string;
  type?: ButtonType;
  action?: () => void;
}

// 三件套
export interface TableProps extends ElTableProps {
  columns: TableColumnProps[];
}
export interface HandleProps {
  columns?: HandleColumnProps[];
  show?: boolean;
}
export interface PaginationProps {
  total?: number;
  show?: PaginationShow;
}

export interface ComponentProps {
  // Normal
  size?: ComponentSize;
  // Handle
  handle?: HandleProps;
  // Table
  table: TableProps;
  // Pagination
  pagination?: PaginationProps;
  pageSize?: number;
  currentPage?: number;
}

export interface ComponentInstance {
  getTableRef: () => TableInstance;
}
