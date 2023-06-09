const templateWelcome = (_vm) => {
    divDynamicCard.innerHTML += `
    <div class="card rotate-right">
    <div class="card rotate-left">
      <div class="card card-width">
        <div class="card-content text-center">
          <p class="title-card mt-1">${_vm.title}</p>
          <div class="content"><p class="subtitle-card">${_vm.subtitle}</p>
            <div class="item-button">
              <a class="button button-start" id="start">${_vm.textButton}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  };
  