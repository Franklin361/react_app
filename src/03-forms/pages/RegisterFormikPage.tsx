
import '../styles/style.css'

import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';
import * as Yup from 'yup';


export const RegisterFormikPage = () => {

    return (
        <div className="container_form">
            <h1 className="title_form">Register Page</h1>

            <Formik
                initialValues={{
                    nombre: '',
                    correo: '',
                    pass: '',
                    pass2: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        nombre: Yup.string().max(15, 'Debe tener maximo 15 letras').min(2, 'Minimo 2 letras').required('Requerido'),
                        correo: Yup.string().email('Debe ser un email valido').required('Requerido'),
                        pass: Yup.string().required('Requerido').min(6, 'Minimo seis caracteres'),
                        pass2: Yup.string().required('Requerido').min(6, 'Minimo seis caracteres').oneOf( [Yup.ref("pass")], "Las contraseñas no coinciden"),
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form className="form_formik_register" noValidate>

                            <MyTextInput name="nombre" placeholder="Nombre" />
                            <MyTextInput name="correo" placeholder="Correo" type="email" />
                            <MyTextInput name="pass" placeholder="Contraseña" type="password" />
                            <MyTextInput name="pass2" placeholder="Repita la contraseña" type="password" />

                            <button
                                className="btn btn_submit"
                                type="submit"
                            // disabled
                            >Ingresar</button>

                            <button
                                onClick={handleReset}
                                className="btn btn_reset"
                                type="button"
                            // disabled
                            >Resetear</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
