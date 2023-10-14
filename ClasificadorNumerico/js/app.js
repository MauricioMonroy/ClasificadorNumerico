function calcular() {
  // Obtener los datos de los vectores
  const vector1 = [
    parseFloat(document.getElementById("vector1_0").value),
    parseFloat(document.getElementById("vector1_1").value),
    parseFloat(document.getElementById("vector1_2").value),
    parseFloat(document.getElementById("vector1_3").value),
    parseFloat(document.getElementById("vector1_4").value),
  ];
  const vector2 = [
    parseFloat(document.getElementById("vector2_0").value),
    parseFloat(document.getElementById("vector2_1").value),
    parseFloat(document.getElementById("vector2_2").value),
    parseFloat(document.getElementById("vector2_3").value),
    parseFloat(document.getElementById("vector2_4").value),
  ];

  // Validar que los datos estén ordenados
  if (!esAscendente(vector1)) {
    alert("El vector 1 no está ordenado de forma ascendente.");
    return;
  }
  if (!esAscendente(vector2)) {
    alert("El vector 2 no está ordenado de forma ascendente.");
    return;
  }

  // Mezclar los vectores
  const mezcla = [];
  let i = 0;
  let j = 0;
  while (i < vector1.length && j < vector2.length) {
    if (vector1[i] < vector2[j]) {
      mezcla.push(vector1[i++]);
    } else {
      mezcla.push(vector2[j++]);
    }
  }
  while (i < vector1.length) {
    mezcla.push(vector1[i++]);
  }
  while (j < vector2.length) {
    mezcla.push(vector2[j++]);
  }

  // Mostrar el resultado en forma de lista
  document.getElementById("resultado").innerHTML = "<ul>";
  for (let i = 0; i < mezcla.length; i++) {
    document.getElementById("resultado").innerHTML +=
      "<li>" + mezcla[i] + "</li>";
  }
  document.getElementById("resultado").innerHTML += "</ul>";
}

//Función que limpia los campos luego de mostrar el resultado
function limpiarInputs() {
  // Obtener todos los elementos input del formulario.
  const inputs = document.querySelectorAll("input");

  // Iterar sobre los elementos de entrada y borrar sus valores
  inputs.forEach((input) => {
    input.value = "";    
  });
}

// Función para validar que un vector esté ordenado de forma ascendente
function esAscendente(vector) {
  for (let i = 1; i < vector.length; i++) {
    if (vector[i] < vector[i - 1]) {
      return false;
    }
  }
  return true;
}

// Agregar el evento click al botón "Limpiar"
document.querySelector("#limpiar").addEventListener("click", limpiarInputs);

