//function esconder(){
    //document.getElementById("textauto").style.display="none"
//}

//function mostrar(){
    
//    document.getElementById("textauto").style.display="block"
//}

//prueba
alert("this website is still being built")
var x =  document.getElementById("textaero");
var a = document.getElementById("textauto")
var c = document.getElementById("textmar")
var d = document.getElementById("textur")

function total(b){
    if (b === 1 ) {
        b = x
     if(b.style.display === "block"){
        b.style.display = "none"}
    else{
     b.style.display = "block"
    }
    console.log(b)
    }
    else if (b ===2){
        b = a
        if(b.style.display === "block"){
            b.style.display = "none"}
        else{
         b.style.display = "block"
        }
        console.log(b)

    }
    else if (b ===3){
        b = c
        if(b.style.display === "block"){
            b.style.display = "none"}
        else{
         b.style.display = "block"
        }
        console.log(b)

    }
    else if(b ===4){
        b = d
        if(b.style.display === "block"){
            b.style.display = "none"}
        else{
         b.style.display = "block"
         console.log(b)
    }
    
 }
}



function oficial(){
    document.getElementById("OficialInfo").textContent="informacion ofial de la empresa tipo direccion numero de telefono numero de cvr y otros"
}

function texto(){
    document.getElementById("OficialInfo").textContent="oficial company information"
}

