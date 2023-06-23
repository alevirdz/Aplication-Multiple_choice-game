//Inizialite Always
let totalQuestion = 0;
let countQuestion = 0;
let points = 0;

let controlTime = {
  startTime: 10,
  restartTime: 10,
}
let timeoutId;
let collectionQuestion = [];
// let collectionRandom = [];
//Div's HTML
let divCardPresentation = document.getElementById('card-presentation')
let divDynamicCard = document.getElementById('itsDynamic');

let animation = {
  defaultInPut: 'animate__rotateInDownLeft',
  defaultOutPut: 'animate__zoomOutDown',
};


let random = true;

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
      collectionQuestion = data.data;
      divDynamicCard.innerHTML = '';
      loadListQuestions();
      generateQuestion();
      document.getElementById('card-presentation').classList.add('d-none');
      document.getElementById('endGame').classList.remove('d-none');
    }    

  }))
  .catch((error) => {
    console.log(error)
  });
};

const loadListQuestions = () => {
  let figureRandom = shuffle(collectionQuestion);

  totalQuestion = collectionQuestion.length
  for (let index = 0; index < totalQuestion; index++) {
    let package = random ? figureRandom[index] : collectionQuestion[index];
    templateQuestion({
      numberQuestion: index + 1,
      case: package,
    });
  }

};

const generateQuestion = () => {
  if( random === true){
    countQuestion < totalQuestion ? countQuestion += 1 : '';

    if (countQuestion > 1) {
      setTimeout(() => {
        let currentQuestion = new Events(document.querySelector('.question-' + (countQuestion - 1)));
        currentQuestion.hide();
      }, 1000);
    };
    
    let currentQuestion = new Events(document.querySelector('.question-' + countQuestion));
    currentQuestion.show();
    userChoose();
    
  }else{
    countQuestion < totalQuestion ? countQuestion += 1 : '';

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
}

const userChoose = () => {
  startTime();
  document.querySelectorAll('button.list_' + countQuestion).forEach((element) => {
    element.addEventListener('click', (e) => {
      clearTimeout(timeoutId); 
      let getChoseAnswer = element.id
      let correctAnswer = JSON.parse(collectionQuestion[countQuestion -1].question).answer;
      let showCorrectAnswer = new Events(document.querySelector('.key_' + countQuestion + '_' + correctAnswer));
      let currentQuestionNumber = document.querySelector('.question-' + countQuestion);

      if (parseInt(getChoseAnswer) === parseInt(correctAnswer)) {
        controlTime.startTime = controlTime.restartTime;
        showCorrectAnswer.true();
        points += 1;

        setTimeout(() => {
          currentQuestionNumber.classList.remove(animation.defaultInPut);
          currentQuestionNumber.classList.add(animation.defaultOutPut)
        }, 1000);
      }else {
        controlTime.startTime = controlTime.restartTime;
        showCorrectAnswer.true();
        
        setTimeout(() => {
          currentQuestionNumber.classList.remove(animation.defaultInPut);
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
  setTimeout(() => generateQuestion(), 1000);
};

const finish = () => {
  setTimeout(() => {
    templateResult({
      title: 'Game over',
      textButton: 'Re started'
    });
    document.getElementById('results').innerHTML = points + '/' + countQuestion;
    document.getElementById('restart').addEventListener('click', () => {
      totalQuestion = 0;
      countQuestion = 0;
      points = 0;
      resetGame();
    });
  }, 2000);
};

const resetGame = () => {
  divDynamicCard.innerHTML = '';
  startGame();
};

document.getElementById('endGame').addEventListener('click', () => endGame());
const endGame = () => {
    templateResult({
      title: 'Game over',
      textButton: 'Re started'
    });
    document.getElementById('results').innerHTML = points + '/' + totalQuestion;
    document.getElementById('restart').addEventListener('click', () => {
      totalQuestion = 0;
      countQuestion = 0;
      points = 0;
      resetGame();
    });
};