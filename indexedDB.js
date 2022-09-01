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
    leerObjetos();
});

IDBRequest.addEventListener("error",()=>{
    console.log("ocurrió un error al abrir la base de datos");
});

document.getElementById("add").addEventListener("click",()=>{
    let nombre=document.getElementById("nombre").value;
    if (nombre.length > 0){
        addObjeto({nombre});
        leerObjetos();
    }
})


// AGREGAR OBJETO, pongo en consola addObjeto({nombre:"Roberto"})
const addObjeto=objeto=>{
    const IDBData=getIDBData("readwrite","objeto agregado correctamente");
    IDBData.add(objeto);
}

// LEER OBJETOS, pongo en consola leerObjetos();
// const leerObjetos =()=>{
//     const IDBData=getIDBData("readonly");
//     const cursor=IDBData.openCursor();
//     cursor.addEventListener("success",()=>{
//         if (cursor.result){
//             console.log(cursor.result.value);
//             cursor.result.continue();
//         } else console.log("todos los datos fueron leidos");
//     })
// }

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
// EJERCICIO
const leerObjetos =()=>{
    const IDBData=getIDBData("readonly");
    const cursor=IDBData.openCursor();
    const fragment=document.createDocumentFragment();
    document.querySelector(".nombres").innerHTML="";
    cursor.addEventListener("success",()=>{
        if (cursor.result){
            let elemento=nombresHTML(cursor.result.key,cursor.result.value);
            fragment.appendChild(elemento);
            cursor.result.continue();
        } else document.querySelector(".nombres").appendChild(fragment);
    })
}

const nombresHTML=(id,name)=>{
    const container=document.createElement("DIV");
    const h2=document.createElement("H2");
    const options=document.createElement("DIV");
    const saveButton=document.createElement("button");
    const deleteButton=document.createElement("button");

    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");

    saveButton.textContent="Guardar";
    deleteButton.textContent="Eliminar";

    h2.textContent= name.nombre;
    h2.setAttribute("contenteditable","true");
    h2.setAttribute("spellcheck","false");

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup",()=>{
        saveButton.classList.replace("imposible","posible");
    })
    saveButton.addEventListener("click",()=>{
        if(saveButton.className=="posible"){
            modificarObjeto(id,{nombre:h2.textContent})
            saveButton.classList.replace("posible","imposible")
        }
    })

    deleteButton.addEventListener("click",()=>{
        eliminarObjeto(id);
        document.querySelector(".nombres").removeChild(container);
    })

    return container;
}

