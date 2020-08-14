import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ListingService } from './shared/listing.service';
import { NewInvoiceUploadComponent } from './new-invoice-upload/new-invoice-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner"; 



@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    NewInvoiceUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PdfViewerModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [ListingService],
  bootstrap: [AppComponent]
})

export class AppModule {}
