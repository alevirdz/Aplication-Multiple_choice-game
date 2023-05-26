let arrayNewQuestions = [];

const addNewQuestion = document.getElementById('addNewQuestionForm');
const questionInput = document.getElementById('Question');
const optionInputOne = document.getElementById('option_one');
const optionInputTwo = document.getElementById('option_two');
const optionInputThree = document.getElementById('option_three');
const optionInputFor = document.getElementById('option_for');
const userList = document.getElementById('userList');

const buttonContinue = document.getElementById('continue');
const cardQuestionsStillAnswers = document.getElementById('cardQuestionsStillAnswers');
const addQuestions = document.getElementById('addQuestions');



// Función para agregar un nuevo usuario
const addUser = (event) => {
  event.preventDefault();

  // Obtener los valores del formulario
  const question = questionInput.value;
  const option_one = optionInputOne.value;
  const option_two = optionInputTwo.value;
  const option_three = optionInputThree.value;
  const option_for = optionInputFor.value;

  // Crear un nuevo objeto de usuario
  const newUser = {
    questions: question,
    multipleOption: [option_one, option_two, option_three, option_for],
  };

  // Agregar el nuevo usuario a la lista
  arrayNewQuestions.push(newUser);
  console.log(arrayNewQuestions);




  // Limpiar los campos del formulario
  // nameInput.value = '';
  // optionInput.value = '';

  // Actualizar la lista de usuarios
  // renderQuestionList();
};


// Función para eliminar un usuario
const deleteUser = (index) => {
  // Eliminar el usuario de la lista por su índice
  arrayNewQuestions.splice(index, 1);

  // Actualizar la lista de usuarios
  renderQuestionList();
};

// Función para renderizar la lista de usuarios
const renderQuestionList = () => {
  // Limpiar la lista existente
  userList.innerHTML = '';

  arrayNewQuestions.forEach((user, index) => {
    const li = document.createElement('li');
    li.className = 'is-flex is-justify-content-space-between';
    const userInfo = document.createElement('div');
    userInfo.innerText = `${user.name} - ${user.email}`;
    const deleteButton = document.createElement('button');
    deleteButton.className = 'button is-danger';
    deleteButton.innerText = 'Eliminar';

    deleteButton.addEventListener('click', () => {
      deleteUser(index);
    });

    li.appendChild(userInfo);
    li.appendChild(deleteButton);
    userList.appendChild(li);
  });
};


addNewQuestion.addEventListener('submit', (event) => {
  addUser(event);
});



buttonContinue.addEventListener('click', (event) => {
  event.preventDefault()
  addNewQuestion.classList.add('d-none')
  cardQuestionsStillAnswers.classList.remove('d-none')

    arrayNewQuestions.forEach((package, index) => {
      let templateBox = `
      <div class="box" id="${index}">
        <small> [${index}]</small> - <strong>${package.questions}</strong>
        <div class="container" id="addOptions${index}"></div>
      </div>`;
      addQuestions.innerHTML += templateBox;

      package.multipleOption.forEach((optionsAnswers, optionIndex) => {
        let numberQuestion = index;
        let addOptionsCard = document.getElementById('addOptions' + numberQuestion);
        let templateCheckbox = `
          <div class="field">
            <label class="checkbox">
              <input type="checkbox" class="options" value="${optionIndex}" id="${optionIndex}">
              ${optionsAnswers}
            </label>
          </div>
        `;
        addOptionsCard.innerHTML += templateCheckbox;

      })



      //Agregando la respuesta segun el index
      let preguntaNumero = 1;
      if(preguntaNumero === index){
        arrayNewQuestions[index].answer = "2";
      }
    })
    
    
});
