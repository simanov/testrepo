import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AllCommunityModules, Module } from '@ag-grid-community/all-modules';


@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent {
  private gridApi;
  private gridColumnApi;
  modules: Module[] = AllCommunityModules;

  columnDefs;
  defaultColDef;
  rowData;
  getRowHeight;

  BSCSData = {
    db: 'TBSCSDEV',
    dbUser: 'SYSADM',
    dbPass: 'SYSADM',
    digits: '2031, 2030, +99450880111, +99450880112, 650, +99450878878, 6110, 6990, +99450879004, +99450650',
    onlyprod: true,
    hide0row: true,
    timeZone: 'Atlantic/Reykjavik',
    dateFormat: 'YYYY.MM.DD HH24:MI:SS'
  };

  private mybody;

  constructor(private http: HttpClient) {

    this.defaultColDef = {
      sortable: true,
      resizable: true,
      filter: true
    };

    this.getRowHeight = (params) => 20;

  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  autoSizeAll(skipHeader) {
    this.gridApi.sizeColumnsToFit();
    const allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach((column) => {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  onFirstDataRendered(params) {
    /* this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.autoSizeAll(false); */
  }

  onComponentStateChanged(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.autoSizeAll(false);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // this.getRowHeight = 150;
    // console.log(params);
  }

  getNumberPrice() {

    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    this.mybody = `{
      "db":"TBSCSDEV",
      "dbUser": "SYSADM",
      "dbPass": "SYSADM",
      "digits": "2031, 2030, +99450880111, +99450880112, 650, +99450878878, 6110, 6990, +99450879004, +99450650",
      "onlyprod": true,
      "hide0row": true,
      "timeZone": "'Atlantic/Reykjavik'",
      "dateFormat": "'YYYY.MM.DD HH24:MI:SS'"
    }`;

    this.http.post<any>('http://localhost:4428/api/BSCS/digits_info', JSON.stringify(this.BSCSData), { headers: myHeaders })
      .subscribe(data => { this.columnDefs = data.COLDEF; this.rowData = data.TABLE; });

    /* this.http.post<any>('http://tdbclin.azercell.com:4428/api/BSCS/number_price', JSON.stringify(this.BSCSData), { headers: myHeaders })
      .subscribe(data => { this.columnDefs = data.COLDEF; this.rowData = data.TABLE; }); */

    this.BSCSData.onlyprod = true;

    // console.log(JSON.stringify(this.BSCSData));




  }


  custFunc() {
    // gridOptions.columnApi.sizeColumnsToFit();
  }


  doClick() { }

}
