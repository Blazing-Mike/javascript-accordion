import './style.css'

const questions = document.querySelectorAll('section');

questions.forEach((question) => {
  const opener = question.querySelector('h3');
  opener.addEventListener('click', () => {
    [...questions].filter(q=> q !== question).forEach(q => q.classList.remove('opened'));
    question.classList.toggle('opened');
  })
 
})

