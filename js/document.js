var fullName = document.getElementById("fullName");
var fullNameLab = document.getElementById("fullNameLab");
var fullNameError = document.getElementById("fullNameError");
var email = document.getElementById("email");
var emailLab = document.getElementById("emailLab");
var phone = document.getElementById("phone");
var batchNo = document.getElementById("batchNO");
var idNo = document.getElementById("idNo");
var messges = document.getElementById("messges");

function onsub(){
    if(fullName.value == ""){
        fullNameError.innerHTML = "**plese enter you name";
        fullName.style.border = "1px solid #e91e63";
        fullName.focus();
        return false;

    }
}
function errvalid(){
    if(fullName.value != ""){
        fullNameError.innerHTML = "";
        return false;

    }
    
}
fullName.addEventListener("blur",errvalid);
fullName.addEventListener("focus", function(){
    fullNameLab.style.top = "13px";
})
fullName.addEventListener("blur", function(){
    if(fullName.value == ""){
        fullNameLab.style.top = "31px"
    }
})
function myFun(){
    document.getElementsByClassName("content")[0].style.visibility = "visible";    
    document.getElementsByClassName("content")[0].style.opacity = "1";    

}
function myFunOne(){
    document.getElementsByClassName("content")[0].style.visibility = "hiden";    
    document.getElementsByClassName("content")[0].style.opacity = "0";    

}