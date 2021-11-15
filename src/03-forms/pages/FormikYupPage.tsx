import { useFormik } from "formik";
import * as Yup from 'yup';

import '../styles/style.css'


// interface FormValues {
//     nombre: string;
//     apellido: string;
//     correo: string;
// }

export const FormikYupPage = () => {


    const { handleSubmit, handleReset, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            correo: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object({
            nombre: Yup.string().max(15, 'Debe tener maximo 15 letras').required('Requerido'),
            apellido: Yup.string().max(15, 'Debe tener maximo 15 letras').required('Requerido'),
            correo: Yup.string().email('Debe ser un email valido').required('Requerido'),
        })
    });


    return (
        <div className="container_form">
            <h1 className="title_form">Formik Yup</h1>

            <form className="form_formik" noValidate onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre: </label>
                    <input
                        type="text"
                        id="nombre"
                        {...getFieldProps('nombre')}
                        className={`${(touched.nombre && errors.nombre) && 'error_input_formik'}`}
                    />
                    {(touched.nombre && errors.nombre) && <span className="error_formik">{errors.nombre}</span>}
                </div>
                <div>
                    <label htmlFor="apellido">Apellido: </label>
                    <input
                        type="text"
                        id="apellido"
                        {...getFieldProps('apellido')}
                        className={`${(touched.apellido && errors.apellido) && 'error_input_formik'}`}
                    />
                    {(touched.apellido && errors.apellido) && <span className="error_formik">{errors.apellido}</span>}
                </div>
                <div>
                    <label htmlFor="correo">Correo: </label>
                    <input
                        type="email"
                        id="correo"
                        {...getFieldProps('correo')}
                        className={`${(touched.correo && errors.correo) && 'error_input_formik'}`}
                    />
                    {(touched.correo && errors.correo) && <span className="error_formik">{errors.correo}</span>}
                </div>


                <button
                    className="btn btn_submit"
                    type="submit"
                // disabled
                >Ingresar</button>

                <button
                    className="btn btn_reset"
                    type="button"
                    onClick={handleReset}
                // disabled
                >Resetear</button>
            </form>
        </div>
    )
}
