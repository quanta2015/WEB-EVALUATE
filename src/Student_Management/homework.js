function textMess(file){  
    var mess=file[0];  
    var file=new FileReader();  
    file.readAsText(mess);  
    file.onload=function(e){  
        var htmlCode=e.target.result;  
        document.getElementById("id-text").innerText=htmlCode;  
    }  
} 
