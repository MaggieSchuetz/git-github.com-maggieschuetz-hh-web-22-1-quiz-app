export default function Forms(formElement) {
  const textareaQuestion = formElement.querySelector(
    '[data-js="textarea-question"]'
  );
  const textareaAnswer = formElement.querySelector(
    '[data-js="textarea-answer"]'
  );
  const outputQuestion = formElement.querySelector(
    '[data-js="output-question"]'
  );
  const outputAnswer = formElement.querySelector('[data-js="output-answer"]');

  textareaQuestion.addEventListener('input', () => {
    outputQuestion.value = `${200 - textareaQuestion.value.length}`;
    if (Number(outputQuestion.value) < 0) {
      outputQuestion.classList.add('color-negative');
    } else {
      outputQuestion.classList.remove('color-negative');
    }
  });

  textareaAnswer.addEventListener('input', () => {
    outputAnswer.value = `${200 - textareaAnswer.value.length}`;
    if (Number(outputAnswer.value) < 0) {
      outputAnswer.classList.add('color-negative');
    } else {
      outputAnswer.classList.remove('color-negative');
    }
  });
}
