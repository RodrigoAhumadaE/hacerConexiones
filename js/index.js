function eliminarConexion(element){
  let elementcontacto = element.closest('.user-contact');
  let elementNumContactos = element.closest('.contactos-pendientes').querySelector('.num-contact');
  let numContactos = elementNumContactos.innerText;
  numContactos--;
  elementNumContactos.textContent = numContactos;
  elementcontacto.remove();

}