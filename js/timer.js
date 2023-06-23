const startTime = () => {
    if (controlTime.startTime > 0) {
    controlTime.startTime--;
      let divTime = document.getElementById('time_'+ countQuestion)
      !!divTime ? divTime.innerHTML = controlTime.startTime + 1: '';
      timeoutId = setTimeout(startTime, 1000);
      
    }else{
      endTimeShowCorrect();
      controlTime.startTime = controlTime.restartTime;
      clearTimeout(timeoutId); 
    }
  };
  
  const endTimeShowCorrect = () => {
    setTimeout(() => {
      let correctAnswer = JSON.parse(collectionQuestion[countQuestion -1].question).answer;
      let showCorrectAnswer = document.querySelector('.key_' + countQuestion + '_' + correctAnswer);

      if (showCorrectAnswer) {
        showCorrectAnswer.classList.add('true');
  
        let questionLimit = collectionQuestion.length;
        countQuestion === questionLimit ? finish() : next();
        protectButton();
  
        let currentQuestionNumber = document.querySelector('.question-' + countQuestion);
        setTimeout(() => {
          currentQuestionNumber.classList.remove(animation.defaultInPut);
          currentQuestionNumber.classList.add(animation.defaultOutPut)
        }, 1000);
      };
      
    }, 500);
  };