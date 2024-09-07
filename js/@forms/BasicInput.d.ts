import React from 'react';
type InputProps = {
    label: string;
    type: 'text' | 'password' | 'email';
    placeholder?: string;
    autocomplete?: string;
    style?: string | null;
};
export default function BasicInput({ label, type, placeholder, autocomplete, style, }: InputProps): React.JSX.Element;
export {};
