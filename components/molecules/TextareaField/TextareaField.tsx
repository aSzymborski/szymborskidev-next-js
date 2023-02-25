import { useState } from 'react'
import styles from '@/components/molecules/TextareaField/TextareaField.module.scss'

interface Field {
    name: string,
    placeholder:string
    label:string
}

export default function TextareaField (props:Field) {
    const [value, setValue] = useState('')

    const handleChange = (e: { target: HTMLTextAreaElement; }) => {
        setValue(e.target.value)
    }
    return (
        <>
            <div className={styles.textareaField}>
                <label className={styles.textareaField_label}>{props.label}</label>
                <textarea className={styles.textareaField_textarea} name={props.name} placeholder={props.placeholder} value={value} onChange={handleChange}></textarea>
            </div>
        </>
    )
}