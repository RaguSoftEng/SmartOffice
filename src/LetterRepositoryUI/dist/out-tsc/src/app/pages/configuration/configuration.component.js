import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Toast } from '../../common/models/toast';
let ConfigurationComponent = class ConfigurationComponent {
    constructor(serv, spinner) {
        this.serv = serv;
        this.spinner = spinner;
        this.listArray = [];
        this.listId = 0;
        this.listDescription = '';
        this.source = {
            localdata: [],
            datatype: 'local',
            datafields: [
                { name: 'Id', type: 'number' },
                { name: 'Value', type: 'string' },
            ]
        };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
            {
                text: '#', sortable: false, filterable: false, editable: false,
                groupable: false, draggable: false, resizable: false, columntype: 'number', width: '5%',
                cellsrenderer: (row, column, value) => {
                    return '<div style="margin: 4px;">' + (value + 1) + '</div>';
                }
            },
            { text: 'Parameter', datafield: 'Value', width: '60%' },
        ];
        this.rendertoolbar = (toolbar) => {
            const container = document.createElement('div');
            const btnCntAdd = document.createElement('a');
            container.style.margin = '5px';
            btnCntAdd.id = 'btnCntAdd';
            btnCntAdd.classList.add('btn-a');
            btnCntAdd.style.cssText = 'float: left;color: #0a0a0a';
            btnCntAdd.innerHTML = '<i class="fa fa-plus fa-lg"></i> Add';
            container.appendChild(btnCntAdd);
            toolbar[0].appendChild(container);
            const addRowButton = jqwidgets.createInstance('#btnCntAdd', 'jqxButton');
            addRowButton.addEventHandler('click', () => {
                const datarow = this.generaterow();
                this.myGrid.addrow(null, datarow);
            });
        };
        this.toast = new Toast();
    }
    ngOnInit() {
        this.loadAllList();
    }
    generaterow() {
        return {
            Id: 0,
            Value: ''
        };
    }
    loadAllList() {
        this.spinner.show();
        this.serv.httpGetData(1010, 0)
            .subscribe((data) => {
            this.listArray = data;
            this.loadListvalues(data[0].ListId);
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            this.toast.Danger(error);
        });
    }
    loadListvalues(id) {
        this.listId = id;
        this.listDescription = this.listArray.find(e => e.ListId == this.listId).ListDescription;
        this.spinner.show();
        this.serv.httpGetPairValues(id)
            .subscribe((data) => {
            this.source.localdata = data;
            setTimeout(() => {
                this.myGrid.updatebounddata('cells');
                this.spinner.hide();
            }, 1000);
        }, (error) => {
            this.spinner.hide();
            this.toast.Danger(error);
        });
    }
    cellEndEditEvent(event) {
        const args = event.args;
        if (args.value != '') {
            const rowdata = this.myGrid.getrowdata(args.rowindex);
            const pair = {
                Id: rowdata.Id,
                Value: args.value
            };
            this.serv.httpPost(pair, 1010, this.listId)
                .subscribe((data) => {
                this.spinner.hide();
            }, (error) => {
                this.spinner.hide();
                this.toast.Danger(error);
            });
        }
    }
};
tslib_1.__decorate([
    ViewChild('myGrid', { static: false })
], ConfigurationComponent.prototype, "myGrid", void 0);
ConfigurationComponent = tslib_1.__decorate([
    Component({
        selector: 'app-configuration',
        templateUrl: './configuration.component.html',
        styleUrls: ['./configuration.component.css']
    })
], ConfigurationComponent);
export { ConfigurationComponent };
//# sourceMappingURL=configuration.component.js.map