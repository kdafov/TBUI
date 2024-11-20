import React from 'react';
import styles from './BasicInput.module.css';

type InputProps = {
    label: string;
    type: 'text' | 'password' | 'email';
    placeholder?: string;
    autocomplete?: string;
    style?: string | null;
};

export default function BasicInput({
    label,
    type,
    placeholder = '',
    autocomplete = 'on',
    style = null,
}: InputProps) {
    return (
        <label className={styles.label}>
            {label}
            <input
                type={type}
                autoComplete={autocomplete}
                placeholder={placeholder}
                className={
                    style !== null
                        ? style === 'bottomBorder'
                            ? styles.inputUnderline
                            : styles.inputNoBorder
                        : styles.inputDefault
                }
            />
        </label>
    );
}
