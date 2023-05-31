<?php include_once "layout/head.php"?>
<?php include_once "layout/navbar.php"?>
<section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <h1 class="title">Sign in</h1>
          <form id="loginForm">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" id="emailInput" value="alevi@testing.com" required>
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" id="passwordInput" value="123123" required>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-primary" type="submit">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
<?php include_once "layout/footer.php"?>
<script src="js/login.js"></script>