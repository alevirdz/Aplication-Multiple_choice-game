// Lista de usuarios (simulada en este ejemplo)
let users = [];

// Referencias a elementos HTML
const addUserForm = document.getElementById('addUserForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const userList = document.getElementById('userList');

// Función para agregar un nuevo usuario
const addUser = (event) => {
  event.preventDefault();

  // Obtener los valores del formulario
  const name = nameInput.value;
  const email = emailInput.value;

  // Crear un nuevo objeto de usuario
  const newUser = {
    name,
    email
  };

  // Agregar el nuevo usuario a la lista
  users.push(newUser);

  // Limpiar los campos del formulario
  nameInput.value = '';
  emailInput.value = '';

  // Actualizar la lista de usuarios
  renderUserList();
};

// Función para eliminar un usuario
const deleteUser = (index) => {
  // Eliminar el usuario de la lista por su índice
  users.splice(index, 1);

  // Actualizar la lista de usuarios
  renderUserList();
};

// Función para renderizar la lista de usuarios
const renderUserList = () => {
  // Limpiar la lista existente
  userList.innerHTML = '';

  // Recorrer la lista de usuarios y crear elementos HTML para cada uno
  users.forEach((user, index) => {
    // Crear elementos HTML utilizando template literals de ES6
    const li = document.createElement('li');
    li.className = 'is-flex is-justify-content-space-between';
    const userInfo = document.createElement('div');
    userInfo.innerText = `${user.name} - ${user.email}`;
    const deleteButton = document.createElement('button');
    deleteButton.className = 'button is-danger';
    deleteButton.innerText = 'Eliminar';

    // Agregar un controlador de eventos al botón de eliminar utilizando arrow functions de ES6
    deleteButton.addEventListener('click', () => {
      deleteUser(index);
    });

    // Agregar elementos al elemento de lista (li)
    li.appendChild(userInfo);
    li.appendChild(deleteButton);

    // Agregar el elemento de lista a la lista de usuarios (userList)
    userList.appendChild(li);
  });
};

// Agregar un controlador de eventos al formulario utilizando arrow functions de ES6
addUserForm.addEventListener('submit', (event) => {
  addUser(event);
});
