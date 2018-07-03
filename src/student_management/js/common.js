  $(function () { $("[data-toggle='tooltip']").tooltip(); });

function textMess(file){  
    var mess=file[0];  
    var file=new FileReader();  
    file.readAsText(mess);  
    file.onload=function(e){  
        var htmlCode=e.target.result;  
        document.getElementById("text").innerText=htmlCode;  
    }  
} 