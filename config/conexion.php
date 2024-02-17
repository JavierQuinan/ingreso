<?php
class ClaseConectar
{
    public $conexion;
    protected $db;
    private $host = "localhost";
    private $usu = "root";
    private $clave = "";
    private $base = "ingresos";

    public function ProcedimientoConectar()
    {

        $this->conexion = mysqli_connect($this->host, $this->usu, $this->clave, $this->base);

        if (!$this->conexion) {
            die("Error al conectarse con MySQL: " . mysqli_connect_error());
        }

    
        mysqli_set_charset($this->conexion, "utf8");


        $this->db = mysqli_select_db($this->conexion, $this->base);

        if (!$this->db) {
            die("Error al conectar con la base de datos: " . mysqli_error($this->conexion));
        }

        return $this->conexion;
    }


    public function ruta()
    {

        define('BASE_PATH', realpath(dirname(__FILE__) . '/../') . '/');

    }
}
?>

