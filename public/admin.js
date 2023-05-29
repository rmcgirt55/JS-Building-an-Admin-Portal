// Your Code Here
let dog= document.querySelector("#dog")

 async function updateBook(){ 
let response = await fetch('http://localhost:3001/updateBook',{
    method:"PATCH",
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'id':3,
        'title':'Legends of Arathae'
    })
})

let updateBook = await response.json();
console.log(updateBook)
 }

 updateBook()

//  dog.addEventListener('click',()=>{
//     console.log("Dallas rules")
//  })
 var button = document.getElementsByTagName('button');  
 

let input = document.getElementsByTagName('input')

for (let j=0; j<input.length;j++){
    input[j].addEventListener('keyup',()=>{
       updateCount(j,input[j])
    })
}


 for (var i = 0; i < button.length; i++) {        
    button[i].addEventListener('click',()=>{
       updateCount(i,button[i])
        console.log(i)
        
    } )        
    // document.getElementById(images[i].id).addEventListener('mouseout',)        
} 

 // var buttons = document.querySelectorAll('.booksSave') 
// for (var i =1; i<= buttons.length; i++){
//    console.log(buttons[i])
//     buttons[i].addEventListener('click',(i,input)=>{
//         updateCount(i,input)
//     })
// }
console.log('hi')
//function to update book count 
async function updateCount(i,input){ 
    let response = await fetch('http://localhost:3001/updateBook',{
        method:"PATCH",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'id':i+1,
            "quantity": input.value
        })
    })
    
    let updateBook = await response.json();
    console.log(updateBook)
     }

     let shinobi = document.querySelector('#shin')
