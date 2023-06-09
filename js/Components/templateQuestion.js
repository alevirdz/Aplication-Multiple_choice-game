const templateQuestion = (_vm) => {
    divDynamicCard.innerHTML += `
    <div class="d-none question-${_vm.numberQuestion} animate__animated ${animation.defaultInPut}">
    <div class="card">
    <div class="card card-width rotate-left">
        <div class="card card-width rotate-right">
          <div class="card-content text-center">
            <div class="rotate-normal">
              <p class="title-card mt-1">Pregunta: ${_vm.numberQuestion}</p>
              <div class="content"><p class="subtitle-card">${_vm.case.question}</p>
                <div class="item-button">
                  <ul>
                  ${_vm.case.multipleOption
                    .map(
                      (answers, index) =>
                        `<li class="options"><button class="button options-answers list_${_vm.numberQuestion} key_${_vm.numberQuestion}_${index}" id="${index}">${answers}</button></li>`
                    )
                    .join('')}
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