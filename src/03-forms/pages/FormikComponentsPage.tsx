import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from 'yup';

import '../styles/style.css'

export const FormikComponentsPage = () => {


    return (
        <div className="container_form container_form_formik">
            <h1 className="title_form">Formik Components</h1>
            <Formik
                initialValues={{
                    nombre: '',
                    correo: '',
                    terminos: false,
                    trabajo: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        nombre: Yup.string().max(15, 'Debe tener maximo 15 letras').required('Requerido'),
                        correo: Yup.string().email('Debe ser un email valido').required('Requerido'),
                        terminos: Yup.boolean().isTrue('Acepte Terminos y condiciones'),
                        trabajo: Yup.string().required('Requerido'),
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form className="form_formik" noValidate>
                            <div>
                                <label htmlFor="nombre">Nombre: </label>
                                <Field name="nombre" type="text" />
                                <ErrorMessage name="nombre" className="error_formik" component="span" />
                            </div>
                            <div>
                                <label htmlFor="correo">Correo: </label>
                                <Field name="correo" type="email" />
                                <ErrorMessage name="correo" className="error_formik" component="span" />
                            </div>
                            <div>

                                <label htmlFor="trabajo"> Tipo de trabajo </label>
                                <Field name="trabajo" id="trabajo" as="select" className="select_input">
                                    <option value="">--- Seleccione una opción ---</option>
                                    <option value="developer">Developer</option>
                                    <option value="product-manajer">Product Manajer</option>
                                    <option value="designer">Designer</option>
                                    <option value="it-senior">IT Senior</option>
                                </Field>

                                <ErrorMessage name="trabajo" className="error_formik" component="span" />
                            </div>
                            <div>
                                <div>
                                    <Field type="checkbox" name="terminos" id="terminos" />
                                    <label htmlFor="terminos" className="label_check"> Terminos y condiciones </label>
                                </div>
                                <ErrorMessage name="terminos" className="error_formik" component="span" />
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
                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}
