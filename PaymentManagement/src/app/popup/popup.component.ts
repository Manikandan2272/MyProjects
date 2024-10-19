import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { PaymentService } from '../payment.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    public dialogRef: MatDialogRef<PopupComponent>,
    public paymentSer: PaymentService
  ) { }

  ngOnInit(): void {

  }

  doCloseAndDelete(btn: any) {
    if(btn == 'delete') {
      this.paymentSer.deleteUserData(this.data.data);
      this.dialogRef.close();
    }
  }

}
