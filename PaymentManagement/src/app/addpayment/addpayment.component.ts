import { Component, ViewChild } from "@angular/core";
import { PaymentService } from "../payment.service";
import { NgForm } from "@angular/forms";
import { DragScrollComponent } from "ngx-drag-scroll";
import { ConfirmationService, MessageService } from "primeng/api";

@Component({
    selector: 'app-addpayment',
    templateUrl: './addpayment.component.html',
    styleUrls: ['./addpayment.component.css']
})

export class AddpaymentComponent {

    username: any;
    price: any;
    cardNumber: any;
    cardType: any;
    indexVal: any;

    adduserbtn = false;
    updatebtn = true;
    formMode: string = "submit";
    resetMode: string = "reset";
    title: string = "Add New Payment Details";

    showForm: boolean = false;

    @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;

    constructor(
        public addPaymentUser: PaymentService,
        private confirmationService: ConfirmationService,
        private messageService: MessageService
    ) {

    }

    doShowForm(event: any) {
        this.showForm = event;
        this.ds.moveRight();
    }

    submitData(form: NgForm) {
        if (this.formMode == "submit") {
            if (form.valid) {
                form.value.cardNumber = this.cardNumber.split("-").join("");
                this.addPaymentUser.addUserData(form.value);
                this.ds.moveLeft();
                form.reset();
            } else {
                form.control.markAllAsTouched();
            }
        } else if (this.formMode == "update") {
            this.doUpdate(form);
        }
    }

    doUpdate(form: NgForm) {
        if (form.valid) {
            this.addPaymentUser.paymentData.splice(this.indexVal, 1, form.value);
            this.formMode = "submit";
            this.resetMode = "reset";
            this.title = "Add New Payment Details";
            this.ds.moveLeft();
            form.reset();
        }
    }

    doEditAndDelete(event: any) {
        if (event.mode == 'edit') {
            this.showForm = true;
            this.title = "Edit Payment Details";
            this.formMode = "update";
            this.resetMode = "update";
            this.ds.moveRight();
            this.doShowEditValue(event.index);
        } else if (event.mode == 'delete') {
            this.confirmationService.confirm({
                message: 'Are you sure want to delete this record?',
                header: 'Confirmation',
                icon: 'bi bi-exclamation-triangle',
                accept: () => {
                    this.addPaymentUser.paymentData.splice(event.index, 1);
                },
                reject: () => {

                }
            });
        }
    }

    doShowEditValue(index: number) {
        this.indexVal = index;
        this.username = this.addPaymentUser.paymentData[index].username;
        this.price = this.addPaymentUser.paymentData[index].price;
        this.cardNumber = this.addPaymentUser.paymentData[index].cardNumber.toString().replace(/\D/g, '').match(/.{1,4}/g).join('-');
    }

    doReset(form: NgForm) {
        if (this.resetMode == "reset") {
            form.reset();
        } else if (this.resetMode == "update") {
            this.doShowEditValue(this.indexVal);
        }
    }

    doCancel(form: NgForm) {
        this.formMode = "submit";
        this.resetMode = "reset";
        this.title = "Add New Payment Details";
        this.ds.moveLeft();
        form.reset();
    }

}