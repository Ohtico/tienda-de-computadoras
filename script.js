// valor x 1 pc
let valor = 820000;
// Descuentos 
let des15 = 15;
let des25 = 25;
let des35 = 35;
// Total
let valorT = 0;
// cantidad de pc's

function calcularDescuento(cantidad){

  let subtotal = valor * cantidad
  let descuento = 0

  if(subtotal >= 1640000 && subtotal <= 3280000){
    descuento = des15
  }

  else if(subtotal > 3280000 && subtotal <= 6560000){
    descuento = des25
  }

  else if(subtotal > 6560000 && subtotal <= 9840000){
    descuento = des35
  }

  return descuento

}

function comprar(){
    swal.fire({
       
    title: '¿Seleccione la cantidad de computadores que desea comprar?',
    icon: 'question',
    confirmButtonText: 'Calcular',
    backdrop: true,
    footer: '<span class="rojo">Esta campo es necesario</span>',
    input: 'text',
    inputPlaceholder: 'Cantidad',
    inputValue: '',      
    }
    ).then(result => {
      console.log(result.value)

      let cantidad = result.value
      let descuento = calcularDescuento(cantidad)
      let subtotal = valor * cantidad
      let valor_descuento = subtotal / 100 * descuento

      swal.fire({

        title: `El total de su compra es de: $${subtotal} y su descuento es de: $${valor_descuento}, ${descuento}%`, 
      
        showCancelButton: true,
        confirmButtonText: `Comprar`,

      })

    })

}