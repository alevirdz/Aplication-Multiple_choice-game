let arrayGameQuestions = [];
let numberOption = 0; 
let arrayMultipleOption = [];

//Add Question
const form = document.getElementById('form');

//Options
const divOptionsQuestions = document.getElementById('OptionsQuestions');
const addOptionAnswer = document.getElementById('AddOptionAnswer');
const removeOptionAnswer = document.getElementById('removeOptionAnswer');

//Actions
const buttonContinue = document.getElementById('next');

//Display list question
const contentListQuestions = document.getElementById('content-list-question');
const divListQuestions = document.getElementById('listQuestions');
const saveQuestion = document.getElementById('saveQuestion');

addOptionAnswer.addEventListener('click', (event)=> {
  event.preventDefault();
  if(numberOption === 4){
    messageSystem({
      text: 'Maximum 4 answers',
      icon: 'question',
      confirmButtonText: 'Continue'
    });
  }else{
    numberOption++
    let templateInput = `
    <div class="field">
            <label class="label">Option ${numberOption}</label>
            <div class="control">
              <input class="input add-option" type="text" id="option_${numberOption}" required>
            </div>
          </div>
    `;
    divOptionsQuestions.innerHTML += templateInput;
  }

});

removeOptionAnswer.addEventListener('click', (event) => {
  event.preventDefault();
  numberOption --;
  if(numberOption <= 0){
    numberOption = 0;
  }
  
  const lastInput = divOptionsQuestions.lastElementChild;
  if (lastInput) {
    lastInput.remove();
  }
})

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if(numberOption >= 2){
    getOptionOfAnswer();
  }else{
    messageSystem({
      text: 'You must have at least two answers minimum',
      icon: 'error',
      confirmButtonText: 'Continue'
    });
  }

});

const getOptionOfAnswer = () => {
  let inputs = document.querySelectorAll('.add-option');
  inputs.forEach((input) => {
    let getValueOption = input.value;
    arrayMultipleOption.push(getValueOption);
  });
  
  const createQuestion = {
    question: document.getElementById('question').value,
    multipleOption: arrayMultipleOption,
  };

  arrayGameQuestions.push(createQuestion);
  arrayMultipleOption = []
  inputs.forEach(function(input) {
    let EmptytValueOption = input.value = '';
  });

  renderListQuestions();
}

const renderListQuestions = () => { 
  contentListQuestions.classList.remove('d-none')
  divListQuestions.innerHTML = '';
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
      }
    });
  });
  
};

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

saveQuestion.addEventListener('click', () => {
  if(arrayGameQuestions.length ===  0){
    messageSystem({
      text: 'You need to add at least one question',
      icon: 'error',
      confirmButtonText: 'Continue'
    });
  }else{
    let allAnswersSelected = checkAllAnswersSelected();
    if (allAnswersSelected) {
      createQuestions(arrayGameQuestions);
    } else {
      messageSystem({
        text: 'You must add the answer of your question',
        icon: 'error',
        confirmButtonText: 'Continue'
      });
    }
  }

});

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
              <button class="button is-danger" onclick="deleteQuestion(${_vm.indice})">Remove</button>
            </div>
          </div>
          <div class="container" id="addOptions${_vm.indice}"></div>
        </div>
      </a>
  `;
  divListQuestions.innerHTML += templateBox;
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
};

const messageSystem = (_vm) => {
  Swal.fire({
    title: _vm.title === '' ? '' :  _vm.title,
    text: _vm.text,
    icon: _vm.icon,
    confirmButtonText: _vm.confirmButtonText
  })
};


function createQuestions(_vm) {
  console.log(_vm)
  const data = {
    questions: _vm,
    action:'create'
  };
  axios.post('questions.php', data)
  .then((response) => {
      console.log(response);
      console.log(response.data);
    })
  .catch((error) => {
      console.error(error);
    });
}

let getIDBD = ''
const getQuestions = () => {
  axios.post('questions.php', {action: 'get'})
  .then((response) => {
    getIDBD = response.data.id
    console.log(response.data.id)
    let collection = JSON.parse(response.data.question)
    console.log(collection.example)
  })
  .catch ((error) => {
    console.error(error);
  })
}

const deleteQuestionBD = () => {
  const data = {
    action: 'delete',
    id: getIDBD
  };
  axios.post('questions.php', data)
  .then((response) =>{
    console.log(response.data);
    // console.log(JSON.parse(response.data));s
  })
  .catch((error) => {
    console.error(error);
  });
}