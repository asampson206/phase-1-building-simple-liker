// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function handleHeartClick() {
  const heartIcon = document.querySelectorAll('.like-glyph');
  console.log(heartIcon)
  for(const heart of heartIcon){
  heart.addEventListener('click', function(e) {

mimicServerCall()
.then(function() {
  console.log(e.target.innerText);
  const heartIcon = e.target.innerText
if(heartIcon === '♡' ){
  e.target.innerText = FULL_HEART
  e.target.className = 'activated-heart'
}
else{
  e.target.innerText = EMPTY_HEART
e.target.className = ''}})

.catch(function(error) {
  console.log(error);
  const errorMessage = error.message;
  const errorModal = document.getElementByClassName("hidden");
  const errorTextElement = errorModal.querySelector('.error-message');
  errorTextElement.textContent = errorMessage;
  errorModal.classList.remove('hidden');
  })})}}
handleHeartClick()
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
  })}

