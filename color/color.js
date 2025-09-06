const button=document.querySelectorAll('.button');

const body=document.querySelector('body')

button.forEach((function (buttons){
    
    console.log(buttons)
    
    buttons.addEventListener('click',function(e){
        
        console.log(e)
        
        if(e.target.id==='grey'){
            
      body.style.backgroundColor=e.target.id}
        
      if(e.target.id==='yellow'){
                
         body.style.backgroundColor=e.target.id}
    
      if(e.target.id==='purple'){
                    
          body.style.backgroundColor=e.target.id}
        
              if(e.target.id==='aqua'){
                        
              body.style.backgroundColor=e.target.id}
    
    }
    )

}
)




































               
