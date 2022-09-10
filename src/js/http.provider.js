//logica para las peticiones


const chistesUrl ='https://api.chucknorris.io/jokes/random'
const urlUsuarios ='https://reqres.in/api/users?page=2'

const cloudPreset = "aut"



const obtenerChiste = async ( ) =>{

    try {

        const resp = await fetch(chistesUrl)

        if(resp.status !== 200) throw ('No se pudo realizar la peticion')

        // const chiste = await resp.json()
        

        //atributos del api
        const {icon_url,id,value} = await resp.json()
        
        
        return {
            icon_url:icon_url,
            id:id,
            value:value
        }

    } catch (error) {
        
        throw(error)
    }
    

}

const obtenerUsuarios =async() =>{
    const resp = await fetch(urlUsuarios)
    const {data:usuarios }  = await resp.json()
    
    return usuarios;
}   






//exportar funciones
export{
    obtenerChiste,
    obtenerUsuarios

}