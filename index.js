let liked      = document.getElementById('liked'),
    likeButton = document.getElementById('likeButton');

//same with document.ready on jquery
document.addEventListener('DOMContentLoaded', () => {
  liked.classList.add('hide');
});

let likeIt = () => {
  return new Promise((resolve, reject) => {
    liked.classList.remove('hide'); 
    liked.classList.toggle('animateLike');
    setTimeout(resolve, 600);
  });
  
}

likeButton.addEventListener('click',() => {
  likeIt().then(() => {
    liked.classList.add('hide');
    liked.classList.remove('animateLike');
  });
});


