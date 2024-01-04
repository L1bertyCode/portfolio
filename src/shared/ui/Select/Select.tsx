import {
  ChangeEvent,
  SelectHTMLAttributes,
  memo,
  useMemo,
} from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Select.module.scss";
type HTMLSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "onChange"
>;
export interface SelectOptions {
  value: string;
  content: string;
}
interface SelectProps extends HTMLSelectProps {
  className?: string;
  options: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  label?: string;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    options,
    value,
    onChange,
    readOnly = true,
    label,
    ...otherProps
  } = props;
  const optionsList = useMemo(() => {
    return options?.map((optionItem) => (
      <option
        key={optionItem.value}
        className={s.option}
        value={optionItem.value}
      >
        {optionItem.content}
      </option>
    ));
  }, [options]);
  const onChangeHandler = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    onChange?.(e.target.value);
  };
  return (
    <>
      {label && (
        <span
          style={{ width: "100px" }}
          className={s.label}
        >
          {label}
        </span>
      )}
      <select
        {...otherProps}
        disabled={readOnly}
        className={classNames(
          s.select,
          { [s.readOnly]: readOnly },
          [className]
        )}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </>
  );
});
