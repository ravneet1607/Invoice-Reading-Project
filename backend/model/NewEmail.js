const mongoose = require("mongoose");

const newEmailSchema = new mongoose.Schema({
    Subject : String,
    mailbodytext : String,
    mailhtml : String,
    EmailStatus : String,
    Filename: String,
    AddressCC: [],
    AddressFrom: [],
    AddressTo : [],
    invoiceId :{type: mongoose.Schema.Types.ObjectId, ref:'NewInvoice'},
});

module.exports = mongoose.model("NewEmail" , newEmailSchema);