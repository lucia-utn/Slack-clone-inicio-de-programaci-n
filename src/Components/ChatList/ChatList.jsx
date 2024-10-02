import React from "react"
import ChatItem from "../ChatItem/ChatItem"
const Chatlist=( { mensajes } )=>{

    const handleSubmitMessage = (evento) =>{
        evento.preventDefault()
        console.log('enviado')

    }




    return (
        <div>
            <div className="mensajes">
                {
                            mensajes.map((mensaje) => {
                                return (
                                    <ChatItem key={mensaje.id} author={mensaje.author} text={mensaje.text}/>
                                )
                            })
                }

            </div>
        </div>
    )
}

const ChatItem = (props) => {
    return (
        <div >
            <div >{props.author}</div>
            <p>{props.text}</p>
        </div>
    )
}


export default Chatlist




//Version antigua

/* const saludar1 = (params) => {
    const nombre = params.nombre
    const apellido = params.apellido
    console.log(`Hola soy ${nombre} ${apellido}` )
} */

//Version mejorada
/* const saludar = ({nombre, apellido}) => {

    console.log(`Hola soy ${nombre} ${apellido}` )
}
  

saludar({nombre: 'pedro', apellido: 'suarez'})
saludar({nombre: 'juan', apellido: 'suarez'}) */