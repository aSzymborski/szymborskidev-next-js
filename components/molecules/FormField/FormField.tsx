import { useState } from 'react'
import styles from '@/components/molecules/FormField/FormField.module.scss'

interface Field {
    name: string,
    type:string,
    placeholder:string
    label:string
}

export default function FormField (props:Field) {
    const [value, setValue] = useState('')

    const handleChange = (e: { target: HTMLInputElement; }) => {
        setValue(e.target.value)
    }
    return (
        <>
            <div className={styles.formField}>
                <label className={styles.formField_label}>{props.label}</label>
                <input className={styles.formField_input} name={props.name} type={props.type} placeholder={props.placeholder} value={value} onChange={handleChange} />
            </div>
        </>
    )
}