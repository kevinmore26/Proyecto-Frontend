import React from 'react'
import { useState,useEffect } from 'react'
import { obtenerProductos } from '../services/productoService'
import GroupProducts from '../components/GroupProducts'

export default function PortadaView() {

    const[productos,setProductos]=useState([])

    const getProductos = async () =>
    {
        try{
            let productosObtenidos=await obtenerProductos()
            setProductos(productosObtenidos)
        }
       catch(error)
       {
           console.log(error)
       }
    }
    useEffect(()=>{
        getProductos()
    },[])
// el contenido se procesa en return, para luego pasar al useeffect, iniciando la variable get productos(FASE DE MONTAJE), LUEGO SE EJECUTA EL USE
    return (
        <div>
            <GroupProducts productos={productos}/>
        </div>
    )
}