import { useEffect, useState } from 'react';
import {Button} from "../Button/Button.tsx";
import styles from './ThemeToggleButton.module.css'

type Theme = 'light' | 'dark';

export const ThemeToggleButton = () => {
    const[theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
        if (saved === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            setTheme('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme === 'dark' ? 'dark' : '');
        localStorage.setItem('theme', newTheme );
        setTheme(newTheme);
    }

    return (
        <div className={styles.buttonWrapper} >
        <Button
            title={theme === 'dark' ? '🌞' : '🌙'}
            onClick={toggleTheme}
            variant={'theme'}

        />
        </div>
    )
}