import React, { SyntheticEvent } from 'react';

interface InputProps {
    onChange: (e: SyntheticEvent) => void;
}

const Input = ({ onChange }: InputProps) => {
    return <input data-testid="asd" type='text' onChange={onChange} />
}

export default Input;