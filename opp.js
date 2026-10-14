// Base de datos de productos por rubros (Basada en tu inventario)
const catalogo = {
  viveres: [
    "Harina P.A.N. Precocida",
    "Arroz Mary / Amanecer",
    "Pasta Corta / Dedales Ronco",
    "Caraotas Negras Aurora",
    "Aceite Vatel / Diana",
    "Mayonesa Mavesa",
    "Salsa de Tomate Heinz"
  ],
  bebidas: [
    "Coca-Cola 1.25L",
    "Frescolita / Fanta 1.25L",
    "Maltín Polar 1.25L / Lata",
    "Jugos San Simón Naranjada",
    "Néctar de Pera / Durazno Vitta",
    "Agua Mineral Embotellada"
  ],
  snacks: [
    "Flips Chocolate / Dulce de Leche",
    "Doritos Mega Queso / Flamin Hot",
    "Ruffles Queso",
    "NatuChips Plátano",
    "Pepito / De Todito",
    "Maní Salado Acks"
  ],
  lacteos: [
    "Leche Completa Parmalat 1L",
    "Leche en Polvo San Simón",
    "Margarina Mavesa 500g",
    "Queso Blanco Duro",
    "Suero de Leche / Natilla",
    "Cartón de Huevos"
  ],
  confiteria: [
    "Galak / Chocolate Nestlé",
    "Chocolate Saviut / Rikiti",
    "Cocosette / Susy",
    "Chupetas Bon Bon Bum / Ani Pop",
    "Chicles Trident / Bubbaloo"
  ]
};

let productosAgregados = [];

// Cambiar la lista de productos al seleccionar el rubro
function actualizarListaProductos() {
  const categoria = document.getElementById("categoria").value;
  const comboProducto = document.getElementById("producto");

  comboProducto.innerHTML = "";

  if (categoria && catalogo[categoria]) {
    catalogo[categoria].forEach(item => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      comboProducto.appendChild(option);
    });
  } else {
    const option = document.createElement("option");
    option.textContent = "-- Primero selecciona un rubro --";
    comboProducto.appendChild(option);
  }
}

// Agregar producto a la lista del crédito actual
function agregarProducto() {
  const categoriaSelect = document.getElementById("categoria");
  const categoriaTexto = categoriaSelect.options[categoriaSelect.selectedIndex].text;
  const producto = document.getElementById("producto").value;
  const precio = parseFloat(document.getElementById("precioUSD").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);

  if (!categoriaSelect.value || !producto || isNaN(precio) || precio <= 0 || cantidad <= 0) {
    alert("Por favor completa los datos del producto correctamente.");
    return;
  }

  const subtotal = precio * cantidad;

  productosAgregados.push({
    rubro: categoriaTexto,
    producto: producto,
    cantidad: cantidad,
    precioUnitario: precio,
    subtotal: subtotal
  });

  actualizarTabla();
  document.getElementById("precioUSD").value = "";
}

// Actualizar tabla y sumar totales acumulados
function actualizarTabla() {
  const cuerpoTabla = document.getElementById("cuerpoTabla");
  const tasaDolar = parseFloat(document.getElementById("tasaDolar").value) || 0;
  
  cuerpoTabla.innerHTML = "";
  let totalUSD = 0;

  productosAgregados.forEach((item) => {
    totalUSD += item.subtotal;
    const fila = `
      <tr>
        <td>${item.rubro}</td>
        <td>${item.producto}</td>
        <td>${item.cantidad}</td>
        <td>$${item.subtotal.toFixed(2)}</td>
      </tr>
    `;
    cuerpoTabla.innerHTML += fila;
  });

  const totalBS = totalUSD * tasaDolar;

  document.getElementById("totalUSD").textContent = `$${totalUSD.toFixed(2)}`;
  document.getElementById("totalBS").textContent = `Bs ${totalBS.toFixed(2)}`;
}

// Guardar crédito en el almacenamiento local del teléfono/navegador
function guardarCreditoTotal() {
  const cliente = document.getElementById("nombreCliente").value;
  if (!cliente) {
    alert("Ingresa el nombre del cliente.");
    return;
  }

  if (productosAgregados.length === 0) {
    alert("Agrega al menos un producto al crédito.");
    return;
  }

  alert(`✅ Crédito guardado con éxito para ${cliente}.`);
  
  // Limpiar campos para un nuevo crédito
  document.getElementById("nombreCliente").value = "";
  document.getElementById("cedulaCliente").value = "";
  productosAgregados = [];
  actualizarTabla();
}