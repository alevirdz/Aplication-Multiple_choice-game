//Inizialite Always
let countQuestion = 0;
let points = 0;
let controlTime = {
  startTime: 10,
  restartTime: 10,
}
let collectionQuestion = {};

//Div's HTML
let divCardPresentation = document.getElementById('card-presentation')
let divDynamicCard = document.getElementById('itsDynamic');

let animation = {
  defaultInPut: 'animate__rotateInDownLeft',
  defaultOutPut: 'animate__zoomOutDown',
};

templateWelcome({
  title: 'Questions',
  subtitle: 'How much do you know?',
  textButton: 'start'
});

document.getElementById('start').addEventListener('click', () => startGame());
const startGame = () => {
  getQuestions()
  .then((data => {
    if(data.data === null){
      console.log("No questions")
    }else{
      let collection = JSON.parse(data.data.question)
      collectionQuestion = collection.questions;

      divDynamicCard.innerHTML = '';
      loadListQuestions();
      generateQuestion();
      document.getElementById('card-presentation').classList.add('d-none');
    }    

  }))
  .catch((error) => {
    console.log(error)
  });
};

const loadListQuestions = () => {
  for (let index = 0; index < collectionQuestion.length; index++) {
    let package = collectionQuestion[index];
    templateQuestion({
      numberQuestion: index + 1,
      case: package,
    });
  }
};

const generateQuestion = () => {
  let questionLimit = collectionQuestion.length;
  // if(questionLimit > countQuestion ){
  if(countQuestion <  questionLimit){
    countQuestion += 1;
  }
  
  if (countQuestion > 1) {
    setTimeout(() => {
      let currentQuestion = new Events(document.querySelector('.question-' + (countQuestion - 1)));
      currentQuestion.hide();
    }, 1000);
  };

  let currentQuestion = new Events(document.querySelector('.question-' + countQuestion));
  currentQuestion.show();
  userChoose();
}

const userChoose = () => {
  time();
  document.querySelectorAll('button.list_' + countQuestion).forEach((element) => {
    element.addEventListener('click', (e) => {
      let getChoseAnswer = element.id
      let correctAnswer = collectionQuestion[countQuestion - 1].answer;
      let showCorrectAnswer = new Events(document.querySelector('.key_' + countQuestion + '_' + correctAnswer));
      let currentQuestionNumber = document.querySelector('.question-' + countQuestion);

      if (parseInt(getChoseAnswer) === parseInt(correctAnswer)) {
        showCorrectAnswer.true();
        points += 1;
        setTimeout(() => {
          currentQuestionNumber.classList.remove(animation.defaultInPut);
          currentQuestionNumber.classList.add(animation.defaultOutPut)
        }, 1000)

      }else {
        showCorrectAnswer.true();
        currentQuestionNumber.classList.remove(animation.defaultInPut);
        setTimeout(() => {
          currentQuestionNumber.classList.add(animation.defaultOutPut)
        }, 1000);
      }

      let questionLimit = collectionQuestion.length;
      countQuestion === questionLimit ? finish() : next();
      protectButton();

    })
  })
};

const protectButton = () => {
  let protectOptionsAnswers = document.getElementsByClassName('options-answers');
  for (let i = 0; i < protectOptionsAnswers.length; i++) {
    protectOptionsAnswers[i].disabled = true;
  };
  setTimeout(() => {
    for (let i = 0; i < protectOptionsAnswers.length; i++) {
      protectOptionsAnswers[i].disabled = false;
    }
  }, 1500);
};

const next = () => {
  setTimeout(() => generateQuestion(), 1000)
};

const finish = () => {
  setTimeout(() => {
    templateResult({
      title: 'Game over',
      textButton: 'Re started'
    });
    document.getElementById('results').innerHTML = points + '/' + countQuestion;
    document.getElementById('restart').addEventListener('click', () => {
      countQuestion = 0;
      points = 0;
      resetGame();
    });
  }, 2000)
};

const resetGame = () => {
  divDynamicCard.innerHTML = '';
  startGame();
};


const time = () => {
  if (controlTime.startTime > 0) {
    controlTime.startTime--;
    let divTime = document.getElementById('time_'+ countQuestion)
    !!divTime ? divTime.innerHTML = controlTime.startTime + 1: '';
    setTimeout(time, 1000);
    
  }else{
    endTimeShowCorrect();
    controlTime.startTime = controlTime.restartTime;
  }
};

const endTimeShowCorrect = () => {
  setTimeout(() => {
    let correctAnswer = collectionQuestion[countQuestion - 1].answer;
    let showCorrectAnswer = document.querySelector('.key_' + countQuestion + '_' + correctAnswer);
    console.log(showCorrectAnswer)
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