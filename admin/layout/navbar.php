<nav class="navbar" role="navigation" aria-label="main navigation" style="background: rgb(0 0 0) !important;">
    <div class="navbar-brand">
      <a class="navbar-item" style="background: #afafaf !important">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">  
        <a class="navbar-item" href="https://github.com/alevirdz/Multiple_choice_game" style="color:#9aa4ad !important;">
          Documentation
        </a>   
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light" href="/web/beta_preguntados">
              Log out
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