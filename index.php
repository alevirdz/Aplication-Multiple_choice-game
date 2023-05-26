<?php include_once "layout/head.php"?>
<?php include_once "layout/navbar.php"?>

  <div class="container">
    <section class="vertical-align animate__animated animate__heartBeat" id="card-presentation">
    <div class="card background-card-width rotate-right"></div>
    <div class="card background-card-width rotate-left"></div>
      <div class="card card-width">
          <div class="card-content text-center">
            <p class="title-card mt-1">Preguntas</p>
            <div class="content"><p class="subtitle-card">¿Cuánto sabes?</p>
              <div class="item-button">
                <a class="button button-start" id="start">Iniciar</a>
              </div>
            </div>
          </div>
      </div>
  </section>
  </div>
  <div class="container">
    <section class="vertical-align-questions d-none animate__animated animate__slideInDown" id="game">
      <div class="card-auto background-card-width-game rotate-right"></div>
      <div class="card-auto background-card-width-game rotate-left"></div>
      <div id="plantilla"></div>
    </section>
  </div>
  <div class="container">
    <section class="d-none animate__animated animate__jackInTheBox" id="finish">
    <div class="card background-card-width rotate-right"></div>
    <div class="card background-card-width rotate-left"></div>
    <div class="card card-width-end">
          <div class="card-content text-center">
            <p class="title-card mt-2">Juego terminado</p>
            <div class="content">
              <div class="item-button">
                <p class="points-earned" id="results"></p>
                <a class="button end-button" id="restart">Jugar de nuevo</a>
              </div>
            </div>
          </div>
      </div>
  </section>
  </div>

<?php include_once "layout/footer.php"?>
<script src="js/data.js"></script>
<script src="js/events.js"></script>
<script src="js/main.js"></script>
