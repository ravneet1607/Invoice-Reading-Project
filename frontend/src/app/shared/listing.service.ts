import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { NewInvoice } from './newInvoice.model';


@Injectable({
  providedIn: 'root'
})
export class ListingService {

  public editInvoiceData: NewInvoice;
  public invoiceEditSource = new BehaviorSubject({});
  invoiceToEdit = this.invoiceEditSource.asObservable();
  
  readonly invoiceURL = "http://localhost:4000/api/saveinvoice";

  constructor(private http: HttpClient) {}

    saveInvoiceApiData(newInvoice : NewInvoice){
      console.log('Inside saveApiInvoiceData Method in Service Layer');
      return this.http.post(this.invoiceURL + "/saveInvoiceApiData", newInvoice);
    }

    editInvoiceDataById(selectedInvoiceId){
      console.log('Inside editInvoiceDataById Method in Service Layer');
      return this.http.get(this.invoiceURL  + `/${selectedInvoiceId}`).subscribe((response : any) => {
      this.editInvoiceData = response.results;
      this.invoiceEditSource.next(this.editInvoiceData);
      });
    }

    getAllInvoices(){
      console.log('Inside getAllInvoices Method in Service Layer');
      return this.http.get(this.invoiceURL + "/getAllInvoices");
    }

    deleteInvoiceEntryById(selectedInvoiceId){
      return this.http.delete(this.invoiceURL  + `/${selectedInvoiceId}`);
      }
  
    updateInvoiceByApiData(newInvoice : NewInvoice){
      return this.http.put(this.invoiceURL + "/updateByApiData" + `/${newInvoice._id}`, newInvoice);
    }

    

    public updateInvoiceData(invoiceData : NewInvoice, tableData){
      debugger
      var updateFormTableData = new NewInvoice();
      updateFormTableData= invoiceData;
      updateFormTableData.Items = tableData;
      updateFormTableData.validated = "Yes";
      console.log(tableData);
      console.log(updateFormTableData);
      return this.http.put(this.invoiceURL + "/updateDataById" + `/${invoiceData._id}`, updateFormTableData);
    }

    public getPDF(fileName):string{
      debugger
      var showFile = '/assets' + '/' + fileName;
      return showFile;
    }

    public deletetableEntryById(selectedIdToDelete){
      debugger;
      var selectedValue = selectedIdToDelete;
      var values= selectedValue.split(",");
      return this.http.delete(this.invoiceURL  + "/deleteDataById" + `/${selectedIdToDelete}`);
    }

  }


;