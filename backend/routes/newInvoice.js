const router = require("express").Router();

const NewInvoice =require('../model/NewInvoice');

router.post('/saveInvoiceApiData', (req,res) => {

    var items = req.body.item;
    var arrayOfItems = [];
    items.forEach(function(item){
        arrayOfItems.push({
            ItemDescription: item.ProductDescription,
            Quantity: item.Quantity,
            Unitprice: item.Rate,
            HSNCode: item.HSNCode,
            IGST : item.Tax,
            Total : item.Total,
            ASIN :item.ASIN,
            ISBN : item.ISBN,
            Discount : item.Discount,
            Model : item.Model
        });
    });

const newInvoice= new NewInvoice({
        BuyerName: req.body.BuyerName,
        BuyerAddress: req.body.BuyerAddress,
        BuyerGST: req.body.BuyerGST,
        BuyerPAN: req.body.BuyerPAN,
        BuyerCIN: req.body.BuyerCIN,
        PONum: req.body.PONum,
        SellerName: req.body.SellerName,								
        SellerAddress: req.body.SellerAddress,
        SellerGST: req.body.SellerGST,
        SellerPAN: req.body.SellerPAN,
        SellerCIN:	req.body.SellerCIN,
        EmailID : req.body.EmailID,			
        InvoiceNumber: req.body.InvoiceNumber,
        InvoiceDate: req.body.InvoiceDate,
        OrderNumber: req.body.OrderNumber,
        ShipmentAddress: req.body.ShipmentAddress,
        BankName: req.body.BankName,
        BankAccountNumber: req.body.BankAccountNumber,
        BeneficiaryName: req.body.BeneficiaryName,
        IFSC: req.body.IFSC, 
        SGST: req.body.SGST,
        CGST: req.body.CGST,
        IGST: req.body.IGST,	
        NetTotal: req.body.NetTotal,
        fileName : req.body.fileName,
        Items: arrayOfItems
    });
        newInvoice.save().then(doc=>{
            res.send(doc);
        })
        .catch(err=>{
            res.json(err);
        });

});

router.get("/getAllInvoices", async(req,res) => {
    await    
    NewInvoice.find().exec().then(data=>{
            res.status(201).json({
                message: "OK",
                results : data
            });
    })
        .catch(err=>{
            res.json(err);
        }); 
});

router.get('/:selectedInvoiceId' , (req,res) => {
    
    NewInvoice.findById(req.params.selectedInvoiceId).exec().then(data => {
        res.status(201).json({
            message: "OK",
            results : data
        });
    })
        .catch(err=>{
            res.json(err);
        }); 
});

router.put('/updateDataById/:invoiceId', (req,res) => {
        
    const updateInvoiceData = {
        BuyerName: req.body.BuyerName,
        BuyerAddress: req.body.BuyerAddress,
        BuyerGST: req.body.BuyerGST,
        BuyerPAN: req.body.BuyerPAN,
        BuyerCIN: req.body.BuyerCIN,
        PONum: req.body.PONum,
        SellerName: req.body.SellerName,								
        SellerAddress: req.body.SellerAddress,
        SellerGST: req.body.SellerGST,
        SellerPAN: req.body.SellerPAN,
        SellerCIN:	req.body.SellerCIN,
        EmailID : req.body.EmailID,			
        InvoiceNumber: req.body.InvoiceNumber,
        InvoiceDate: req.body.InvoiceDate,
        OrderNumber: req.body.OrderNumber,
        ShipmentAddress: req.body.ShipmentAddress,
        BankName: req.body.BankName,
        BankAccountNumber: req.body.BankAccountNumber,
        BeneficiaryName: req.body.BeneficiaryName,
        IFSC: req.body.IFSC,
        ItemDescription: req.body.ItemDescription,
        Quantity: req.body.Quantity,
        Unitprice: req.body.Unitprice,
        HSNCode: req.body.HSNCode, 
        SGST: req.body.SGST,
        CGST: req.body.CGST,
        IGST: req.body.IGST,
        Total: req.body.Total,	
        Discount: req.body.Discount,	
        NetTotal: req.body.NetTotal,
        Items: req.body.Items,
        validated : req.body.validated,

    }
        NewInvoice.findByIdAndUpdate({_id : req.params.invoiceId}, updateInvoiceData).exec().then(data=>{
             res.status(201).json({
                 message: "OK",
                 results : "Updated Successfully..."
             });
         })
            .catch(err=>{
                res.json(err);
            }); 
     });
  
router.delete("/:invoiceId" , (req,res) => {
    console.log(req.params.invoiceId);
        NewInvoice.findByIdAndDelete(req.params.invoiceId).exec().then(data => {
            res.status(201).json({
                message: "OK",
                results : "Deleted Successfully..."
            });
        })
        .catch(err=>{
            res.json(err);
        }); 
});  

router.delete("/deleteDataById/:idToDelete" , (req,res) => {
    var deleteEntry = req.params.idToDelete.split(",");
    NewInvoice.findOneAndUpdate({ "_id": deleteEntry[0] },
    { $pull: { Items: { _id : deleteEntry[1] } } }, (err) => {
        if (err) {
            return res.status(404).json({ message: 'Error' });
        }
        return res.status(200).json({
            success: true,
            message: 'success'
        });
    }
    );
    console.log(req.params.idToDelete);
    console.log(deleteEntry[1]);
    console.log('Done');
    //console.log(req.params.selectedTableId);
});  
     
    module.exports = router;