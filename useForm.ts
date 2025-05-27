import { useState } from "react";
import type { User } from '../Types/User';

const defaultUser:User = {
    username: 'Daniel Mtz',
    email: 'example@gmail.com',
    password: '1234'
}

export const useForm = ( initialState:User = defaultUser ) => {

    const [formState, setFormState] = useState( initialState );

    const onInputChange = ( { target }:  React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value} = target;   
        setFormState( (currentState) =>  ({
            ...currentState, 
            [ name ]:value,
        }));
    }

    const onResetForm = () => 
    {
        setFormState(initialState);

    }
    

    return {
        formState,
        onInputChange,
        onResetForm,
    };
}