import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {
  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;

  columnDefs = [
    { headerName: 'INPUT', field: 'INPUT', sortable: true, filter: true, resizable: true, select: true },
    { headerName: 'DIGITS', field: 'DIGITS', sortable: true, filter: true, resizable: true },
    { headerName: 'ZPCODE', field: 'ZPCODE', sortable: true, filter: true, resizable: true },
    { headerName: 'DES', field: 'DES', sortable: true, filter: true, resizable: true },
    { headerName: 'SPECIAL_NUMBER', field: 'SPECIAL_NUMBER', sortable: true, filter: true, resizable: true },
    { headerName: 'GV', field: 'GV', sortable: true, filter: true, resizable: true },
    { headerName: 'GVDES', field: 'GVDES', sortable: true, filter: true, resizable: true },
    { headerName: 'GVVS', field: 'GVVS', sortable: true, filter: true, resizable: true },
    { headerName: 'VSDATE', field: 'VSDATE', sortable: true, filter: true, resizable: true },
    { headerName: 'ZN', field: 'ZN', sortable: true, filter: true, resizable: true },
    { headerName: 'ZNDES', field: 'ZNDES', sortable: true, filter: true, resizable: true },
    { headerName: 'ZO', field: 'ZO', sortable: true, filter: true, resizable: true },
    { headerName: 'ZODES', field: 'ZODES', sortable: true, filter: true, resizable: true },
    { headerName: 'CGI', field: 'CGI', sortable: true, filter: true, resizable: true },
    { headerName: 'NP', field: 'NP', sortable: true, filter: true, resizable: true },
    { headerName: 'RI', field: 'RI', sortable: true, filter: true, resizable: true },
    { headerName: 'RIDES', field: 'RIDES', sortable: true, filter: true, resizable: true },
    { headerName: 'RIVS', field: 'RIVS', sortable: true, filter: true, resizable: true },
    { headerName: 'RIVSD', field: 'RIVSD', sortable: true, filter: true, resizable: true },
    { headerName: 'MAXRIVS', field: 'MAXRIVS', sortable: true, filter: true, resizable: true },
    { headerName: 'UP', field: 'UP', sortable: true, filter: true, resizable: true },
    { headerName: 'UPVS', field: 'UPVS', sortable: true, filter: true, resizable: true },
    { headerName: 'TT', field: 'TT', sortable: true, filter: true, resizable: true },
    { headerName: 'EC', field: 'EC', sortable: true, filter: true, resizable: true },
    { headerName: 'RTID', field: 'RTID', sortable: true, filter: true, resizable: true },
    { headerName: 'CM', field: 'CM', sortable: true, filter: true, resizable: true },
    { headerName: 'IMC', field: 'IMC', sortable: true, filter: true, resizable: true },
    { headerName: 'RN', field: 'RN', sortable: true, filter: true, resizable: true },
    { headerName: 'ITV', field: 'ITV', sortable: true, filter: true, resizable: true },
    { headerName: 'RND', field: 'RND', sortable: true, filter: true, resizable: true },
    { headerName: 'RPT', field: 'RPT', sortable: true, filter: true, resizable: true },
    { headerName: 'PVF', field: 'PVF', sortable: true, filter: true, resizable: true },
    { headerName: 'UOM', field: 'UOM', sortable: true, filter: true, resizable: true },
    { headerName: 'CURR', field: 'CURR', sortable: true, filter: true, resizable: true }

  ];

  /*
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];*/

  rowData: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
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

    this.rowData = this.http.post<any>('http://localhost:4428/api/BSCS/number_price', mybody, { headers: myHeaders });

    //console.log(JSON.stringify(this.rowData));
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.INPUT + ' ' + node.ZPCODE).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}
