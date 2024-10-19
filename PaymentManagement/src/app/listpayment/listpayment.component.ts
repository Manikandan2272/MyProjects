import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { PaymentService } from "../payment.service";
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-listpayment',
    templateUrl: './listpayment.component.html',
    styleUrls: ['./listpayment.component.css']
})

export class ListpaymentComponent implements OnInit {

    listPayment: any[] = [];
    searchText: string = "";
    searchBy: string = "username";
    showFilter: boolean = false;

    @Output() sendIndex = new EventEmitter;
    @Output() showForm = new EventEmitter;

    constructor(public listPaymentUser: PaymentService) { }

    ngOnInit(): void {
        this.listPayment = this.listPaymentUser.showUserPayment();
    }

    doAdd() {
        this.showForm.emit(true);
    }

    doEditAndDelete(i: number, btn: string) {
        this.sendIndex.emit({ index: i, mode: btn });
    }

    doExportExcel(): void {
        /* pass here the table id */
        let element = document.getElementById('excel-table');
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
        ws["!fullref"] = "A1:D5";
        ws["!ref"] = "A1:D5";
        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        XLSX.writeFile(wb, "ExcelSheet.xlsx");
    }

    doClearFilter() {
        this.searchBy = "username";
        this.searchText = "";
    }

}