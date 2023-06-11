let persona1 = {
  id: "1",
  nombre: "edwin",
  apellido: "leyva",
  telefono: "15565468",
  correo: "asd@gmail.com",
  ubicacion: {
    ciudad: "barranquilla",
    direccion: "cra 15 con 19",
  },
};
let persona2 = {
  id: 2,
  nombre: "grace",
  apellido: "rodriguez",
  telefono: "5416564",
  correo: "poi@gmail.com",
  ubicacion: {
    ciudad: "barranquilla",
    direccion: "cra 14 con 13",
  },
};
let persona3 = {
  id: "3",
  nombre: "mary",
  apellido: "leyva",
  telefono: "8576542",
  correo: "meme@gmail.com",
  ubicacion: {
    ciudad: "toronto",
    direccion: "cra 4 con 19",
  },
};
let persona4 = {
  id: "4",
  nombre: "isaac",
  apellido: "leyva",
  telefono: "15565468",
  correo: "master@gmail.com",
  ubicacion: {
    ciudad: "quebec",
    direccion: "cra 8 con 152",
  },
};

let contacto = [persona1, persona2, persona3, persona4];

function agregarContacto(
  id,
  nombre,
  apellido,
  telefono,
  correo,
  ciudad,
  direccion
) {
  let persona = {
    id: id,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    correo: correo,
    ubicacion: {
      ciudad: ciudad,
      direccion: direccion,
    },
  };
  contacto.push(persona);
}

agregarContacto(
  5,
  "alex",
  "leyva",
  "521145",
  "chiky@gmail.com",
  "montreal",
  "cra 7 con 25"
);




function eliminarContacto(id) {
  for (let i = 0; i < contacto.length; i++) {
    if (contacto[i].id === id) {
      contacto.splice(i, 1);
    }
  }
}

eliminarContacto(2)
console.log("eliminarcontacto");
console.log(contacto);