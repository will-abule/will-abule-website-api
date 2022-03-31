export interface QueryInterface {
  filter: boolean;
  sort: string;
  sortName: string;
  pageSize: number;
  pageNumber: number;
  searchFilters?: string;
}
