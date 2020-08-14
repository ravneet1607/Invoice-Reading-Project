import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NewInvoice } from '../shared/newInvoice.model';
import { ListingService } from '../shared/listing.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { JsonpInterceptor } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

declare const check :any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[]
  
})
export class EditComponent implements OnInit {

  constructor(public listingService : ListingService, private router : Router, private toastr: ToastrService) { }
   pdfSrc : string ='';
   public selectedInvoice : NewInvoice;
    
    ngOnInit(): void {
      this.listingService.invoiceToEdit.subscribe((invoice : any )=> {
        this.selectedInvoice = invoice;
        this.getPdf(this.selectedInvoice.fileName);
      }); 
    }

    UpdateInvoiceData(form : NgForm){
      debugger
      var tableData=check();
      this.listingService.updateInvoiceData(form.value,tableData).subscribe((res : any) =>{
          this.toastr.success('Data Updated Successfully...');
          this.router.navigate(['']);
      });
    }

    getPdf(fileName){
      debugger
      this.pdfSrc=this.listingService.getPDF(fileName);
    }

    deletetableEntryById(selectedInvoiceId,selectedTableId){
      debugger;
      var checkValue = selectedInvoiceId + "," + selectedTableId;
      this.listingService.deletetableEntryById(checkValue)
      .subscribe(response => {
                const index = this.selectedInvoice.Items.findIndex(e => e._id === selectedTableId);
                if (index > -1) {
                  this.selectedInvoice.Items.splice(index, 1);
                }
      });
    }

    cancel(){
      this.router.navigate(['']);
    }

}
