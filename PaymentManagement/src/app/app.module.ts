import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddpaymentComponent } from './addpayment/addpayment.component';
import { ListpaymentComponent } from './listpayment/listpayment.component';

import { PaymentService } from './payment.service';
import { FilterPipe } from './Pipes/filterpipe/filter.pipe';
import { UsernamePipe } from './Pipes/usernamepipe/username.pipe';
import { HidecardnumberPipe } from './Pipes/hidecardnumber/hidecardnumber.pipe';
import { CardtypePipe } from './Pipes/cardtype/cardtype.pipe';
import { ExtractcardnumberDirective } from './Directive/extractcardnumber/extractcardnumber.directive';
import { PopupComponent } from './popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    AddpaymentComponent,
    ListpaymentComponent,
    FilterPipe,
    UsernamePipe,
    HidecardnumberPipe,
    CardtypePipe,
    ExtractcardnumberDirective,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    DragScrollComponent,
    DragScrollItemDirective,
    ConfirmDialogModule,
    ToastModule,
    ButtonModule
  ],
  providers: [
    PaymentService,
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
