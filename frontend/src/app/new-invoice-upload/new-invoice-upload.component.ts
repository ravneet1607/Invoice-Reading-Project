import { Component, OnInit } from '@angular/core';
import { ListingService } from '../shared/listing.service';
import { Router } from '@angular/router';
import { NewInvoice } from '../shared/newInvoice.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-new-invoice-upload',
  templateUrl: './new-invoice-upload.component.html',
  styleUrls: ['./new-invoice-upload.component.css']
})

export class NewInvoiceUploadComponent implements OnInit {
  savedInvoiceData : NewInvoice;
  fetchedApiResponse : NewInvoice;
  public listOfAllInvoices : NewInvoice[];
    selectedInvoices : FileList;
  counterForInvoices : number = 0;

  constructor(public listingService : ListingService,private router : Router, private http : HttpClient, private toastr: ToastrService, 
    private SpinnerService: NgxSpinnerService) { }

    ngOnInit(): void {
      this.refreshInvoiceList();
    }

    chooseFileClicked(event){
      console.log('Inside chooseFileClicked Method in TS File');
      this.selectedInvoices = event.target.files;
    }

    readInvoiceButtonClicked(){ 
      console.log('Inside readInvoiceButtonClicked Method in TS File');
      if(this.counterForInvoices==0){
          this.SpinnerService.show();
      }  
      if(this.counterForInvoices<this.selectedInvoices.length){
        this.getInvoiceDataFromApi();
      }else{
          this.counterForInvoices=0;
          this.SpinnerService.hide();
          this.toastr.success('Data Saved Successfully...', 'API call successfull !!!');
          this.refreshInvoiceList();
          console.log('Completed the Invoice Reading Flow');
      }
    }
   
    getInvoiceDataFromApi(){
      debugger
      console.log('Inside getInvoiceDataFromApi Method in TS File');
      const endpoint='http://4c4b74735515.ngrok.io/invoice';
      const formData :  FormData = new FormData();
      formData.append('file', this.selectedInvoices[this.counterForInvoices]);
      this.http.post(endpoint, formData).subscribe((res : any) => {
        console.log(res);
          this.fetchedApiResponse = res;
          this.saveInvoiceApiDataToDB();
      },(err:HttpErrorResponse) => {
        console.log(err.name);
        this.toastr.error('Failed at ' + this.counterForInvoices);
        this.SpinnerService.hide();
        this.toastr.error('Please Try Again...', 'API Call Failed!!!');
        this.refreshInvoiceList();
        });
    }

    saveInvoiceApiDataToDB(){
      console.log('Inside saveInvoiceApiDataToDB Method in TS File');
      var invoiceData = new NewInvoice();
      invoiceData = this.fetchedApiResponse;
      invoiceData.fileName = this.selectedInvoices[this.counterForInvoices].name;
      this.listingService.saveInvoiceApiData(invoiceData).subscribe((res : any) =>{
         this.counterForInvoices++;
         this.toastr.success('Number of Invoices saved ' + this.counterForInvoices)
         this.readInvoiceButtonClicked();
        },(err:HttpErrorResponse) => {
          console.log(err.name);
        });
    }

    refreshInvoiceList(){
      this.listingService.getAllInvoices().subscribe((response : any) => {
      this.listOfAllInvoices = response.results;
      this.router.navigate(['']);
      },(err:HttpErrorResponse) => {
        console.log(err.name);
      });
    }

    invoiceEditButtonClicked(selectedInvoiceId){
      console.log('Inside invoiceEditButtonClicked Method in TS File');
      this.listingService.editInvoiceDataById(selectedInvoiceId);
      this.router.navigate(['invoice']);
    }

    invoiceDeleteButtonClicked(selectedInvoiceId){
      console.log('Inside invoiceDeleteButtonClicked Method in TS File');
      this.listingService.deleteInvoiceEntryById(selectedInvoiceId).subscribe((response : any) => {
        this.toastr.success('Invoice Succesfully Deleted');
        this.refreshInvoiceList();
      });
    }
      
}
