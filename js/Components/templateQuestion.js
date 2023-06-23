const templateQuestion = (_vm) => {
  let data = JSON.parse(_vm.case.question);

  let addOption = "";
  data.multipleOption.forEach((option, index) => {
    addOption += `<li class="options"><button class="button options-answers list_${_vm.numberQuestion} key_${_vm.numberQuestion}_${index}" id="${index}">${option}</button></li>`;
  });

    divDynamicCard.innerHTML += `
    <div class="d-none question-${_vm.numberQuestion} animate__animated ${animation.defaultInPut}">
    <div class="card">
    <div class="card card-width rotate-left">
        <div class="card card-width rotate-right">
          <div class="card-content text-center">
            <div class="rotate-normal">
            <div class="control-time"> 
            <p class="time" id="time_${_vm.numberQuestion}" ></p>
            </div>
              <p class="title-card mt-1">Pregunta: ${_vm.numberQuestion}</p>
              <div class="content"><p class="subtitle-card">${data.question}</p>
                <div class="item-button">
                  <ul>
                  ${addOption}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>  
    </div>
  `;
  };
  // ${ JSON.parse(_vm.case.question)
                    
  //   .map(
  //     (answers, index) =>
  //     console.log(answers)
  //       `<li class="options"><button class="button options-answers list_${_vm.numberQuestion} key_${_vm.numberQuestion}_${index}" id="${index}">${answers}</button></li>`
  //   )
  //   .join('')}