export class NewInvoice{
    _id : string;
    // Buyer_Name : string;
    // Seller_Name  : string;
    // Buyer_GST_Number  : string;
    // Seller_GST_Number  : string;
    // E_Way_Bill  : string;
    // Invoice_no  : string;								
    // Po_no  : string;
    // GRN  : string;
    // Invoice_Date  : string;
    // Due_Date  : string;
    // GRN_Date  : string;			
    // Invoice_Amount  : string;
    // Due_Amount  : string;
    // Item_description  : string;
    //Invoice Api Entity
    BuyerName: String;
    BuyerAddress: String;
    BuyerGST: String;
    BuyerPAN: String;
    BuyerCIN: String;
    PONum: String;
    SellerName: String;								
    SellerAddress: String;
    SellerGST: String;
    SellerPAN: String;
    SellerCIN: String;
    EmailID : String;			
    InvoiceNumber: String;
    InvoiceDate: String;
    OrderNumber: String;
    ShipmentAddress: String;
    BankName: String;
    BankAccountNumber: String;
    BeneficiaryName: String;
    IFSC: String; 
    SGST: String;
    CGST: String;
    IGST: String;
    NetTotal: String;
    fileName : String;
    Items : [{
        "_id": Number,
        "ItemDescription": String,
        "Quantity": Number,
        "Unitprice": Number,
        "HSNCode" :  String,
        // "SGST" : String,                                                                                                                                                                                                
        // "CGST" : String,
        "IGST" : String ,
        "Total" : String,
        "ASIN" : String,
        "ISBN" : String,
        "Discount" : String,
        "Model" : String
    }];
    validated : String;
}