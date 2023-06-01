<?php include_once "layout/head.php"?>
<?php include_once "layout/navbar.php"?>


<section class="section">
      <div class="container">
        <article class="panel is-primary">
          <div class="panel-heading" style="background-color: rgb(147 51 234) !important;">
            <div class="columns">
              <div class="column is-9">
                <p>Add yours questions</p>
              </div>
              <div class="column is-2" style="width:10.66667%;">
                  <button class="button is-info" id="AddOptionAnswer" style="background: #d08aff">Add option</button>
              </div>
              <div class="column is-2" style="width:10.66667%"> 
                  <button class="button is-info" id="removeOptionAnswer" style="background: #c53c7b">Remove option</button>
              </div>
            </div>
          </div>
          
          
          <form id="form">
            <div class="container" style="padding:2em;">
              <div class="field">
                <label class="label">Name question:</label>
                <div class="control">
                  <input class="input" type="text" id="question" required>
                </div>
              </div>
              <div id="OptionsQuestions"></div>
            </div>
            <div class="panel-block">
              <button class="button is-link is-outlined is-fullwidth" type="submit">Add question</button>
            </div>
          </form>
          
          
        </article>
      </div>
  </section>


<!-- <section class="section" id="form">
    <div class="container">
      <h1 class="title">Add yours questions</h1>
      <form>
        <div class="field">
          <label class="label">Question</label>
          <div class="control">
            <input class="input" type="text" id="question" required>
          </div>
        </div>
        <div id="OptionsQuestions"></div>

        <div class="field">
          <div class="control">
            <button class="button is-primary" id="AddOptionAnswer">Agregar nueva respuesta</button>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary" id="removeOptionAnswer">Quitar una opción</button>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary" type="submit">Agregar</button>
          </div>
        </div>
        
      </form>
    </div>
  </section> -->

  <!-- content list question -->
  <section class="section d-none" id="content-list-question">
      <div class="container">
        <article class="panel is-primary">
          <p class="panel-heading">Card Added</p>
          <div class="listQuestions" id="listQuestions"></div>
          <div class="panel-block">
            <button class="button is-link is-outlined is-fullwidth" id="saveQuestion">
              Save
            </button>
          </div>
        </article>
      </div>
  </section>

  <section>
    <div id="menssages"></div>
  </section>
<?php include_once "layout/footer.php"?>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="../js/axios.min.js"></script>
<script src="crud.js"></script>
