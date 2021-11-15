import * as Yup from 'yup';
import { Formik, Form } from "formik";

import { MyCheckBox, MySelect, MyTextInput } from "../components";

import '../styles/style.css'

export const FormikAbstractation = () => {


    return (
        <div className="container_form container_form_formik">
            <h1 className="title_form"> Formik Abstractation</h1>
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
                            <MyTextInput label="Nombre: " name="nombre" />
                            <MyTextInput label="Correo: " name="correo" type="email" />

                            <MySelect label="Tipo de trabajo" name="trabajo" className="select_input">
                                <option value="">--- Seleccione una opción ---</option>
                                <option value="developer">Developer</option>
                                <option value="product-manajer">Product Manajer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                            </MySelect>

                            <MyCheckBox label="Terminos y condiciones" name="terminos"/>

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
