<?php include_once "layout/head.php"?>
<?php include_once "layout/navbar.php"?>
<section class="section">
    <div class="container">
      <h1 class="title">Usuarios</h1>
      
      <!-- Formulario para agregar un nuevo usuario -->
      <form id="addUserForm">
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input class="input" type="text" id="nameInput" required>
          </div>
        </div>
        <div class="field">
          <label class="label">Correo electrónico</label>
          <div class="control">
            <input class="input" type="email" id="emailInput" required>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary" type="submit">Agregar</button>
          </div>
        </div>
      </form>

      <!-- Lista de usuarios -->
      <ul id="userList" class="mt-5">
        <!-- Los usuarios se agregan dinámicamente con JavaScript -->
      </ul>
    </div>
  </section>
<?php include_once "layout/footer.php"?>
<script src="crud.js"></script>