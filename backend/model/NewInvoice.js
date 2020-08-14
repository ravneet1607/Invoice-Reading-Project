const mongoose = require("mongoose");

const newInvoiceSchema = new mongoose.Schema({
        Buyer_Name: String,
        Seller_Name: String,
        Buyer_GST_Number: String,
        Seller_GST_Number: String,
        E_Way_Bill: String,
        Invoice_no: String,								
        Po_no: String,
        GRN: String,
        Invoice_Date: String,
        Due_Date: String,
        GRN_Date : String,			
        Invoice_Amount: String,
        Due_Amount: String,
        Item_description: String,
        //Invoice from API
        BuyerName: String,
        BuyerAddress: String,
        BuyerGST: String,
        BuyerPAN: String,
        BuyerCIN: String,
        PONum: String,
        SellerName: String,								
        SellerAddress: String,
        SellerGST: String,
        SellerPAN: String,
        SellerCIN: String,
        EmailID : String,			
        InvoiceNumber: String,
        InvoiceDate: String,
        OrderNumber: String,
        ShipmentAddress: String,
        BankName: String,
        BankAccountNumber: String,
        BeneficiaryName: String,
        IFSC: String,
        SGST: String,
        CGST: String,
        IGST: String,	
        NetTotal: String,
        fileName: String,
        validated : String,
        Items : [{
                "ItemDescription": String,
                "Quantity": String,
                "Unitprice": String,
                "HSNCode" :  String,
                // "SGST" : String,                                                                                                                                                                                                
                // "CGST" : String,
                "IGST" : String ,
                "Total" : String,
                "ASIN" : String,
                "ISBN" : String,
                "Discount" : String,
                "Model" : String
            }]
});

module.exports = mongoose.model("NewInvoice" , newInvoiceSchema);