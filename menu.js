const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click",function(){ 
	menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");

for (let i =0; i <subMenuBtn.length; i++) {/*muetre todo el submenu cuando aprete el menu*/ 
  subMenuBtn[i].addEventListener("click",function(){
      if (window.innerWidth<1024) {  // , ancho de ventana menor que 1024
          const subMenu=this.nextElementSibling;  //selecciona el hermano que le sigue  de esteque hice click this
          const height = subMenu.scrollHeight; // empuja el submenu aumentan el tamaño
         
         if( subMenu.classList.add("desplegar")){
          subMenu.classList.remove("desplegar");
          subMenu.removeAttribute("style");
          
         }else{
        
          subMenu.classList.add("desplegar");
          subMenu.style.height= height+"px";
        }
      }
  });
}
