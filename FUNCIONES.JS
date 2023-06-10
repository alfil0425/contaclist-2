

let persona1 = {
    identificacion: "1",
    nombre: "edwin",
    apellido: "leyva",
    telefono: "15565468",
    correo: "asd@gmail.com",
    ubicacion:{
        ciudad: "barranquilla",
        direccion: "cra 15 con 19",
    }
    
};
let persona2 = {
    identificacion: "2",
    nombre: "grace",
    apellido: "rodriguez",
    telefono: "5416564",
    correo: "poi@gmail.com",
    ubicacion:{
        ciudad: "barranquilla",
        direccion: "cra 14 con 13",

    }
    
};
let persona3 = {
    identificacion: "3",
    nombre: "mary",
    apellido: "leyva",
    telefono: "8576542",
    correo: "meme@gmail.com",
    ubicacion:{
        ciudad: "toronto",
        direccion: "cra 4 con 19",
    }
    
};
let persona4 = {
    identificacion: "4",
    nombre: "isaac",
    apellido: "leyva",
    telefono: "15565468",
    correo: "master@gmail.com",
    ubicacion: {
        ciudad: "quebec",
        direccion: "cra 8 con 152",
    }
    
};

let contactos= [persona1, persona2];    



function agregarContacto(identificacion, nombre, apellido, telefono, correo, ciudad, direccion){
    let persona={
        identificacion:identificacion,
        nombre:nombre,
        apellido:apellido,
        telefono:telefono, 
        correo:correo,
        ubicacion:{
            ciudad:ciudad,
            direccion:direccion
        }
        }
    contactos.push(persona)

    
}
console.log(contactos)

