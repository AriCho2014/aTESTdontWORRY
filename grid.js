
  const showAnswerBtn = document.getElementById('showAnswerBtn');
  const answerImageContainer = document.getElementById('answerImageContainer');

  showAnswerBtn.addEventListener('click', () => {
    // Toggles the hidden attribute class visibility layer
    answerImageContainer.classList.toggle('hidden');

    // Update the button text to match the visibility state
    if (answerImageContainer.classList.contains('hidden')) {
      showAnswerBtn.textContent = 'Show Answer';
    } else {
      showAnswerBtn.textContent = 'Hide Answer';
    }
  });
