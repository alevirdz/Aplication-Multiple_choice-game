let arrayGameQuestions = [];

const addNewQuestion = document.getElementById('addNewQuestionForm');
const questionInput = document.getElementById('Question');
const optionInputOne = document.getElementById('option_one');
const optionInputTwo = document.getElementById('option_two');
const optionInputThree = document.getElementById('option_three');
const optionInputFor = document.getElementById('option_for');
const userList = document.getElementById('userList');

//Actions
const buttonContinue = document.getElementById('next');
const questionsWithoutAnswer = document.getElementById('cardQuestionsWithoutAnswer');
const contentListQuestions = document.getElementById('content-list-question');
const listQuestions = document.getElementById('listQuestions');

const finishQuestion = document.getElementById('finalizarPreguntas');

addNewQuestion.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputQuestion = questionInput.value;
  const option_one = optionInputOne.value;
  const option_two = optionInputTwo.value;
  const option_three = optionInputThree.value;
  const option_for = optionInputFor.value;

  const createQuestion = {
    question: inputQuestion,
    multipleOption: [option_one, option_two, option_three, option_for],
  };

  arrayGameQuestions.push(createQuestion);
  renderListQuestions();
});



const renderListQuestions = () => { 
  contentListQuestions.classList.remove('d-none')
  listQuestions.innerHTML = '';
  arrayGameQuestions.forEach((package, index) => {
      templateForPanelOfQuestions({
        indice: index,
        package: package
      });
      package.multipleOption.forEach(( options, indexOption) => {
        let numberQuestion = index;
        templateForAddAnswers({
          indiceAnswer: indexOption,
          optionAnswer: options,
          numberQuestion: numberQuestion,
        });
      });
    });
    chooseCorrectAnswer();
};

const chooseCorrectAnswer = () => {
  let checkboxes = document.querySelectorAll('.options');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        let index = parseInt(checkbox.getAttribute('data-question'));
        let answerSelected = this.value;
        let selectChecboxes = document.querySelectorAll('.options[data-question="' + index + '"]');
        
        selectChecboxes.forEach((uncheck) => {
          uncheck !== checkbox ? uncheck.checked = false: '';
        });
        arrayGameQuestions[index].answer = answerSelected;
        console.log(arrayGameQuestions)
      }
    });
  });
  
};

finishQuestion.addEventListener('click', () => {
  let allAnswersSelected = checkAllAnswersSelected();
  if (allAnswersSelected) {
    console.log('Next');
  } else {
    console.log('empty fields');
  }
});

const checkAllAnswersSelected = () => {
  let allAnswersSelected = true;
  arrayGameQuestions.forEach((package) => {
    if (!package.answer) {
      allAnswersSelected = false;
      return;
    }
  });
  return allAnswersSelected;
}


const deleteQuestion = (index) => {
  arrayGameQuestions.splice(index, 1);
  renderListQuestions()
};

const templateForPanelOfQuestions = (_vm) => {
  let templateBox = `
  <a class="panel-block is-active">
        <div class="box" id="${_vm.indice}">
          <div class="columns">
            <div class="column is-11">
              <small> ${_vm.indice +1} .- </small> <strong>${_vm.package.question}</strong>
            </div>
            <div class="column">
              <button class="button is-danger" onclick="deleteQuestion(${_vm.indice})">Danger</button>
            </div>
          </div>
          <div class="container" id="addOptions${_vm.indice}"></div>
        </div>
      </a>
  `;
  listQuestions.innerHTML += templateBox;
};

const templateForAddAnswers = (_vm) => {
  let addOptionsCard = document.getElementById('addOptions' + _vm.numberQuestion);
  let templateCheckbox = `
    <div class="field">
      <label class="checkbox">
        <input type="checkbox" class="options" value="${_vm.indiceAnswer}" data-question="${_vm.numberQuestion}">
          ${_vm.optionAnswer}
      </label>
    </div>
    `;
  addOptionsCard.innerHTML += templateCheckbox;
}