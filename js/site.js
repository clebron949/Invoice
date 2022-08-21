let printButtonContent;

function printInvoice() {
      removePrintBtn();
      window.print();
      loadPrintBtn();    
}

function removePrintBtn(){
      printButtonContent = document.getElementById("print-btn").innerHTML;
      document.getElementById("print-btn").innerHTML = "";
}

function loadPrintBtn() {
      document.getElementById("print-btn").innerHTML = printButtonContent;
}
