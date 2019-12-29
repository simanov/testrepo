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
  private modules: Module[] = AllCommunityModules;

  private columnDefs;
  private defaultColDef;
  private rowData: [];

  constructor(private http: HttpClient) {

    this.defaultColDef = { resizable: true };
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

    this.http.get<any>('http://localhost:4428/api/athletecols')
      .subscribe(cols => { this.columnDefs = cols; });

    this.http.get<any>('http://localhost:4428/api/athlete')
      .subscribe(data => { this.rowData = data; });
  }
}
