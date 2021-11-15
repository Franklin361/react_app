import { Formik, Form } from 'formik';

import formJson from "../data/custom-form.json";
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components';
import * as Yup from 'yup';

const  initialValues: { [key:string]: any } = {} 
const requiredFields: { [key:string]: any } = {} 

for (const field of formJson) {
    initialValues[field.name] = field.value;

    if(!field.validations) continue;

    let schema = Yup.string();

    for (const rule of field.validations) {
        if(rule.type === 'required'){
            schema = schema.required('Este campo es requerido')
        }

        if(rule.type === 'minLength'){
            schema = schema.min( (rule as any).value , `Este campo es de minimo ${(rule as any).value} caracteres`);
        }

        if(rule.type === 'email'){
            schema = schema.email('Email no valido')
        }
    }

    requiredFields[field.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
    return (
        <div className="container_form">
            <h1 className="title_form">Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => { console.log(values) }}
            >
                {
                    ({handleReset}) => (
                        <Form className="form_formik" noValidate>
                            {
                                formJson.map(({ type, name, placeholder, label, options }) => {

                                    if(type === "select"){
                                        return <MySelect label={label} name={name} key={name} className="select_input"> 
                                            <option value="">--- Selecciona una opción ---</option>
                                            {
                                                options?.map( ({id, desc}) => ( <option value={id} key={id}>{desc}</option> ))
                                            }
                                         </MySelect>
                                    }

                                    return <MyTextInput label={label} name={name} placeholder={placeholder} type={(type as any)} key={name} />
                                })
                            }

                            <button className="btn btn_submit" type="submit">Ingresar</button>
                            <button onClick={handleReset} className="btn btn_reset" type="button">Resetear</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
