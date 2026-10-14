// Catálogo completo con todos los productos y sus precios estimados en USD
const catalogo = {
  "1. Cereales, Galletas y Snacks Dulces": [
    { nombre: "Flips (Dulce de Leche, Chocolate)", precio: 1.50 },
    { nombre: "Fruty Aros (Maizoritos)", precio: 1.20 },
    { nombre: "Pop Crunch (Maizoritos)", precio: 1.20 },
    { nombre: "Rocket Planet (Santini)", price: 1.20 },
    { nombre: "Cerelac (Nestlé)", precio: 3.50 },
    { nombre: "Galletas Tropicoco", precio: 0.80 },
    { nombre: "Galletas Delefinas", precio: 1.00 },
    { nombre: "Galletas Ranchi", precio: 0.70 },
    { nombre: "Galletas Boka", precio: 0.70 },
    { nombre: "Galletas Oreo (Paquetes / Tubos)", precio: 1.20 },
    { nombre: "Pirulín (Caja / Sobre)", precio: 2.00 },
    { nombre: "Cocosette (Nestlé)", precio: 0.90 },
    { nombre: "Susy (Nestlé)", precio: 0.90 },
    { nombre: "Flaquito", precio: 0.60 }
  ],
  "2. Snacks Salados y Frituras": [
    { nombre: "Doritos Mega Queso", precio: 1.80 },
    { nombre: "Doritos Flamin' Hot", precio: 1.80 },
    { nombre: "Doritos Limón / Taquero", precio: 1.80 },
    { nombre: "Ruffles Queso", precio: 1.80 },
    { nombre: "NatuChips (Plátano)", precio: 1.50 },
    { nombre: "Pepito / Pepito Mundo Marino", precio: 0.80 },
    { nombre: "De Todito (Resuelto / Mezcla)", precio: 2.20 },
    { nombre: "Cheese Tris / Raquety", precio: 0.80 },
    { nombre: "Maní Salado / Maní Acks", precio: 0.60 },
    { nombre: "Mezcla de Frutos Secos con Maní y Pasas (CRV)", precio: 2.00 }
  ],
  "3. Lácteos, Huevos y Refrigerados": [
    { nombre: "Leche en Polvo Completa (San Simón, Savini)", precio: 8.50 },
    { nombre: "Leche Evaporada / Condensada (Tigo, Lata)", precio: 2.00 },
    { nombre: "Leche Completa Esterilizada Larga Vida 1L (Parmalat)", precio: 1.80 },
    { nombre: "Leche Descremada Light 1L (San Simón)", precio: 1.70 },
    { nombre: "Leche Semidescremada Deslactosada 1L (San Simón)", precio: 1.90 },
    { nombre: "Chicha con Leche Esterilizada UHT 1L (San Simón)", precio: 1.80 },
    { nombre: "Margarina Mavesa (Tarrinas)", precio: 2.50 },
    { nombre: "Margarina Mirasol (Tarrinas)", precio: 2.20 },
    { nombre: "Queso Blanco Duro / Semiduro (Bloques y Porciones)", precio: 5.00 },
    { nombre: "Suero de Leche / Natilla (Bolsa)", precio: 2.50 },
    { nombre: "Huevos de Gallina (Cartón / Cesta)", precio: 5.50 }
  ],
  "4. Granos, Harinas y Pastas": [
    { nombre: "Harina de Maíz Precocida Blanca / Amarilla (Harina P.A.N.)", precio: 1.10 },
    { nombre: "Maizena Americana", precio: 1.50 },
    { nombre: "Arroz Blanco / Esmeralda (Mary)", "precio": 1.20 },
    { nombre: "Arroz Amanecer / Marfil", precio: 1.10 },
    { nombre: "Pastas Cortas / Dedales / Plumas (Ronco, Mary)", precio: 1.30 },
    { nombre: "Caraotas Negras (Aurora, Vicone)", precio: 1.80 },
    { nombre: "Caraotas Rojas (Vicone)", precio: 1.90 },
    { nombre: "Arvejas Verdes (Amanecer)", precio: 1.40 },
    { nombre: "Maíz para Cotufas / Palomitas", precio: 1.20 }
  ],
  "5. Aceites, Aderezos, Salsas y Condimentos": [
    { nombre: "Aceite Vegetal / Maíz / Soya (Vatel, Amanecer, Diana, Mavesa)", precio: 2.50 },
    { nombre: "Aceite de Oliva (Carbonell, Arrivato)", precio: 7.00 },
    { nombre: "Vinagre Blanco (Mavesa)", precio: 1.20 },
    { nombre: "Mayonesa (Mavesa)", precio: 3.50 },
    { nombre: "Mostaza (Heinz, Primalca)", precio: 2.00 },
    { nombre: "Salsa de Queso / Rikesa", precio: 2.80 },
    { nombre: "Salsa de Tomate Ketchup (Heinz 57, Pampero)", precio: 2.50 },
    { nombre: "Salsa para Pastas Albahaca / Napolitana (O'Sole)", precio: 2.20 },
    { nombre: "Pasta de Tomate (Capri, Ticino / Flor)", "precio": 1.50 },
    { nombre: "Salsa Inglesa / Salsa de Ajo (McCormick, La China)", precio: 2.50 },
    { nombre: "Salsa de Soya (La China)", precio: 2.00 },
    { nombre: "Comino Molido, Pimienta Negra, Adobo Completo (McCormick)", precio: 1.50 },
    { nombre: "Caldo de Pollo / Cubitos (Maggi El Criollito, Sabor Criollo)", precio: 0.80 },
    { nombre: "Canela Entera (CRV)", precio: 1.00 },
    { nombre: "Clavitos de Olor (CRV)", precio: 1.00 },
    { nombre: "Pimienta en Granos (CRV)", precio: 1.20 },
    { nombre: "Orégano / Albahaca Seca (CRV)", precio: 1.00 },
    { nombre: "Achiote / Onoto en Polvo (CRV)", precio: 1.00 },
    { nombre: "Combinados / Sazonadores 6 en 1 (CRV)", precio: 1.20 },
    { nombre: "Sal con Ajo / Pimienta / Perejil Seco (CRV)", precio: 1.20 }
  ],
  "6. Conservas y Encurtidos": [
    { nombre: "Atún en Lata (Catalina, Margarita)", precio: 2.00 },
    { nombre: "Sardinas en Lata", "precio": 1.20 },
    { nombre: "Petit Pois / Arvejas Verdes (Frasco)", precio: 1.80 },
    { nombre: "Maíz Dulce en Lata (Tigo)", "precio": 1.80 },
    { nombre: "Encurtidos Surtidos (Frasco)", precio: 2.50 },
    { nombre: "Aceitunas con / sin Hueso (Primalca, Mi Gochita)", precio: 3.00 },
    { nombre: "Alcaparras en Frasco (Primalca)", precio: 2.80 },
    { nombre: "Pasta de Ajo / Ajo en Pasta (Primalca)", precio: 2.00 },
    { nombre: "Pasas y Frutas Secas (Cajitas)", precio: 1.50 }
  ],
  "7. Bebidas, Café, Té y Refrescos": [
    { nombre: "Café Molido Comercial e Gourmet (Amanecer, Flor de Arauca, Della Nonna, Cima)", precio: 4.50 },
    { nombre: "Té Instantáneo en Polvo (Nestea Limón, Durazno)", precio: 3.50 },
    { nombre: "Bebidas Saborizadas en Polvo y Panelada", precio: 1.00 },
    { nombre: "Té Verde en Sobres 10u (McCormick)", precio: 2.00 },
    { nombre: "Infusión Rosa de Jamaica 10u (McCormick)", precio: 2.00 },
    { nombre: "Naranjada 60% Jugo (San Simón)", precio: 2.00 },
    { nombre: "Néctar de Pera / Durazno / Naranja / Manzana (Vitta, San Simón, Pulp)", precio: 1.80 },
    { nombre: "Coca-Cola (1.25L, Botellas Vidrio y Plástico)", "precio": 2.20 },
    { nombre: "Fanta / Hit Naranja / Frescolita (1.25L y 1.5L)", "precio": 2.00 },
    { nombre: "Golden Naranja / Piña", precio: 1.80 },
    { nombre: "Maltín Polar (Botellas 1.25L, Retornables y Latas 250ml)", "precio": 1.50 },
    { nombre: "Bebida Deportiva CR7 Drive / Gatorade", precio: 2.50 },
    { nombre: "Agua Mineral Embotellada", precio: 1.00 }
  ],
  "8. Confitería, Chocolates y Golosinas": [
    { nombre: "Chocolate Galak / Galak Blanco (Nestlé)", precio: 1.80 },
    { nombre: "Chocolate Nestlé Oscuro 40% / Chocolate de Leche", precio: 1.80 },
    { nombre: "Chocolate Rikiti (Savoy)", precio: 1.20 },
    { nombre: "Bianchi ChocoManí (Barra y Display)", precio: 1.50 },
    { nombre: "Toretto / Barras de Chocolate Individuales", precio: 1.00 },
    { nombre: "Chupetas / Pirulines Ani Pop (Wynco)", "precio": 0.30 },
    { nombre: "Chupetas Chupe-Tattoo", precio: 0.35 },
    { nombre: "Chupetas Big Bip / Bon Bon Bum", "precio": 0.25 },
    { nombre: "Pastillas Refrescantes Freegells (Eucalipto, Menta, Cherry)", precio: 0.50 },
    { nombre: "Pastillas Refrescantes Minty", precio: 0.50 },
    { nombre: "Chicles Trident (Sandía, Yerbabuen, Fresa, Mora Azul)", "precio": 1.20 },
    { nombre: "Oka Loka (Chicle en Polvo)", precio: 0.60 },
    { nombre: "Bubbaloo (Chicles Globo)", precio: 0.40 }
  ],
  "9. Panadería y Repostería": [
    { nombre: "Pan para Hamburguesa (Aika's)", precio: 2.00 },
    { nombre: "Pan Integral / Pan de Molde", "precio": 2.50 },
    { nombre: "Gelatina en Polvo (Jump)", precio: 1.00 },
    { nombre: "Flan en Polvo (Sonrissa)", precio: 1.20 },
    { nombre: "Crema Culinaria (Wynco / Tigo)", precio: 1.80 },
    { nombre: "Polvo de Hornear (CRV)", precio: 1.00 },
    { nombre: "Flor de Jamaica Seca (CRV)", precio: 1.50 },
    { nombre: "Esencia de Vainilla (Botellitas)", precio: 1.20 }
  ],
  "10. Embutidos y Charcutería": [
    { nombre: "Mortadela en Barra / Rollo (Punto)", precio: 4.50 },
    { nombre: "Salchichas (Empaque al Vacío)", precio: 3.50 }
  ]
};

let productosAgregados = [];

// Cargar las opciones del selector de rubros al iniciar la página
window.onload = function() {
  const comboRubro = document.getElementById("categoria");
  comboRubro.innerHTML = '<option value="">-- Selecciona Rubro --</option>';
  
  Object.keys(catalogo).forEach(rubro => {
    const option = document.createElement("option");
    option.value = rubro;
    option.textContent = rubro;
    comboRubro.appendChild(option);
  });
};

// Actualizar lista de productos y colocar precio automático al seleccionar
function actualizarListaProductos() {
  const rubroSeleccionado = document.getElementById("categoria").value;
  const comboProducto = document.getElementById("producto");
  const inputPrecio = document.getElementById("precioUSD");

  comboProducto.innerHTML = '<option value="">-- Selecciona un Alimento --</option>';
  inputPrecio.value = "";

  if (rubroSeleccionado && catalogo[rubroSeleccionado]) {
    catalogo[rubroSeleccionado].forEach(item => {
      const option = document.createElement("option");
      option.value = item.nombre;
      option.setAttribute("data-precio", item.precio);
      option.textContent = item.nombre;
      comboProducto.appendChild(option);
    });
  }
}

// Al seleccionar el producto, autocompletar el precio unitario en dólares
document.getElementById("producto").addEventListener("change", function() {
  const selectedOption = this.options[this.selectedIndex];
  const precioSugerido = selectedOption.getAttribute("data-precio");
  if (precioSugerido) {
    document.getElementById("precioUSD").value = precioSugerido;
  }
});

// Agregar producto al crédito actual
function agregarProducto() {
  const rubro = document.getElementById("categoria").value;
  const producto = document.getElementById("producto").value;
  const precio = parseFloat(document.getElementById("precioUSD").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);

  if (!rubro || !producto || isNaN(precio) || precio <= 0 || isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor selecciona un rubro, un alimento válido y verifica el precio/cantidad.");
    return;
  }

  const subtotal = precio * cantidad;

  productosAgregados.push({
    rubro: rubro,
    producto: producto,
    cantidad: cantidad,
    precioUnitario: precio,
    subtotal: subtotal
  });

  actualizarTabla();
  document.getElementById("precioUSD").value = "";
  document.getElementById("cantidad").value = "1";
}

// Actualizar tabla y sumar totales acumulados
function actualizarTabla() {
  const cuerpoTabla = document.getElementById("cuerpoTabla");
  const tasaDolar = parseFloat(document.getElementById("tasaDolar").value) || 0;
  
  cuerpoTabla.innerHTML = "";
  let totalUSD = 0;

  productosAgregados.forEach((item, index) => {
    totalUSD += item.subtotal;
    const fila = `
      <tr>
        <td>${item.producto}</td>
        <td>${item.cantidad}</td>
        <td>$${item.subtotal.toFixed(2)}</td>
        <td><button type="button" onclick="eliminarItem(${index})" style="background:#d9534f; padding:4px 8px; margin:0; font-size:11px;">X</button></td>
      </tr>
    `;
    cuerpoTabla.innerHTML += fila;
  });

  const totalBS = totalUSD * tasaDolar;

  document.getElementById("totalUSD").textContent = `$${totalUSD.toFixed(2)}`;
  document.getElementById("totalBS").textContent = `Bs ${totalBS.toFixed(2)}`;
}

// Eliminar un producto individual de la lista
function eliminarItem(index) {
  productosAgregados.splice(index, 1);
  actualizarTabla();
}

// Guardar crédito del cliente
function guardarCreditoTotal() {
  const cliente = document.getElementById("nombreCliente").value;
  const telefono = document.getElementById("cedulaCliente").value;
  const tasa = document.getElementById("tasaDolar").value;

  if (!cliente) {
    alert("Por favor ingresa el nombre del cliente.");
    return;
  }

  if (productosAgregados.length === 0) {
    alert("Agrega al menos un producto al crédito.");
    return;
  }

  let totalUSD = productosAgregados.reduce((sum, item) => sum + item.subtotal, 0);
  let totalBS = totalUSD * tasa;

  let registroCredito = {
    fecha: new Date().toLocaleString(),
    cliente: cliente,
    telefono: telefono,
    tasaDolar: tasa,
    productos: productosAgregados,
    totalUSD: totalUSD,
    totalBS: totalBS
  };

  // Guardar en el almacenamiento del navegador (localStorage)
  let historial = JSON.parse(localStorage.getItem("historial_creditos")) || [];
  historial.push(registroCredito);
  localStorage.setItem("historial_creditos", JSON.stringify(historial));

  alert(`✅ ¡Crédito guardado con éxito para ${cliente}!\nTotal: $${totalUSD.toFixed(2)} (Bs ${totalBS.toFixed(2)})`);
  
  // Limpiar formulario
  document.getElementById("nombreCliente").value = "";
  document.getElementById("cedulaCliente").value = "";
  productosAgregados = [];
  actualizarTabla();
}
