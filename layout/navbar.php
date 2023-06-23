<nav class="navbar" role="navigation" aria-label="main navigation" style="background:#f2f2f2 !important">
    <div class="navbar-brand">
      <a class="navbar-item" href="/web/beta_preguntados">
      <figure class="image is-128x128">
        <img src="./images/solve.png">
      </figure>
      </a>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start"></div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <div id="optionEndGame">
            <a class="button is-primary d-none" id="endGame">Finalizar</a>
            </div>
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" href="login.php">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
    
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
    
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
    
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    
      });
    });
    
    });
    </script>