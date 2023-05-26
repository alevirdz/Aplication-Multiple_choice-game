<?php include_once "layout/head.php"?>
<?php include_once "layout/navbar.php"?>
<section class="section" id="addNewQuestionForm">
    <div class="container">
      <h1 class="title">Add yours questions</h1>
      
      <!-- Formulario para agregar un nuevo usuario -->
      <form>
        <div class="field">
          <label class="label">Question</label>
          <div class="control">
            <input class="input" type="text" id="Question" required>
          </div>
        </div>
        <div class="field">
          <label class="label">Option 1</label>
          <div class="control">
            <input class="input" type="text" id="option_one" required>
          </div>
        </div>
        <div class="field">
          <label class="label">Option 2</label>
          <div class="control">
            <input class="input" type="text" id="option_two" required>
          </div>
        </div>
        <div class="field">
          <label class="label">Option 3</label>
          <div class="control">
            <input class="input" type="text" id="option_three" required>
          </div>
        </div>
        <div class="field">
          <label class="label">Option 4</label>
          <div class="control">
            <input class="input" type="text" id="option_for" required>
          </div>
        </div>
        
        <div class="field">
          <div class="control">
            <button class="button is-primary" type="submit">Agregar</button>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary" id="continue">Siguente</button>
          </div>
        </div>
      </form>
    </div>
  </section>

  <section class="section d-none" id="cardQuestionsStillAnswers">
    <div class="container">
      <h1 class="title">Add yours questions</h1>
      <!-- Lista de usuarios -->
      <div id="addQuestions"></div>
    </div>
  </section>
<?php include_once "layout/footer.php"?>
<script src="crud.js"></script>