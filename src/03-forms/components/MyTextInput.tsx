import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name:string;
    type?: 'text' | 'password' | 'email';
    placeholder?:string;
    [x: string]: any
}

export const MyTextInput = ({ label,...props }: Props) => {

    const [ field ] = useField(props)

    return (
        <div>
            <label htmlFor={props.name || props.id}>{ label }</label>
            <input {...field} {...props} />
            <ErrorMessage name={props.name} component="span" className="error_formik" />
        </div>
    )
}
