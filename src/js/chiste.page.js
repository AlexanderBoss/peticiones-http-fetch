import { obtenerChiste, obtenerUsuarios } from "./http.provider";


const body = document.body;
let btnOtroChiste, olList,tbody;
let correlativo = 0


const crearUsuariosHtml=()=>{
    const html =
                `
                <h1 class="mt-5">Usuarios</h1>
                <hr>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" > # </th>
                            <th scope="col" > email </th>
                            <th scope="col" > Nombre </th>
                            <th scope="col" > Avatar </th>
                            
                        </tr>
                    </thead>

                <tbody>
                </tbody>
                
                </table>  
    `

    const div = document.createElement('div')
    div.innerHTML = html
    body.appendChild(div)

    tbody = document.querySelector('tbody')

}


const crearFilaUsuario = (usuario) =>{
    correlativo ++;

    const html = `
        <td scope="col"> ${correlativo}. </td>
        <td scope="col"> ${usuario.email}. </td>
        <td scope="col"> ${usuario.first_name} ${usuario.last_name} </td>
        <td scope="col"> 
            <img class ="img-thumbnail" src="${usuario.avatar}"></img>
        </td>

    `

    const tr = document.createElement('tr')
    tr.innerHTML = html

    tbody.append( tr )
}


const crearChisteHtyml =() =>{

    const html = `
                <h1 class="mt-5">Chistes</h1>
                <hr>

                <button class="btn btn-primary">Otro chiste</button>

                <ol class="mt-2 list-group">
                    <li class="list-group-item">....</li>
                
                </ol>
                `
    const divChistes = document.createElement('div')
    divChistes.innerHTML = html
    body.append(divChistes)
}

const eventos =()=>{

    olList = document.querySelector('ol')
    btnOtroChiste =document.querySelector('button')

    btnOtroChiste.addEventListener('click', async() => {
        
        btnOtroChiste.disabled = true;
        dibujarChiste( await obtenerChiste() );
        btnOtroChiste.disabled = false;
    });


}

// Chiste { id, value }
const dibujarChiste = ( chiste ) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${ chiste.id }</b>: ${ chiste.value } :${chiste.icon_url}`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);

}





export const init = async() =>{

    crearUsuariosHtml()
    correlativo = 0 
    crearChisteHtyml()   
    eventos()

    const usuarios = await obtenerUsuarios();
    usuarios.forEach(crearFilaUsuario);
}

