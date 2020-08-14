import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { NewInvoiceUploadComponent } from './new-invoice-upload/new-invoice-upload.component';


  const routes: Routes = [
    {
      path : '',
      component : NewInvoiceUploadComponent
    },
    {
      path : 'invoice',
      component : EditComponent
    }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule{}
