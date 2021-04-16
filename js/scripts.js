/*==============
 SELECTED ELEMENTS
==============*/ 
const searchBar = document.querySelector('#search');
const container = document.querySelector('.container');
const images = [...document.querySelectorAll('.img')];
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img'); 
const close = document.querySelector('.close');
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const search = document.querySelector('#search')
let index; 

/*==============
 FUNCTIONS
==============*/ 
function openModal(event){
  const element = event.target
  if(event.target.classList.contains('prev')){
    index--
    if(index < 1) index = images.length
    modalImg.src = `photos/${index}.jpg` 
  }

  if(event.target.classList.contains('next')){
    index++
    if(index > images.length) index = 1
    modalImg.src = `photos/${index}.jpg` 
  }
  
  if(event.target.closest('.close')) modal.classList.remove('open')  
}

/*==============
 EVENT LISTENERS
==============*/ 
container.addEventListener('click', function(event) {
  const element = event.target;
  if(element.classList.contains('img')){
    index = images.indexOf(element)
    modal.classList.add('open');
    modalImg.src = element.getAttribute('src')
  }
})

//changes the images when the next & previous buttons are clicked; closes modal window
modal.addEventListener('click', openModal)



//hides images when typing in the search bar
// search.addEventListener('keyup', function(){
//   console.log(search.value)
// })
//fix padding for next and prev for larger click area
//fix image for modal window
//add functionality for search bar use forEach


//close modal window
// close.addEventListener('click', function(){
//   modal.classList.remove('open')
// })
// nextBtn.addEventListener('click', function(){
//   index--
//   if(index < 1) index = images.length
//   modalImg.src = `photos/${index}.jpg`  
// })

// prevBtn.addEventListener('click', function(){
//   index++
//   if(index > images.length) index = 1    
//   modalImg.src = `photos/${index}.jpg`  
// })
//try putting even.target.closest or try removing the overlay add the eventlistener to the modal-content
//try to set media queries for images when modal window is open
//remove event listeners on close, next, & prev buttons
// modalContent.addEventListener('click', function(event){
//   if(event.target.classList.contains('prev')){
//     index--
//     if(index < 1) index = images.length
//     modalImg.src = `photos/${index}.jpg`
//   }

//   if(event.target.classList.contains('next')){
//     index++
//     if(index > images.length) index = 1    
//     modalImg.src = `photos/${index}.jpg`
//   }
// })