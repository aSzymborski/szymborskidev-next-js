import styles from "./FormField.module.scss";

interface Field {
  name: string;
  type: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: any;
}

export default function FormField(props: Field) {
  return (
    <>
      <div className={styles.formField}>
        <label className={styles.formField_label}>{props.label}</label>
        <input
          className={styles.formField_input}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  );
}
