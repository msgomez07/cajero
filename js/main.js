console.log("Ingreso a la app HomeBanking");
// DECLARACIÓN DE VARIABLES
let nombreUsuario = "Michaell Gomez"
let saldoEnCuenta = 5000;
let limiteExtraccion = 500;
let claveCorrecta = 1234;
// console.log("clave correcta " + typeof claveCorrecta);

// SE DEFINE LA FUCIÓN PARA INICIAR SESIÓN

function iniciarSesion() {
  var clave = parseInt(
    prompt("Por favor ingrese su clave para iniciar sesión"), 0);
  console.log(typeof clave);
  // 1234 == "1234" ->true
  // 1234 === "1234" -> false
  if (clave === claveCorrecta) {
    alert("Bienvenido/a " + nombreUsuario + " a tu Home Banking");
    document.body.style.display = "block";
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
  } else {
    saldoEnCuenta = 0;
    alert("Clave incorrecta. le quitamos toda su platica :(");
  }
}
// Función para poder cargar el nombre en pantalla
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

// actualizar saldo en pantalla
function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$ " + saldoEnCuenta;
}

// función flecha limite en pantalla function === =>
const actualizarLimiteEnPantalla = () => {
  document.getElementById("limite-extraccion").innerHTML =
    " Tu límite de extracción es: $ " + limiteExtraccion;
}

// INVOCAR L FUNCIÓN INICIAR SESION
iniciarSesion();



//EXTRAER DINERO//
function extraerDinero() {
  let dineroAextraer = parseInt(
    prompt("Digite el valor a extraer"), 0);
  if (isNaN(dineroAextraer)) {
    return alert("Valor ingresado no es correcto, favor ingresar solamente números")
  } else if (dineroAextraer <= 0) {
    return alert("Valor ingresado no es correcto, favor ingresar solamente números positivos")
  } else if (dineroAextraer > saldoEnCuenta) {
    alert("Error, su saldo es insuficiente")
  } else if (dineroAextraer > limiteExtraccion) {
    alert("Transacción no se puede ejecutar, no puede exceder el límite de extracción")
  } else if (dineroAextraer <= saldoEnCuenta && dineroAextraer % 100 == 0) {
    saldoEnCuenta -= dineroAextraer;
    alert("Transacción exitosa, tu nuevo saldo es = $ " + saldoEnCuenta)
  } else {
    alert("Monto a retirar es inválido, solo se permite retirar montos de 100 en 100")
  }
  actualizarSaldoEnPantalla();
}
document.getElementById("extraer").addEventListener('click', extraerDinero);

//DEPOSITAR DINERO//
function depositarDinero() {
  let cantidad = parseInt(
    prompt("Ingrese la cantidad a depositar"), 0);
  if (isNaN(cantidad)) {
    return alert("Valor ingresado no es correcto, favor ingresar solamente números")
  } else if (cantidad <= 0) {
    return alert("Valor ingresado no es correcto, favor ingresar solamente números positivos")
  }
  // saldoEnCuenta = saldoEnCuenta + cantidad
  saldoEnCuenta += cantidad;
  alert("El nuevo saldo es " + saldoEnCuenta); {
    actualizarSaldoEnPantalla();
  }
}
document.getElementById("depositar").addEventListener('click', depositarDinero);


//PAGAR SERVICIOS//
const pagarServicios = () => {
  let agua = 500;
  let telefono = 400;
  let energia = 200;
  let internet = 100;

  let misServicios = ["Agua", "Teléfono", "Energía", "Internet"];

  let servicio = prompt(`Ingrese el número que corresponda al servicio a pagar
  1. Agua - Valor ${agua}
  2. Teléfono Valor ${telefono}
  3. Energía Valor ${energia}
  4. Internet Valor ${internet}
  `);

  switch (servicio) {
    case "1":
      depositarServicio(agua, misServicios[0]);
      break;
    case "2":
      depositarServicio(telefono, misServicios[1]);
      break;
    case "3":
      depositarServicio(energia, misServicios[2]);
      break;
    case "4":
      depositarServicio(internet, misServicios[3]);
      break;
    default:
      alert("La opción no es válida");
      break;

  }
};

function depositarServicio(tipoDeServicio, nombreServicio) {
  saldoEnCuenta -= tipoDeServicio;
  actualizarSaldoEnPantalla();
  alert(`Has pagado ${tipoDeServicio} del servicio ${nombreServicio} y tu nuevo saldo es ${saldoEnCuenta}`);
}
// Evento para pagar servicos
// Listener sobre el elemento
document.getElementById("servicios").addEventListener('click', pagarServicios);

//TRANSFERIR DINERO//
function transferirDinero() {
  let transferir = parseInt(
    prompt("Ingrese el saldo a transferir"), 0);
  if (isNaN(transferir)) {
    return alert("Valor ingresado no es correcto, favor ingresar solamente números")
  } else if (transferir <= 0) {
    return alert("Valor ingresado no es correcto, favor ingresar solamente números positivos")
  } else if (transferir > saldoEnCuenta) {
    alert("Error, su saldo es insuficiente")
  } else if (transferir <= saldoEnCuenta) {
    saldoEnCuenta -= transferir;    
    alert("Transacción realizada, tu nuevo saldo es = $ " + saldoEnCuenta);
  }
  actualizarSaldoEnPantalla();   
}   
document.getElementById("transferir").addEventListener('click', transferirDinero);


//CAMBIAR LIMITE DE EXTRACCIÓN//
function cambiarLimiteDeExtraccion() {
  let nuevoLimite = parseInt(
    prompt("Ingrese su nuevo límite de extracción"), 0);
  if (isNaN(nuevoLimite)) {
    return alert("Valor ingresado no es correcto, favor ingresar solamente números")
  } else if (nuevoLimite <= 0) {
    return alert("Valor ingresado no es correcto, favor ingresar solamente números positivos")
  } else if (nuevoLimite > saldoEnCuenta) {
    alert("El nuevo límite excede el saldo actual, favor ingresar un monto correcto");
  } else if (nuevoLimite <= saldoEnCuenta) {
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
    alert(" Se ha actualizado tu límite de extracción, nuevo valor " + limiteExtraccion)
  }
}
document.getElementById("nuevo-limite").addEventListener('click', cambiarLimiteDeExtraccion);