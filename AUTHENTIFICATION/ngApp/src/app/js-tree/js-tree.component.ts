import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-js-tree',
  templateUrl: './js-tree.component.html',
  styleUrls: ['./js-tree.component.scss']
})
export class JsTreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* $(() => {
      // --
      $('#jsTreeNode').jstree({
        core: {
          // themes : { stripes : true },
          data: [
            { text: 'Simple root node', a_attr: { title: 'My tooltip' } },
            {
              text: 'Root node 2',
              state: {
                opened: true,
                selected: true
              },
              children: [
                { text: 'Child 1' },
                'Child 2'
              ]
            }
          ]
        }
      });
      // --
    }); */

    // =====================================
    $(() => {
      var jsondata = [{
        text: "Products",
        data: {},
        children: [{
          text: "Fruit",
          "type": "folder",
          data: {},
          children: [
            { text: "Apple", data: { price: 0.1, quantity: 20 } },
            { text: "Banana", data: { price: 0.2, quantity: 31 } },
            { text: "Grapes", data: { price: 1.99, quantity: 34 } },
            { text: "Mango", data: { price: 0.5, quantity: 8 } },
            { text: "Melon", data: { price: 0.8, quantity: 4 } },
            { text: "Pear", data: { price: 0.1, quantity: 30 } },
            { text: "Strawberry", data: { price: 0.15, quantity: 32 } }
          ],
          'state': { 'opened': true }
        },
        {
          text: "Vegetables",
          data: {},
          children: [
            { text: "Aubergine", data: { price: 0.5, quantity: 8 } },
            { text: "Broccoli", data: { price: 0.4, quantity: 22 } },
            { text: "Carrot", data: { price: 0.1, quantity: 32 } },
            { text: "Cauliflower", data: { price: 0.45, quantity: 18 } },
            { text: "Potato", data: { price: 0.2, quantity: 38 } }
          ]
        }],
        'state': { 'opened': true }
      }];
      createJSTree(jsondata);
    });

    function createJSTree(jsondata) {

      $('#jsTreeNode').jstree({
        grid: {
          columns: [
            { width: 200, header: "Name" },
            { width: 150, value: "price", header: "Price" },
            { width: 150, value: "quantity", header: "Qty" }
          ],
          width: 600
        },
        "core": {
          'data': jsondata
        },
        "types": {
          "folder": {
            "icon": "jstree-icon jstree-file"
          }
        },
        plugins: ["grid", "types"]
      });
    }
    // --
  }

}
