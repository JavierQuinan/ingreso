<?php require_once('../html/head2.php') ?>

<div class="card">
    <button type="button" class="btn btn-outline-secondary" onclick="sucursales(); roles()" data-bs-toggle="modal" data-bs-target="#ModalUsuarios">Nuevo Usuario</button>

    <h5 class="card-header">Lista de Sucursales</h5>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                    <th>Parroquia</th>
                    <th>Cantón</th>
                    <th>Provincia</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody class="table-border-bottom-0" id="ListaSucursales">

            </tbody>
        </table>
    </div>
</div>

<div class="modal" tabindex="-1" id="ModalUsuarios">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="tituloModal">Nueva Sucursal</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <form id="form_sucursales" method="post">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="Nombre">Nombre</label>
                        <input type="text" name="Nombre" id="Nombre" class="form-control" placeholder="Ingrese el nombre" required>
                    </div>
                    <div class="form-group">
                        <label for="Direccion">Dirección</label>
                        <input type="text" name="Direccion" id="Direccion" class="form-control" placeholder="Ingrese la dirección" required>
                    </div>
                    <div class="form-group">
                        <label for="Telefono">Teléfono</label>
                        <input type="text" name="Telefono" id="Telefono" class="form-control" placeholder="Ingrese el teléfono" required>
                    </div>
                    <div class="form-group">
                        <label for="Correo">Correo</label>
                        <input type="email" name="Correo" id="Correo" class="form-control" placeholder="Ingrese el correo" required>
                    </div>
                    <div class="form-group">
                        <label for="Parroquia">Parroquia</label>
                        <input type="text" name="Parroquia" id="Parroquia" class="form-control" placeholder="Ingrese la parroquia" required>
                    </div>
                    <div class="form-group">
                        <label for="Canton">Cantón</label>
                        <input type="text" name="Canton" id="Canton" class="form-control" placeholder="Ingrese el cantón" required>
                    </div>
                    <div class="form-group">
                        <label for="Provincia">Provincia</label>
                        <input type="text" name="Provincia" id="Provincia" class="form-control" placeholder="Ingrese la provincia" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php require_once('../html/scripts2.php') ?>

<script src="./sucursales.js"></script>
