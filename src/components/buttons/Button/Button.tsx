import styles from './Button.module.css';

type Props = {
    title?: string;
    variant?: 'primary' | 'button' | 'delete' | 'theme';
    className?: string;
    onClick?: () => void;
    tooltip?: string;
};



export const Button = ({ title, variant, className, onClick, tooltip}: Props) => {
    const variantClass = variant && styles[variant] ? styles[variant] : '';
    const combinedClassName = `${styles.button} ${variantClass} ${className ?? ''}`;
    const onClickHandler = () => {onClick?.()}
    return <button
        className={combinedClassName}
        onClick={onClickHandler}
        data-tooltip={tooltip}
        aria-label={tooltip}
        >{title}</button>;
};
