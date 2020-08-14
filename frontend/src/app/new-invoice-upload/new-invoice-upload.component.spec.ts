import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInvoiceUploadComponent } from './new-invoice-upload.component';

describe('NewInvoiceUploadComponent', () => {
  let component: NewInvoiceUploadComponent;
  let fixture: ComponentFixture<NewInvoiceUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInvoiceUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInvoiceUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
