import {
  ChangeEvent,
  InputHTMLAttributes,
  MutableRefObject,
  memo,
  useEffect,
  useRef,
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
  autoFocus?: boolean;
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
    autoFocus = false,
    ...otherProps
  } = props;
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    onChange?.(e.target.value);
  };
  const ref =
    useRef() as MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    if (autoFocus && ref?.current) {
      ref?.current?.focus();
    }
  }, []);
  return (
    <div
      className={classNames(s.inputWraspper, {}, [
        className,
      ])}
    >
      {label ? (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        {...otherProps}
        ref={ref}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        type={type}
        id={id}
        autoFocus={autoFocus}
        className={s.input}
      />
    </div>
  );
});
