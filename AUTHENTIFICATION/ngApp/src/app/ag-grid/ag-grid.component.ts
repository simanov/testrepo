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
  private modules: Module[] = AllCommunityModules;

  private columnDefs;
  private defaultColDef;
  private rowData;

  constructor(private http: HttpClient) {

    this.defaultColDef = { resizable: true };

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





    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    const mybody = `{
      "db":"TBSCSDEV",
      "dbUser": "SYSADM",
      "dbPass": "SYSADM",
      "digits": "2030, +99450880111, +99450880112, 650, +99450878878, 6110, 6990, +99450879004, +99450650",
      "onlyprod": true,
      "hide0row": true,
      "timeZone": "'Atlantic/Reykjavik'",
      "dateFormat": "'YYYY.MM.DD HH24:MI:SS'"
    }`;

    this.http.post<any>('http://localhost:4428/api/BSCS/number_price', mybody, { headers: myHeaders })
      .subscribe(data => { this.columnDefs = data.COLDEF; this.rowData = data.TABLE; });

  }







  doClick() { }

}
