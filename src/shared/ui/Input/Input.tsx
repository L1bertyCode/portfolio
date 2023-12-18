import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
} from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Input.module.scss";
type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;
interface InputProps extends HTMLInputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = "text",
    placeholder = "",
    label,
    id,
    value,
    onChange,
    ...otherProps
  } = props;
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    onChange?.(e.target.value);
  };
  return (
    <>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        {...otherProps}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        type={type}
        id={id}
        className={classNames(s.input, {}, [className])}
      />
    </>
  );
});
