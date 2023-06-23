// Configaración de la petición
const URI = 'questions.php';
const queryListQuestion = async () => {
  await axios.post(URI, { action: 'get' })
  .then((response) => {
    if (response != '') {
      moduleTable(response.data);
    }
  })
  .catch((e) => {
    console.log(e)
  });
}

const buttonEdit = (_idCell) => {
  console.log(_idCell)
  console.log('modificando')
  axios
    .post(URI, { action: 'edit' })
    .then((response) => {
      console.log(response)
    })
    .catch((e) => {
      console.log(e)
    });
}

const buttonUpdate = (_idCell) => {
  console.log('Update')
  console.log(_idCell)
}

const buttonDelete = (_idCell) => {
  let request = {
    action: 'delete',
    id: _idCell
  }
  axios.post(URI, request)
  .then( async (response) => {
    console.log(response)
    controlRequests.clear()
    queryListQuestion();

  })
  .catch((e) => {
    console.log(e)
  });
}



document.addEventListener('DOMContentLoaded', () => {
  queryListQuestion();
})