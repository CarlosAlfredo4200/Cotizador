import React from 'react'
import styled from "@emotion/styled";


const ResultadoFinal = styled.div `
color: white;
font-family: 'lato', sans-serif;
display: flex;
align-items: center;
gap: 1rem;
 
`

const Imagen = styled.img`
display: block;
width: 80px;
margin: 0 10px;
 
`

const Texto = styled.p `
font-size: 12px;
span{
    font-weight: 700;
    color: rgb(245, 241, 11);
}
`
const Precio = styled.p `
font-size: 20px;
span{
    font-weight: 700;
    color: rgb(245, 241, 11);
     
}

 
`



const Resultado = ({resultado}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;

    

  return (
      <ResultadoFinal className='resultados'>
        <Imagen src={`http://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto"></Imagen>

        <div >

         <Precio className='text-precio'>El precio es: <span>{PRICE}</span></Precio>
         <Texto className='text-precio'>El precio mas alto del día es: <span>{HIGHDAY}</span></Texto>
         <Texto className='text-precio'>El precio ams bajo del días es: <span>{LOWDAY}</span></Texto>
         <Texto className='text-precio'>Variación ultimas 24 horas : <span>{CHANGEPCT24HOUR}</span></Texto>
         <Texto className='text-precio'>Ultima actualización : <span>{LASTUPDATE}</span></Texto>
        </div>
         
      </ResultadoFinal>
  )
}

export default Resultado