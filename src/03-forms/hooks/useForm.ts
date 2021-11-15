import { useState } from 'react'

export const useForm = <T>(initState : T) => {
    const [form, setForm] = useState(initState)

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
         const { name, value } = e.target;
         setForm( prev => ({
            ...prev,
            [name]:value
        }))
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         console.log(form);
         resetForm();
    };

    const resetForm = () => {
        setForm(initState);     
    };

    return {
        form,
        ...form,
        onChange,
        handleSubmit,
        resetForm
    }

}
