function eliminarConexion(element){
  let elementContacto = element.closest('.user-contact');
  let elementNumContactos = element.closest('.contactos-pendientes').querySelector('.num-contact');
  let numContactos = elementNumContactos.innerText;
  numContactos--;
  elementNumContactos.textContent = numContactos;
  elementContacto.remove();
}

function agregarConexion(element){
  let elementContactosAceptados = document.querySelector('.contactos-aceptados');
  let numContactosAceptados = elementContactosAceptados.querySelector('.num-contact').innerText;
  numContactosAceptados++;
  elementContactosAceptados.querySelector('.num-contact').textContent = numContactosAceptados;
  let listaContactosAceptados = elementContactosAceptados.querySelector('.cuerpo');
  let elementImgContactoAgregar = element.closest('.user-contact');
  let imgContactoAgregar = elementImgContactoAgregar.querySelector('img');
  let nombreContactoAgregar = elementImgContactoAgregar.querySelector('h4').innerText;
  console.log(imgContactoAgregar.src); 

  listaContactosAceptados.innerHTML += `
  <div class="contact">
    <img src="${imgContactoAgregar.src}" alt="${imgContactoAgregar.alt}">
    <h4>${nombreContactoAgregar}</h4>
  </div>`;
  
  eliminarConexion(element);
}

function mostrarModal(element){
  elementModal = document.querySelector('.modal');
  elementModal.classList.add('mostrar');
  document.querySelector('#nombre').value = "";
}

function ocultarModal(){
  elementModal = document.querySelector('.modal');
  elementModal.classList.remove('mostrar');
}

function actualizarNombreUsuario(e){
  e.preventDefault();
  let elementNombreUsuario = document.querySelector('.nombre-perfil');
  let nombreUsuario = elementNombreUsuario.innerText;
  let nuevoNombreUsuario = e.target.nombre.value;
  if(nuevoNombreUsuario.trim() === ""){
    elementNombreUsuario.textContent = nombreUsuario;
  }else{
    elementNombreUsuario.textContent = nuevoNombreUsuario;
  }  
  ocultarModal();
}

// function cambiarNombreUsuario(element){
//   let elementNombreUsuario = element.closest('.info-card').querySelector('.nombre-perfil');
//   let nombreUsuario = elementNombreUsuario.innerText;
//   if(nombreUsuario === 'Jane Doe'){
//     elementNombreUsuario.textContent = 'Annette Cardenas';
//   }else{
//     elementNombreUsuario.textContent = 'Jane Doe';
//   }
// }