import { useEffect, useRef, useState } from 'react'
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);

    const increaseBy = (value: number) => {

        let newValue = Math.max(counter + value, initialValues?.count || 0);

        if(initialValues?.maxCount) newValue = Math.min(newValue, initialValues.maxCount);
        
        setCounter(newValue);
        onChange && onChange({ product, count: newValue });
    };

    const reset = () => {
        setCounter(initialValues?.count || value)     
    };

    useEffect(() => {

        if (isMounted.current) setCounter(value);

    }, [value]);

    useEffect(() => {

        return () => {
            isMounted.current = true
        }
    }, [])

    return {
        counter,
        reset,
        increaseBy,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues.maxCount
    }
}
