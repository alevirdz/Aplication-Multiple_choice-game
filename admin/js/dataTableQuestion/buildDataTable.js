const getIDTable = document.getElementById('solicitud_tramites')
let controlRequests
//Datos para llenar la tabla
const moduleTable = (_arrObjResponseRequests) => {
  controlRequests = new DataTable(getIDTable, {
    destroy: true,
    data: _arrObjResponseRequests,
    configuration: configurationDefault,
    language: languageSpanish,
    lengthMenu: lengthMenu,
    dom: 'Blfrtip',
    buttons: configurationButtons([0, 1, 2], ['PRINT', 'EXCEL', 'PDF']),
    dataSrc: '',
    columns: [
      { data: 'id' },
      {
        data: 'question',
        render: function (data) {
          return `<p>${JSON.parse(data).question}</p>`
        },
      },
      {
        data: 'question',
        render: function (data) {
          let datos = JSON.parse(data)
          let options = ''
          let multipleOption = datos.multipleOption
          multipleOption.forEach((element, index) => {
            if(multipleOption.length > index +1){
              options += element +', '
            }else{
              options += element 
            }
          })
          return `<p>${options} </p>`
        },
      },
      {
        data: 'question',
        render: function (data) {
          let datos = JSON.parse(data)
          let multipleOption = datos.multipleOption
          let answerCorrect = ''
          multipleOption.forEach((element, index) => {
            if (parseInt(datos.answer) === index) {
              answerCorrect = multipleOption[index]
            }
          })
          return `<p>${answerCorrect}</p>`
        },
      },
      { defaultContent: buttonControlsPublic }, // Eliminamos la coma después de esta línea
    ],
  })
}

getIDTable.addEventListener('click', (event) => {
  let target = event.target
  buttonClicked(target)
})

const buttonClicked = (_target) => {
  let target = _target
  let idCell = ''
  switch (target.classList[0]) {
    case 'btn-edit-datatables':
      idCell = getDatasCells(target)
      buttonEdit(idCell)
      break
    case 'btn-delete-datatables':
      idCell = getIdDataTable(target)
      buttonDelete(idCell)
      break
    case 'btn-update-datatables':
      idCell = getIdDataTable(target)
      buttonUpdate(idCell)
      break
    default:
      break
  }
}

const getIdDataTable = (_target) => {
  let row = _target.parentNode.parentNode
  let cells = row.getElementsByTagName('td')
  let id = cells[0].textContent
  return id
}

const getDatasCells = (_target) => {
  let row = _target.parentNode.parentNode
  let cells = row.getElementsByTagName('td')
  let id = cells[0].textContent
  let name = cells[1].textContent
  let email = cells[2].textContent
  console.log('ID:', id)
  console.log('Nombre:', name)
  console.log('Email:', email)
  // return id
}
