import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name:string;
    [x: string]: any
}


export const MyCheckBox = ({label, ...props}: Props) => {
    const [ field ] = useField({...props, type:'checkbox'})

    return (
        <div>
            <label className="label_check">
                <input type="checkbox" {...field} {...props} />
                <span>{ label }</span>
            </label>
            <ErrorMessage name={props.name} component="span" className="error_formik" />
        </div>
    )
}
