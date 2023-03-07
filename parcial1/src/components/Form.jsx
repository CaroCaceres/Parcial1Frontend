import React, {useState} from 'react'
import Card from './Card'
import './Card.css'

const Form = () => {
    const [user, setUser] = useState({
        nombre: '',
        peliculaFavorita: ''
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length >=3 && user.nombre !== ''&& user.peliculaFavorita.length>=6) {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }
    }

    return (
        <div className='contenedor'>
            <form className='form' onSubmit={handleSubmit}>
       
                <input className='input' type="text" value={user.nombre} onChange={(e)=>setUser({...user,nombre: e.target.value})} placeholder="Ingresa tu nombre" />
                <input className='input' type="text" value={user.peliculaFavorita}onChange={(e)=>setUser({...user,peliculaFavorita: e.target.value})}placeholder="¿Cuál es tu pelicula favorita?" />

                <button>Enviar</button>
                {err && 'Por favor chequea que la información sea correcta'}
            </form>
            {show && <Card nombre={user.nombre} peliculaFavorita={user.peliculaFavorita} />}
        </div>
  )
}

export default Form