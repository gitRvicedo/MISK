/*console.log('vinculado')

let links = document.querySelectorAll("a")
let container = document.getElementById("container")

$(window).load(function() {

    let pagina = fetch(`html/productos.html`)
    pagina
      .then(valor=>{return valor.text()})
      .then(valor=>{
        console.log(valor);
        container.innerHTML = valor;
    })
    .catch()

});*/

$(document).ready(function() {
 
  let links = document.querySelectorAll("a");
  let container = document.getElementById ("container");
  let xhr = new XMLHttpRequest;
  
  links.forEach((link)=>{
   
    link.addEventListener("click",function(){
      let id = link.id;
      let pagina = id + ".html";
      let xhr = ajax(pagina)
        
      xhr.addEventListener("load",()=>{
            if (xhr.status == 200)
              {
                container.innerHTML = xhr.response;
              }
        })
    })
  })
  
  /**********************cargo la pagina de inicio */
  let pagina_inicio = ajax('html/productos.html');
  pagina_inicio.addEventListener("load",()=>{
       
    if (pagina_inicio.status == 200)
              {
                container.innerHTML = xhr.response;
              }
  })
  
  
  
function ajax(url){
    let metodo = "GET";
    
    xhr.open(metodo,url);
    xhr.send();
  
    return xhr;
  }



});



    
   






   
    
    


   










