/*==============
 SELECTED ELEMENTS
==============*/ 
const searchBar = document.querySelector('#search');
const container = document.querySelector('.container');
const images = [...document.querySelectorAll('.img')];
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img'); 
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const search = document.querySelector('#search');
const searchInput = document.querySelector('input'); 
const desc = document.querySelector('.desc'); 

/*==============
 EVENT LISTENERS
==============*/ 
//OPENS AND DISPLAYS MODAL WINDOW WHEN ONE OF THE IMAGES IS CLICKED
container.addEventListener('click', function(event) {
  if(event.target.classList.contains('img')){
    modal.style.display = 'block'; 
    modalImg.src = event.target.src;
    desc.textContent = event.target.dataset.title; 
  }
}); 

//search functionality
searchInput.addEventListener('keyup', () => {
  const searchVal = searchInput.value; 
  images.forEach((img) => {
    if(!img.dataset.title.includes(searchVal)){
      img.style.display = 'none'; 
    }else {
      img.style.display = 'block'; 
    }
  }); 
  
  if(!searchVal) images.forEach((img) => img.style.display = 'block'); 
}); 

// // WHEN THE MODAL WINDOW IS OPEN IT WILL CHANGE IMAGES OR CLOSE THE MODAL WINDOW DEPENDING ON ICONS CLICKED
modal.addEventListener('click', function(event){
  //CLOSES THE MODAL WINDOW
  if(event.target.classList.contains('close')){
    modal.style.display = 'none'; 
  }
  //DISPLAYS A DIFFERENT IMAGE WHEN next & previous IMAGES ARE CLICKED
  if(event.target.classList.contains('prev')){
    const prevImg = images.find((img) => img.src === modalImg.src);
    const currentImg = prevImg.previousElementSibling;
    if(currentImg){
      modalImg.src = currentImg.src;
    }else{
      modalImg.src = images[images.length-1].src;
    }
    desc.textContent = currentImg.dataset.title;
  }

  if(event.target.classList.contains('next')){
    const prevImg = images.find((img) => img.src === modalImg.src);
    const currentImg = prevImg.nextElementSibling;
    if(currentImg){
      modalImg.src = currentImg.src; 
    }else{
      modalImg.src = images[0].src; 
    }
    desc.textContent = currentImg.dataset.title;
  }
}); 