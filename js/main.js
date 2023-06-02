//Inizialite Always
let countQuestion = 0;
let points = 0;

//Div's HTML
let divCardPresentation = document.getElementById('card-presentation')
let divDynamicCard = document.getElementById('itsDynamic');

let animation = {
  defaultInPut: 'animate__rotateInDownLeft',
  defaultOutPut: 'animate__zoomOutDown',
}

templateWelcome({
  title: 'Questions',
  subtitle: 'How much do you know?',
  textButton: 'start'
});
document.getElementById('start').addEventListener('click', () => startGame());

const startGame = () => {
  divDynamicCard.innerHTML = '';
  loadListQuestions();
  generateQuestion();
  document.getElementById('card-presentation').classList.add('d-none');
};

const loadListQuestions = () => {
  for (let index = 0; index < questions.length; index++) {
    let package = questions[index];
    console.log(index)
    templateQuestion({
      numberQuestion: index +1,
      case: package,
    });
  }
};

const generateQuestion = () => {
  countQuestion += 1;
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
  document.querySelectorAll('button.list_' + countQuestion).forEach((element) => {
    element.addEventListener('click', (e) => {
      let getChoseAnswer = element.id
      let correctAnswer = questions[countQuestion - 1].answer;
      let showCorrectAnswer = new Events(document.querySelector('.key_' + countQuestion + '_' + correctAnswer));
      let currentQuestionNumber = document.querySelector('.question-' + countQuestion);

      if (parseInt(getChoseAnswer) === parseInt(correctAnswer)) {
        showCorrectAnswer.true();
        points += 1; 
        setTimeout(() => {
          currentQuestionNumber.classList.remove(animation.defaultInPut);
          currentQuestionNumber.classList.add(animation.defaultOutPut)
        }, 1000)
        
      } else {
        showCorrectAnswer.true();
        currentQuestionNumber.classList.remove(animation.defaultInPut);
        setTimeout(() => {
          currentQuestionNumber.classList.add(animation.defaultOutPut)
        }, 1000);
          
      }
      
      let questionLimit  = questions.length;
      countQuestion === questionLimit ?  finish() :  next();
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
      textButton: 're started'
    });
    document.getElementById('results').innerHTML = points +'/'+ countQuestion;
    document.getElementById('restart').addEventListener('click', () => {
      countQuestion = 0;
      points = 0;
      resetGame();
    });
  }, 2000)
};

const resetGame = () => {
  divDynamicCard.innerHTML= '';
  startGame();
};