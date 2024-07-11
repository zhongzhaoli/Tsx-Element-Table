import { type ElTableColumn, ElTable } from 'element-plus/lib/components/table';
import { type ElButton } from 'element-plus/lib/components/button';

type ElTableProps = InstanceType<typeof ElTable>['$props'];
type ElTableColumnProps = InstanceType<typeof ElTableColumn>['$props'];
type ElButtonProps = InstanceType<typeof ElButton>['$props'];

export interface TableColumnProps extends ElTableColumnProps {}
export interface TableProps extends ElTableProps {
  columns: TableColumnProps[];
}
export interface HandleColumnProps extends TableColumnProps {
  show: boolean;
}
export type TableDataProps = { [key: string]: any };
export type ComponentSize = 'large' | 'default' | 'small';
export type ButtonType = ElButtonProps['type'];
export type ColumnSlotCallback = (scope: Record<string, any>) => any;

export interface HandleProps {
  key: string;
  label: string;
  type?: ButtonType;
  action?: () => void;
}
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
