/**
*3. PROFESORES-A
*En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
*3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su cédula, nombre y
*sexo (F - M).
*Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
*estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
*retorne otro arreglo de objetos con solamente los profesores de una categoría dada.
*Función: profesoresCategoria.
*Parámetros: profesores (array de objetos profesor), categoria (un número).
*Retorno: array de objetos profesor que pertenecen a la categoría indicada.
 */
let profesoresCategoria = (profesores, categoria) => {
    let array = [];
    for(let i = 0; i < profesores.length; i++){
        if(profesores[i].categoría == categoria){
            array.push(profesores[i]);
        }
    }
    return array;
}

let profesores = [
    {categoría: 1, nombre: 'Juana', sexo: 'F'},
    {categoría: 2, nombre: 'Carlos', sexo: 'M'},
    {categoría: 3, nombre: 'Maria', sexo: 'F'},
    {categoría: 3, nombre: 'Luis', sexo: 'M'},
    {categoría: 5, nombre: 'Ricardo', sexo: 'M'},
    {categoría: 3, nombre: 'Diovarda', sexo: 'F'},
    {categoría: 3, nombre: 'Catalina', sexo: 'F'},
    {categoría: 4, nombre: 'Ricardo', sexo: 'M'},

];

let salida = document.getElementById('salida');

salida.innerHTML = "Profesores de la categoria 3:"+JSON.stringify(profesoresCategoria(profesores, 3));
