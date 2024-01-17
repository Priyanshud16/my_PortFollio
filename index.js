var typed = new Typed('#element', {
    strings: ['<i>Web</i> Developer.', 'Frontend Developer.','Backend Developer','Full Stack Developer'],
    typeSpeed: 50,
    loop:true,
   
    
    
  });



  let msgs = document.querySelectorAll(".input");

  msgs.forEach(function (msg) {
    msg.addEventListener("click", function () {
      msg.style.background = "white";
    });
  });
  

  function scrollAbout(event){
 event.preventDefault();
    window.scrollTo(0,900)
    
  }

  function scrollSkill(event){
  event.preventDefault()
  window.scroll(0,1600)
 
  }
  
  function scrollProject(event){
    event.preventDefault()
    window.scrollTo(0,2500)
  }

  function scrollContact(event){
    event.preventDefault()
    window.scrollTo(0,3200)
    
  }
  

  function scrollHome(event){
    event.preventDefault()
    window.scrollTo(0,-4000)
  }