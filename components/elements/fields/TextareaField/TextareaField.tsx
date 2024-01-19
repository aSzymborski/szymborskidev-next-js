import { useState } from "react";
import styles from "./TextareaField.module.scss";

interface Field {
  name: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: any;
}

export default function TextareaField(props: Field) {
  return (
    <>
      <div className={styles.textareaField}>
        <label className={styles.textareaField_label}>{props.label}</label>
        <textarea
          className={styles.textareaField_textarea}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        ></textarea>
      </div>
    </>
  );
}
