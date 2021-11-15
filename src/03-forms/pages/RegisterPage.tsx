
import '../styles/style.css'
import { useForm } from '../hooks/useForm';


const initForm = {
    nombre: '',
    correo: '',
    pass:'',
    pass2:''  
  }

export const RegisterPage = () => {

    const { 
        handleSubmit, onChange, resetForm,
        nombre, correo, pass, pass2
    } = useForm(initForm);

    return (
        <div className="container_form">
            <h1 className="title_form">Register Page</h1>

            <form className="form" onSubmit={handleSubmit} noValidate>
                <input 
                    type="text" 
                    name="nombre"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={onChange}
                />
                <input 
                    type="email" 
                    name="correo"
                    placeholder="Correo"
                    value={correo}
                    onChange={onChange}
                />
                <input 
                    type="password" 
                    name="pass"
                    placeholder="Password"
                    value={pass}
                    onChange={onChange}
                />
                <input 
                    type="password" 
                    name="pass2"
                    placeholder="Repetir password"
                    value={pass2}
                    onChange={onChange}
                />

                {
                    
                }

                <button 
                    className="btn btn_submit" 
                    type="submit"
                    // disabled
                >Ingresar</button>

                <button 
                    onClick={resetForm}
                    className="btn btn_reset" 
                    type="button"
                    // disabled
                >Resetear</button>
            </form>
        </div>
    )
}
