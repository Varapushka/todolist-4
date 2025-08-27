import s from './InputForm.module.css';
import {KeyboardEvent,ChangeEvent, useState} from "react";

type Props= {
    onSubmit: (value: string) => void;
    placeholder?: string;
    buttonLabel?: string;
    disabled?: boolean;
    className?: string;
}

export const InputForm = ({
                              onSubmit,
                              placeholder = 'Write something...',
                              buttonLabel = '+',
                              disabled = false,
                              className = '',
                                }: Props) => {
    const [value, setValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSubmit = () => {
        const trimmed = value.trim();
        if (trimmed) {
            onSubmit(trimmed);
            setValue('');
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') handleSubmit();
    };

    return (
        <div className={`${s.wrapper} ${className}`}>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className={s.input}
                disabled={disabled}
            />
            <button
                onClick={handleSubmit}
                className={s.button}
                disabled={disabled || !value.trim()}
            >
                {buttonLabel}
            </button>
        </div>
    );
};
