/*function toggleMenu () {  
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    
    burger.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    });    
    // bonus
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', (e) => {    
        navbar.classList.toggle('show-nav');
      }); 
    })
     
  }
  toggleMenu();
*/


//l'horaire
let prepa = document.getElementById("prepa");
let l1 = document.getElementById("l1");
let l2GL = document.getElementById("l2GL");
let l2AS = document.getElementById("l2AS");
let l2TLC  = document.getElementById("l2TLC");
let l2MSI = document.getElementById("l2MSI");
let horaire__prepa = document.getElementById("horaire__prepa");
let horaire__l1 = document.getElementById("horaire__l1");
let horaire__l2GL = document.getElementById("horaire__l2GL");
let horaire__l2MSI = document.getElementById("horaire__l2MSI");
let horaire__l2AS = document.getElementById("horaire__l2AS");
let horaire__l2TLC = document.getElementById("horaire__l2TLC");
let horaire__l2DSGN = document.getElementById("horaire__l2DSGN")
let horaire__l3GL = document.getElementById("horaire__l3GL");
let horaire__l3MSI = document.getElementById("horaire__l3MSI");
let horaire__l3AS = document.getElementById("horaire__l3AS");
let horaire__l3TLC = document.getElementById("horaire__l3TLC");
let horaire__l3DSGN = document.getElementById("horaire__l3DSGN")


prepa.addEventListener('click', function(){
  if(horaire__prepa.classList.contains("active")){
    horaire__prepa.classList.remove("active")
  }else{
    horaire__l1.classList.remove("active")
    horaire__l2GL.classList.remove("active")
    horaire__l2MSI.classList.remove("active")
    horaire__l2AS.classList.remove("active")
    horaire__l2TLC.classList.remove("active")
    horaire__l2DSGN.classList.remove("active")
    horaire__l3GL.classList.remove("active")
    horaire__l3MSI.classList.remove("active")
    horaire__l3AS.classList.remove("active")
    horaire__l3TLC.classList.remove("active")
    horaire__l3DSGN.classList.remove("active")
    horaire__prepa.classList.add("active")
  }
})

l1.addEventListener('click', function(){
  if(horaire__l1.classList.contains("active")){
    horaire__l1.classList.remove("active")
  }else{
    horaire__prepa.classList.remove("active")
    horaire__l2GL.classList.remove("active")
    horaire__l2MSI.classList.remove("active")
    horaire__l2AS.classList.remove("active")
    horaire__l2TLC.classList.remove("active")
    horaire__l2DSGN.classList.remove("active")
    horaire__l3GL.classList.remove("active")
    horaire__l3MSI.classList.remove("active")
    horaire__l3AS.classList.remove("active")
    horaire__l3TLC.classList.remove("active")
    horaire__l3DSGN.classList.remove("active")
    horaire__l1.classList.add("active")
  }
})

l2GL.addEventListener('click', function(){
  if(horaire__l2GL.classList.contains("active")){
    horaire__l2GL.classList.remove("active")
  }else{
    horaire__prepa.classList.remove("active")
    horaire__l1.classList.remove("active")
    horaire__l2MSI.classList.remove("active")
    horaire__l2AS.classList.remove("active")
    horaire__l2TLC.classList.remove("active")
    horaire__l2DSGN.classList.remove("active")
    horaire__l3GL.classList.remove("active")
    horaire__l3MSI.classList.remove("active")
    horaire__l3AS.classList.remove("active")
    horaire__l3TLC.classList.remove("active")
    horaire__l3DSGN.classList.remove("active")
    horaire__l2GL.classList.add("active")
  }
})

l2AS.addEventListener('click', function(){
  if(horaire__l2AS.classList.contains("active")){
    horaire__l2AS.classList.remove("active")
  }else{
    horaire__prepa.classList.remove("active")
    horaire__l1.classList.remove("active")
    horaire__l2MSI.classList.remove("active")
    horaire__l2GL.classList.remove("active")
    horaire__l2TLC.classList.remove("active")
    horaire__l2DSGN.classList.remove("active")
    horaire__l3GL.classList.remove("active")
    horaire__l3MSI.classList.remove("active")
    horaire__l3AS.classList.remove("active")
    horaire__l3TLC.classList.remove("active")
    horaire__l3DSGN.classList.remove("active")
    horaire__l2AS.classList.add("active")
  }
})

l2TLC.addEventListener('click', function(){
  if(horaire__l2TLC.classList.contains("active")){
    horaire__l2TLC.classList.remove("active")
  }else{
    horaire__prepa.classList.remove("active")
    horaire__l1.classList.remove("active")
    horaire__l2MSI.classList.remove("active")
    horaire__l2GL.classList.remove("active")
    horaire__l2AS.classList.remove("active")
    horaire__l2DSGN.classList.remove("active")
    horaire__l3GL.classList.remove("active")
    horaire__l3MSI.classList.remove("active")
    horaire__l3AS.classList.remove("active")
    horaire__l3TLC.classList.remove("active")
    horaire__l3DSGN.classList.remove("active")
    horaire__l2TLC.classList.add("active")
  }
})

l2MSI.addEventListener('click', function(){
  if(horaire__l2MSI.classList.contains("active")){
    horaire__l2MSI.classList.remove("active")
  }else{
    horaire__prepa.classList.remove("active")
    horaire__l1.classList.remove("active")
    horaire__l2TLC.classList.remove("active")
    horaire__l2GL.classList.remove("active")
    horaire__l2AS.classList.remove("active")
    horaire__l2DSGN.classList.remove("active")
    horaire__l3GL.classList.remove("active")
    horaire__l3MSI.classList.remove("active")
    horaire__l3AS.classList.remove("active")
    horaire__l3TLC.classList.remove("active")
    horaire__l3DSGN.classList.remove("active")
    horaire__l2MSI.classList.add("active")
  }
})