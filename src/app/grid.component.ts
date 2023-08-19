import { Component } from '@angular/core';
import { GridOptions, ColDef } from 'ag-grid-community';
import { ColumnVisibilityService } from './column-visibility.service';

@Component({
  selector: 'app-grid',
  template: `
    <ag-grid-angular
      style="width: 100%; height: 300px;"
      class="ag-theme-alpine"
      [rowData]="rowData"
      [gridOptions]="gridOptions"
      (gridReady)="onGridReady($event)"
    ></ag-grid-angular>
  `,
})
export class GridComponent {
  rowData = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Vijay', age: 28 },
  ];

  gridOptions: GridOptions = {};
  gridApi: any;
  gridColumnApi: any;

  constructor(private columnVisibilityService: ColumnVisibilityService) {}

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.columnVisibilityService.columnVisibility$.subscribe((visibility) => {
      const columnDefs: ColDef[] = [
        { headerName: 'ID', field: 'id' },
        { headerName: 'Name', field: 'name', hide: !visibility.name },
        { headerName: 'Age', field: 'age', hide: !visibility.age },
      ];

      this.gridApi.setColumnDefs(columnDefs);
    });
  }
}
