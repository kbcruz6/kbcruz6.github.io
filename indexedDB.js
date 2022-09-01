"use strict";

const IDBRequest=indexedDB.open("database",1);

IDBRequest.addEventListener("upgradeneeded",()=>{
    const db=IDBRequest.result;
    db.createObjectStore("nombres",{
        autoIncrement:true
    });
});

IDBRequest.addEventListener("success",()=>{
    console.log("todo salió correctamente");
});

IDBRequest.addEventListener("error",()=>{
    console.log("ocurrió un error al abrir la base de datos");
});


// AGREGAR OBJETO, pongo en consola addObjeto({nombre:"Roberto"})
const addObjeto=objeto=>{
    const IDBData=getIDBData("readwrite","objeto agregado correctamente");
    IDBData.add(objeto);
}

// LEER OBJETOS, pongo en consola leerObjetos();
const leerObjetos =()=>{
    const IDBData=getIDBData("readonly");
    const cursor=IDBData.openCursor();
    cursor.addEventListener("success",()=>{
        if (cursor.result){
            console.log(cursor.result.value);
            cursor.result.continue();
        } else console.log("todos los datos fueron leidos");
    })
}

// MODIFICAR OBJETOS, pongo en consola modificarObjeto(3,{nombre:"Peperulo"})
const modificarObjeto=(key,objeto)=>{
    const IDBData=getIDBData("readwrite","objeto modificado correctamente");
    IDBData.put(objeto,key);
}

// ELIMINAR OBJETOS, pongo en consola eliminarObjeto(4)
const eliminarObjeto=(key)=>{
    const IDBData=getIDBData("readwrite","objeto eliminado correctamente");
    IDBData.delete(key);
}

// Funcion getIDBData para simplificar la obtencion de datos, esas primeras 3 lineas que se repiten en todas las funciones
const getIDBData =(mode,msg)=>{
    const db=IDBRequest.result;
    const IDBtransaction=db.transaction("nombres",mode);
    const objectStore=IDBtransaction.objectStore("nombres");
    IDBtransaction.addEventListener("complete",()=>{
        console.log(msg);
    })
    return objectStore;
}