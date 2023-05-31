let arrayGameQuestions = [];
let inputIndex = 0; 
let arrayMultipleOption = [];

//Add Question
const form = document.getElementById('form');
const questionInput = document.getElementById('Question');
//Options
const buttonOptionsQuestion = document.getElementById('optionsQuestion');
const addOptionDynamic = document.getElementById('inputOptionDynamic');
//Actions
const buttonContinue = document.getElementById('next');
const questionsWithoutAnswer = document.getElementById('cardQuestionsWithoutAnswer');
const contentListQuestions = document.getElementById('content-list-question');
const listQuestions = document.getElementById('listQuestions');

const finishQuestion = document.getElementById('finalizarPreguntas');

buttonOptionsQuestion.addEventListener('click', (event)=> {
  event.preventDefault();
  if(inputIndex === 4){
    console.log("Limite")
  }else{
    inputIndex++
    let templateInput = `
    <div class="field">
            <label class="label">Option ${inputIndex}</label>
            <div class="control">
              <input class="input add-option" type="text" id="option_${inputIndex}" required>
            </div>
          </div>
    `;
    addOptionDynamic.innerHTML += templateInput;
  }

});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  let inputs = document.querySelectorAll('.add-option');
  inputs.forEach((input) => {
    let getValueOption = input.value;
    arrayMultipleOption.push(getValueOption);
  });

  console.log(arrayMultipleOption)
  
  const createQuestion = {
    question: questionInput.value,
    multipleOption: arrayMultipleOption,
  };

  arrayGameQuestions.push(createQuestion);
  arrayMultipleOption = []
  inputs.forEach(function(input) {
    let EmptytValueOption = input.value = '';
  });

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