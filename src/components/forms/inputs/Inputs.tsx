import styles from "./InputLayout.module.css";
import { ChangeEvent } from "react";

type InputLayoutProps = {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  addRotation: (amount: number) => void;
};

const InputLayout = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  addRotation,
}: InputLayoutProps) => {
  const handleKeyPress = () => {
    addRotation(0.1);
  };

  return (
    <input
      className={styles.inputStyle}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      onKeyDown={handleKeyPress}
    />
  );
};

export default InputLayout;
