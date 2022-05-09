// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//second step is to recognize the JS events
//third step communicate with the server. 


/*function hideError(){
  document.getElementById("modal").hidden = true
 document.getElementById("modal-message").hidden = true
}
setTimeout(()=>hideError(),3000)

mimicServerCall()
.then((response)=>{return response})
.catch((error)=>{console.log(error)})


const allHearts = document.querySelectorAll(".like-glyph");
for (const change of allHearts){
  change.addEventListener("click",mimicServerCall);
}
*/


function handleEvent(event){
  let like = event.target
  mimicServerCall()
.then(()=>{

  if(like.innerHTML === EMPTY_HEART){
    like.innerHTML = FULL_HEART
  } else { like.innerHTML = EMPTY_HEART}
  
})

.catch(function(error){
  const modal = document.querySelector(".hidden")
  modal.className = "hidden"
  setTimeout(function(){
    error.modal
  },3000)
})
}
const allHearts = document.querySelectorAll(".like-glyph")
for (const change of allHearts){
  change.addEventListener("click", handleEvent)
}






//
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
