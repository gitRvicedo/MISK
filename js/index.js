console.log('vinculado')

let links = document.querySelectorAll('a')
let main = document.querySelector('container')

/*
links.forEach((link)=>{
link.addEventListener("click",()=>{
    let id = link.id;
    let archivo =  id + ".html"
    console.log(archivo)
    let xhr = ajax(archivo)
   
    xhr.addEventListener("load",()=>{
            if (xhr.status == 200)
            {
                main.innerHTML = xhr.response;
                
            }
    })
    })
})//cierre del for 

//precarga de la pagina de inicio
let pagina_inicial = ajax("productos.html")
pagina_inicial.addEventListener("load",()=>{
    if(pagina_inicial == 200){
        main.innerHTML = pagina_inicial.response;
        console.log(xhr.response)
    }
})


function ajax(url,metodo){
    let http_metodo = metodo || "GET";
    let xhr = new XMLHttpRequest
    xhr.open( http_metodo,url)
    xhr.send();
    return xhr;

}
*/







