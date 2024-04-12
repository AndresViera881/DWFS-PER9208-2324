// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas y verificar el número de asientos solicitados
function setup(numAsientos) {
  if (numAsientos > N * N) {
    // Si el número de asientos solicitados es mayor que el total de asientos disponibles, devolver un conjunto vacío
    return new Set();
  }

  let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
  let butacas = [];

  // Inicializar las butacas
  for (let i = 0; i < N; i++) {
    let fila = [];
    for (let j = 0; j < N; j++) {
      fila.push({
        id: idContador++,
        estado: false, // Estado inicial libre
      });
    }
    butacas.push(fila);
  }

  // Recorrer las filas en orden inverso
  for (let i = N - 1; i >= 0; i--) {
    let asientos = 0;
    let asientosPreSeleccionados = new Set();

    // Recorrer las butacas en la fila actual
    for (let j = 0; j < N; j++) {
      if (!butacas[i][j].estado) {
        // Asiento disponible
        asientos++;
        asientosPreSeleccionados.add(butacas[i][j].id);
        if (asientos === numeroAsientos) {
          // Se encontraron suficientes asientos contiguos
          return asientosPreSeleccionados;
        }
      } else {
        // Reiniciar el conteo de asientos contiguos
        asientos = 0;
        asientosPreSeleccionados.clear();
      }
    }
  }

  // Si no se encontraron suficientes asientos, devolver un conjunto vacío
  return new Set();
}

// Número de asientos solicitados
const numeroAsientosSolicitados = 12; // Cambia este valor según lo necesario

// Obtener los asientos pre-seleccionados
const asientosPreSeleccionados = setup(numeroAsientosSolicitados);

// Imprimir los asientos pre-seleccionados
console.log(asientosPreSeleccionados);
