let coniditions = {
    firstName: /[a-z]/,
    lastName: /[a-z]/,
    address: /[a-z]/,
    email: /[a-zA-Z0-9]{3}@[a-z]/,
    password: /^(?=.*\d)(?=.*[a-zA-Z]).{8,16}$/,
    comments: /[a-zA-Z0-9]{8}/
}

function validate(y,z){
    var res = z.test(y.value)
    if(res){
      return  y.classList.add('Valid') 
      
    }
    else 
    return y.classList.add('Invalid')

}
let userInput = document.getElementsByTagName('input')

for (var i of userInput) {
    i.addEventListener('keyup', function event(e) {
        var x = e.target
      return  validate(x, coniditions[x.name])
    


    })
    
    
} 


let inputs = document.querySelectorAll('input')
for(let i in inputs){
  document.getElementById('Reset').addEventListener("click", function(){
console.log(inputs[i])
 inputs[i].value = ''

  }
   
  )
}
 
  document.getElementById('Send').addEventListener("click", function(){
    for(var y of userInput){
    if(y.value === ''){
      return alert("Please fil " + y.name)
    }
    
    
  
    }
  })
  