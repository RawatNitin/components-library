import { SyntheticEvent } from 'react';
interface InputProps {
    onChange: (e: SyntheticEvent) => void;
}
declare const Input: ({ onChange }: InputProps) => JSX.Element;
export default Input;
