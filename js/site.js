function printInvoice() {
    document.getElementById("printButton").style.display = "none";    
    window.print();
    document.getElementById("printButton").style.display = "block";    
}