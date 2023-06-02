const templateResult = (_vm) => {
    divDynamicCard.innerHTML = '';
    divDynamicCard.innerHTML += `
    <div class="animate__animated animate__jackInTheBox">
      <div class="card rotate-right">
      <div class="card rotate-left">
        <div class="card card-width">
          <div class="card-content text-center">
            <p class="title-card mt-1">${_vm.title}</p>
            <div class="content">
              <div class="item-button">
              <p class="points-earned" id="results"></p>
                <a class="button end-button" id="restart">${_vm.textButton}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  `;
  }