
console.log('vinculado')

 
  let links = document.querySelectorAll("a");
  let main = document.getElementById("main")  

  
  links.forEach((link)=>{
   
    link.addEventListener("click",function(e){
      let id = link.id;
      console.log(id)
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
  
/*-----------------------------------------------------------------------------CARGO PAGINA DE INICIO --*/
let pagina_inicio = ajax("html/Destacados.html");
pagina_inicio.addEventListener("load",()=>{
    
if (pagina_inicio.status == 200)
          {
            main.innerHTML = pagina_inicio.response;
          }
})
  
/*-----------------------------------------------------------------------------------------FUNCION AJAX--*/ 
  
function ajax(url){
    let metodo = "GET";
    let xhr = new XMLHttpRequest;
    xhr.open(metodo,url);
    xhr.send();
  
    return xhr;
  }





