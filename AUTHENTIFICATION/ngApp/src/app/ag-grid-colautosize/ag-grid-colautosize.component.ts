import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllCommunityModules, Module } from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-ag-grid-colautosize',
  templateUrl: './ag-grid-colautosize.component.html',
  styleUrls: ['./ag-grid-colautosize.component.scss']
})
export class AgGridColautosizeComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  modules: Module[] = AllCommunityModules;

  columnDefs;
  defaultColDef;
  rowData: [];

  getRowHeight;

  private rowCount = 0;
  calcHeight = '70vh';

  constructor(private http: HttpClient) {

    this.defaultColDef = {
      sortable: true,
      resizable: true,
      filter: true
    };
    this.getRowHeight = (params) => 20;
  }

  ngOnInit() {

    // console.log(this.rowData);
  }



  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  autoSizeAll(skipHeader) {
    const allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach((column) => {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http.get<any>('http://tdbclin.azercell.com:4428/api/athletecols')
      .subscribe(cols => { this.columnDefs = cols; });

    this.http.get<any>('http://tdbclin.azercell.com:4428/api/athlete')
      .subscribe(data => { this.rowData = data; if (data.length <= 20) { this.calcHeight = (data.length * 22) + 40 + 'px'; } });
  }
}
