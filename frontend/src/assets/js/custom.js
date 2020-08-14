
function check(){
  var item=[];
  var cellValue = "";
    for(var i=1; i<tableMain.rows.length;i++){
        for(var j=0;j<tableMain.rows[0].cells.length;j++){
            if(j<(tableMain.rows[0].cells.length)-1){
                  cellValue=cellValue.concat(tableMain.rows[i].cells[j].children[0].value);
                  cellValue=cellValue.concat("*");    
            }else{
                  cellValue=cellValue.concat(tableMain.rows[i].cells[j].children[0].value);
            }
        }
        var tempValue= cellValue.split("*");
        item.push({
            "ItemDescription" : tempValue[0],
            "Quantity" : tempValue[1],
            "Unitprice" : tempValue[2],
            "HSNCode" : tempValue[3],
            "ASIN" : tempValue[4],
            "ISBN" : tempValue[5],
            "Model" : tempValue[6],
            "IGST" : tempValue[7],
            "Discount" : tempValue[8],
            "Total" : tempValue[9]
        })
        cellValue="";
    }
        return (item);  
}


    
 


  