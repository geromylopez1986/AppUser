import React, {useState} from 'react'
import Uniqid from 'uniqid'

const Listadonombre = () => {

    const [usernane, setUsername] = useState('')
    const [correo, setCorreo] = useState('')
    const [age, setAge] = useState('')
    const [id, setId] = useState('')
    const [alert, setAlert] = useState(null)

    const [listUser, setList] = useState([])
    const [editUser, setEdit] = useState(false)
    const [mostrar, setMostrar] = useState('')

    const add = (event) => {
        event.preventDefault();
        setMostrar('alert alert-success')
        setAlert('Usuario guardado correctamente')
        if (usernane !== '' && correo !== '' && age !== '') {
            const objetoUser = {
            id: Uniqid(),
            name: usernane,
            mail: correo,
            age: age
        }
        setList([...listUser,objetoUser] )
        setUsername('')
        setCorreo('')
        setAge('')
        } else {
            setMostrar('alert alert-danger')
            setAlert('Los campos son obligatorio * ')
        }

    }
    const delet = (id) => {
        const objetoN = listUser.filter( item => item.id !== id )
            setList(objetoN)
    }
    const edit = (item) => {
        setEdit(true)
        setUsername(item.name)
        setCorreo(item.mail)
        setAge(item.age)
        setId(item.id)
        
    }
    const update = (e) => {
        e.preventDefault()
        const arrayData = listUser.map( item => item.id === id ? {id:id, name:usernane, mail:correo, age:age} : item )
        setUsername('')
        setCorreo('')
        setAge('')
        setList(arrayData)
        setEdit(false)
    }


    return (
        <div className="p-5 contenedor">
            <div className="row m-auto">
                <div className="title bg-primary p-3 rounded-bottom text-center">
                   <h2 className="text-white">CRUD BASICO</h2>
                </div>
                <div className="col-3 bg-light bg-gradient text-center mb-3">
                    <h4>Agregar Usuario</h4>
                    <div >
                   <div id="alert" className={mostrar} role="alert" >
                       <span>{alert}</span>
                   </div>
                        <form onSubmit={ editUser ? (e) => update(e) : (e) => add(e)  } >
                            <div className="mb-3 text-start">
                                <label for="exampleInputEmail1" className="form-label">Username*</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                value={usernane}
                                
                                onChange={ (e) => {
                                    setUsername(e.target.value)
                                } } 
                            />
                            </div>
                            <div className="mb-3 text-start">
                                <label for="exampleInputEmail1" className="form-label">Email address*</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                value={correo}
                                
                                onChange={ (e) => {
                                    setCorreo(e.target.value)
                                } }  
                            />
                            </div>
                            <div className="mb-3 text-start">
                                <label for="exampleInputPassword1" className="form-label">Edad*</label>
                                <input 
                                type="number" 
                                className="form-control" 
                                id="exampleInputPassword1"
                                value={age}
                                
                                onChange={ (e) => {
                                    setAge(e.target.value)
                                } }  
                            />
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <input 
                                    type="submit" 
                                    class="btn btn-primary"
                                    value={
                                        editUser === true ? 'EDITAR USUARIO' : 'AGREGAR USUARIO'
                                    } 
                                />
                            </div>
                            
                        </form>
                    </div>
                </div>
                <div className="col bg-body text-center">
                    <h4 className="text-white">Listado de usuarios</h4>
                    <div className="tabla">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th className="text-white" scope="col">ID</th>
                                    <th className="text-white" scope="col">USERNAME</th>
                                    <th className="text-white" scope="col">EMAIL</th>
                                    <th className="text-white" scope="col">AGE</th>
                                    <th className="text-white" scope="col">OPCIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listUser.map( item =>
                                        
                                        <tr>
                                            <th key={item.id} className="text-white" scope="row">{item.id}</th>
                                            <td className="text-white">{item.name}</td>
                                            <td className="text-white">{item.mail}</td>
                                            <td className="text-white">{item.age}</td>
                                            <td className="text-white">
                                                <button onClick={ () => delet(item.id) }  className="btn btn-danger mx-2"><i class="fas fa-user-minus"></i></button>
                                                <button onClick={ () => edit(item) }  className="btn btn-warning"><i class="fas fa-user-edit"></i></button>
                                            </td>
                                        </tr>

                                        
                                        )
                                }
                            </tbody>
                        </table>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Listadonombre
