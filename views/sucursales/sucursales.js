function init() {
    $("#form_sucursales").on("submit", (e) => {
      guardarEditarSucursal(e);
    });
    cargaListaSucursales();
    sucursales();
    roles();
  }
  
  $().ready(() => {
    init();
  });
  
  var cargaListaSucursales = () => {
    var html = "";
    $.get(
      "../../controllers/sucursal.controllers.php?op=todos",
      (listSucursales) => {
        listSucursales = JSON.parse(listSucursales);
        $.each(listSucursales, (index, sucursal) => {
          html += `<tr>
              <td>${index + 1}</td>
              <td>${sucursal.Nombre}</td>
              <td>${sucursal.Direccion}</td>
              <td>${sucursal.Telefono}</td>
              <td>${sucursal.Correo}</td>
              <td>${sucursal.Parroquia}</td>
              <td>${sucursal.Canton}</td>
              <td>${sucursal.Provincia}</td>
              <td>
                <button class='btn btn-primary' onclick='editarSucursal(${sucursal.SucursalId})'>Editar</button>
                <button class='btn btn-warning' onclick='eliminarSucursal(${sucursal.SucursalId})'>Eliminar</button>
              </td>
          </tr>`;
        });
        $("#ListaSucursales").html(html);
      }
    );
  };
  
  var guardarEditarSucursal = (e) => {
    e.preventDefault();
    var datosFormularioSucursal = new FormData($("#form_sucursales")[0]);
    var accion = "../../controllers/sucursal.controllers.php?op=insertar";
  

     if (datosFormularioSucursal.get("SucursalId") > 0) {
    accion = "../../controllers/sucursal.controllers.php?op=editar"; 
  } else {
    accion = "../../controllers/sucursal.controllers.php?op=insertar"; 
  }
  
  
    $.ajax({
      url: accion,
      type: "post",
      data: datosFormularioSucursal,
      processData: false,
      contentType: false,
      cache: false,
      success: (respuesta) => {
        console.log(respuesta);
        respuesta = JSON.parse(respuesta);
        if (respuesta == "ok") {
          alert("Se guardó con éxito");
          cargaListaSucursales();
          limpiarCajas();
        } else {
          alert("No se pudo guardar la sucursal. Por favor, inténtelo de nuevo.");
        }
      },
      error: (error) => {
        console.error("Error al procesar la solicitud:", error);
        alert("Ocurrió un error al procesar la solicitud. Por favor, inténtelo de nuevo.");
      }
    });
  };
  
  var editarSucursal = (sucursalId) => {
    $("#ModalEditarSucursal").modal("show");
};

var eliminarSucursal = (sucursalId) => {
    if (confirm("¿Estás seguro de que deseas eliminar esta sucursal?")) {
        $.post("../../controllers/sucursal.controllers.php?op=eliminar", { id: sucursalId }, (respuesta) => {
            respuesta = JSON.parse(respuesta);
            if (respuesta === "ok") {
                alert("La sucursal se eliminó correctamente.");
                cargaListaSucursales();
            } else {
                alert("Ocurrió un error al eliminar la sucursal. Por favor, inténtelo de nuevo.");
            }
        });
    }
};

  
  var limpiarCajas = () => {
    $("#form_sucursales")[0].reset();
    $("#ModalSucursales").modal("hide");
  };
  
  var sucursales = () => {
    return new Promise((resolve, reject) => {
      var html = `<option value="0">Seleccione una opción</option>`;
      $.post(
        "../../controllers/sucursal.controllers.php?op=todos",
        async (listSucursales) => {
          listSucursales = JSON.parse(listSucursales);
          $.each(listSucursales, (index, sucursal) => {
            html += `<option value="${sucursal.SucursalId}">${sucursal.Nombre}</option>`;
          });
          await $("#SucursalId").html(html);
          resolve();
        }
      ).fail((error) => {
        reject(error);
      });
    });
  };
  
  var roles = () => {
    return new Promise((resolve, reject) => {
      var html = `<option value="0">Seleccione una opción</option>`;
      $.post(
        "../../controllers/rol.controllers.php?op=todos",
        async (listRoles) => {
          listRoles = JSON.parse(listRoles);
          $.each(listRoles, (index, rol) => {
            html += `<option value="${rol.idRoles}">${rol.Rol}</option>`;
          });
          await $("#RolId").html(html);
          resolve();
        }
      ).fail((error) => {
        reject(error);
      });
    });
  };
