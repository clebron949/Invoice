let printButtonContent;

function printInvoice() {
      removePrintBtn();
      window.print();
      loadPrintBtn();    
}

function removePrintBtn(){
      printButtonContent = $("#print-btn").html();
      $("#print-btn").html("");
}

function loadPrintBtn() {
      $("#print-btn").html(printButtonContent);
}
