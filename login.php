<?php include_once "layout/head.php"?>
<?php include_once "layout/navbar.php"?>
<section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <h1 class="title">Inicio de sesión</h1>
          <form id="loginForm">
            <div class="field">
              <label class="label">Correo electrónico</label>
              <div class="control">
                <input class="input" type="email" id="emailInput" required>
              </div>
            </div>
            <div class="field">
              <label class="label">Contraseña</label>
              <div class="control">
                <input class="input" type="password" id="passwordInput" required>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-primary" type="submit">Iniciar sesión</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
<?php include_once "layout/footer.php"?>
<script src="js/login.js"></script>