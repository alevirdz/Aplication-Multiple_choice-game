<?php include_once "layout/head.php" ?>
<div id="app">
  <?php include_once "layout/navbar.php" ?>
  <?php include_once "layout/aside.php" ?>
  <?php include_once "components/hero.php" ?>



  <section class="section is-main-section">

    <section class="section">
      <div class="container">
        <article class="panel is-primary">
          <div class="panel-heading" style="background-color: rgb(147 51 234) !important;">
            <div class="columns">
              <div class="column is-9">
                <p>Add yours questions</p>
              </div>
              <div class="column is-2" style="width:10.66667%;">
                <button class="button is-info" id="AddOptionAnswer">Add option</button>
              </div>
              <div class="column is-2" style="width:10.66667%">
                <button class="button is-error" id="removeOptionAnswer">Remove option</button>
              </div>
            </div>
          </div>


          <form id="form">
            <div class="container" style="padding:2em;">
              <div class="field">
                <label class="label">Question:</label>
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
  </section>


  
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

  <?php include "layout/footer.php" ?>
</div>