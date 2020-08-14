const router = require('express').Router();

const NewEmail =require('../model/NewEmail');

router.post('/saveApiEmailData', (req,res) => {
    console.log('I am inside the Email function...')
    console.log(req.body.Subject);

    const newEmail= new NewEmail({
       
        Subject : req.body.Subject,
        mailbodytext : req.body.mailbodytext,
        mailhtml : req.body.mailhtml,
        EmailStatus : req.body.EmailStatus,
        Filename : req.body.Filename,
        AddressCC : req.body.AddressCC,
        AddressFrom : req.body.AddressFrom,
        AddressTo : req.body.AddressTo,
        invoiceId : req.body.invoiceId
    });
    newEmail.save().then(doc=>{
        res.send(doc);
    })
    .catch(err=>{
        res.json(err);
    });

});

router.get("/getAllInvoiceDetails",function(req,res,next){
    NewEmail
    .find()
    .select()
    .populate("invoiceId", "BuyerName BuyerGST")
    .exec()
       .then(data=>{
               res.status(201).json({
               message: "OK",
               results : data
           });
       })
       .catch(err=>{
           res.json(err);
       }); 
   });



module.exports = router;