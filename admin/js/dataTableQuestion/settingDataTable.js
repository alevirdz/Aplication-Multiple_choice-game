const configurationDefault = {
    paging: true,
    searching: true,
    info: true,
    serverSide: true,
}

const languageSpanish = {
        emptyTable:			"No se encontraron resultados",
        info:		   			"Del _START_ al _END_ de _TOTAL_ ",
        infoEmpty:			"Mostrando 0 registros de un total de 0.",
        infoFiltered:			"(filtrados de un total de _MAX_ registros)",
        infoPostFix:			"(actualizados)",
        lengthMenu:			"Mostrar _MENU_ registros",
        loadingRecords:		"Cargando...",
        processing:			"Procesando...",
        search:				"Buscar:",
        searchPlaceholder:	"Buscar",
        zeroRecords:			"No se han encontrado coincidencias.",
        // paginate: {
        //     first:			"<span style='font-size:12px'>Primera</span>",
        //     last:				"<span style='font-size:12px'>Última</span>",
        //     next:				"<span style='font-size:12px'>Siguiente</span>",
        //     previous:			"<span style='font-size:12px'>Anterior</span>"
        // },
        oPaginate: {
            sNext: '<i class="ico-arrow_right"></i>',
            sPrevious: 'Anterior',
            sFirst: 'Primero',
            sLast: 'Último'
            },
        aria: {
            sortAscending:	"Ordenación ascendente",
            sortDescending:	"Ordenación descendente"
        },
        buttons: {
            copy: "Copiar",
            colvis: "Visibilidad"
        }
}


const configurationButtons = (_rows, _Docs) =>{
    let definedRows = _rows;//Columnas que se desean mostrar.
    let definedDocs = _Docs;//Botones que se desean mostrar.
    let ElementButtons = [];//En la itereación se agregan nombre de variables.
    let EXCEL =  {
        extend: 'excel',
        text: 'excell',
        title: 'Titulo del excel',
        titleAttr: 'Exportar a excel',
        className: 'btn btn-success',
        exportOptions: {
            columns: definedRows
        }
    }
    let PRINT =  {
        extend: 'print',
        text: 'Imprimir',
        title: 'Titulo del print',
        titleAttr: 'Exportar a print',
        className: 'btn btn-success',
        exportOptions: {
            columns: definedRows
        }
    }
    let PDF = {
        extend: 'pdf',
        text: 'PDF',
        title: 'Titulo del pdf',
        titleAttr: 'Exportar a pdf',
        className: 'btn btn-success',
        exportOptions: {
            columns: definedRows
        }
    }
    let CSV = {
        extend: 'csv',
        text: 'CSV',
        title: 'Titulo del csv',
        titleAttr: 'Exportar a csv',
        className: 'btn btn-success',
        exportOptions: {
            columns: definedRows
        }
    }
    let COPY = {
        extend: 'copy',
        text: 'Copiar',
        title: 'Titulo del copiado',
        className: 'btn btn-success',
        exportOptions: {
            columns: definedRows
        }
    }
    //Iteración
    definedDocs.forEach((typeDocs, Index) =>{
        ElementButtons.push(eval(typeDocs));
    })
    return ElementButtons
}

const lengthMenu = [[5, 10, 25, 50], [5, 10, 25, 50]]; // [[5, 10, 20, -1], [5, 10, 20, 'Todo']],
const buttonControlsPublic = `<button type="button" class="btn-delete-datatables button is-error">Remove</button>`
const buttonControlsAdmin  = `<button type="button" class="btn-update-datatables btn-primary">Guardar</button> | <button type="button" class="btn-edit-datatables btn-primary">Editar</button> | <button type="button" class="btn-delete-datatables btn-primary">Eliminar</button>`