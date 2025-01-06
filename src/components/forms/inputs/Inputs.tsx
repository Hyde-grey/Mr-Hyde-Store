import styles from "./InputLayout.module.css";
import { ChangeEvent } from "react";

type InputLayoutProps = {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
};

const InputLayout = ({
  type,
  placeholder,
  value,
  onChange,
  name,
}: InputLayoutProps) => {
  return (
    <input
      className={styles.inputStyle}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};

export default InputLayout;
