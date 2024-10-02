import React from "react"

const ChannelList =({canalesJSX,titulo}) =>{

  return(
    <>
    <h1>(titulo)</h1>
    {
          canalesJSX.map((canal)=> {
          return(
        <div key={canal.id}>
        <a>
          {canal.nombre}
        </a>
        </div>
          )})
        }
  </>
  )
}


export default ChannelList































//buena practica
// estrucutrua basica del componente
/*
import React from 'react'
const ChannelList =(props.canales.map)=>{
    console.log {proos}

        const resultadoJSX = canales.map((canal) =>
            {
            return (
              <div key={canal.id}>
              <a>
                {canal.nombre}
              </a>
              </div>)
        
        })
    return(
        <>
      
      {resultadoJSX}
      
        <ChannelList/>
        </>
      )
      }
}
export default ChannelList*/