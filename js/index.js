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

$(document).ready(function(){
 
  let links = document.querySelectorAll("a");
  let main = document.getElementById("main")  

  
  links.forEach((link)=>{
   
    link.addEventListener("click",function(){
      let id = link.id;
     //`${url}/users`
     
      let url = `html/${id}.html`;
      
      let xhr = ajax(url)
        
      xhr.addEventListener("load",()=>{
            if (xhr.status == 200)
              {
                main.innerHTML = xhr.response;
              }
        })
    })
  })
  
  /*cargo la pagina de inicio */
  let pagina_inicio = ajax("html/Destacados.html");
  pagina_inicio.addEventListener("load",()=>{
       
    if (pagina_inicio.status == 200)
              {
                main.innerHTML = pagina_inicio.response;
              }
  })
  
  
  
function ajax(url){
    let metodo = "GET";
    let xhr = new XMLHttpRequest;
    xhr.open(metodo,url);
    xhr.send();
  
    return xhr;
  }



});



    
   






   
    
    


   










