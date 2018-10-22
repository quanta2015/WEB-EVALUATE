toastr.options = {  
    closeButton: false,  
    debug: false,  
    progressBar: true,  
    positionClass: "toast-bottom-center",  
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
    document.querySelector(".mask").style.display = "none";
}