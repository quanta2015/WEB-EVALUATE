toastr.options = {  
    closeButton: false,  
    debug: false,  
    progressBar: true,  
    positionClass: "toast-top-center",  
    onclick: null,  
    showDuration: "300",  
    hideDuration: "1000",  
    timeOut: "2000",  
    extendedTimeOut: "1000",  
    showEasing: "swing",  
    hideEasing: "linear",  
    showMethod: "fadeIn",  
    hideMethod: "fadeOut"  
};

function mask() {
    document.querySelector(".mask").style.display = "block";
}

function remove() {
    console.log("remove");
    document.querySelector(".mask").style.display = "none";
}
