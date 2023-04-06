const questionBoxEls = document.querySelectorAll('.faq .question-box');
const faqIconEls = document.querySelectorAll('.faq .material-icons');
const faqAnswerEls = document.querySelectorAll('.faq .question-box p');

faqIconEls.forEach((el, index) => {
  const answerEl = faqAnswerEls[index];
  el.addEventListener('click', event => {
    event.stopPropagation();
    if (answerEl.classList.contains('show')) {
      hideAnswer(el, answerEl);
    } else {
      showAnswer(el, answerEl);
    }
  });
});

questionBoxEls.forEach((el, index) => {
  el.addEventListener('click', function () {
    const iconEl = faqIconEls[index];
    const answerEl = faqAnswerEls[index];
    if (answerEl.classList.contains('show')) {
      hideAnswer(iconEl, answerEl);
    } else {
      showAnswer(iconEl, answerEl);
    }
  });
});

function showAnswer(iconEl, answerEl) {
  iconEl.textContent = 'remove';
  answerEl.classList.add('show');
}

function hideAnswer(iconEl, answerEl) {
  iconEl.textContent = 'add';
  answerEl.classList.remove('show');
}
