import { useFormik, FormikErrors } from "formik";


import '../styles/style.css'


interface FormValues {
    nombre: string;
    apellido: string;
    correo: string;
}
export const FormikBasicPage = () => {

    const validate = ({ nombre, apellido, correo }: FormValues) => {
        const errors: FormikErrors<FormValues> = {}

        if (!nombre) {
            errors.nombre = "El nombre es obligatorio"
        } else if (nombre.length >= 15) {
            errors.nombre = "Deberia ser menor de 16 caracteres"
        }

        if (!apellido) {
            errors.apellido = "El apellido es obligatorio"
        } else if (apellido.length >= 15) {
            errors.apellido = "Deberia ser menor de 16 caracteres"
        }

        if (!correo) {
            errors.correo = 'El email es obligatorio';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(correo)) {
            errors.correo = 'Este email no es valido';
        }

        return errors;
    };

    const { handleChange, values, handleSubmit, handleReset, errors, touched, handleBlur } = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            correo: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validate
    });


    return (
        <div className="container_form">
            <h1 className="title_form">Formik Basic</h1>

            <form className="form_formik" noValidate onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre: </label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${(touched.nombre && errors.nombre) && 'error_input_formik'}`}
                    />
                    {(touched.nombre && errors.nombre) && <span className="error_formik">{errors.nombre}</span>}
                </div>
                <div>
                    <label htmlFor="apellido">Apellido: </label>
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={values.apellido}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${(touched.apellido && errors.apellido) && 'error_input_formik'}`}
                    />
                    {(touched.apellido && errors.apellido) && <span className="error_formik">{errors.apellido}</span>}
                </div>
                <div>
                    <label htmlFor="correo">Correo: </label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={values.correo}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
