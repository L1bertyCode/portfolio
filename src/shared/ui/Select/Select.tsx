import { SelectHTMLAttributes, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Select.module.scss";

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  name?: string;
  options: string[];
  readOnly?: boolean;
  label?: string;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    options,
    name,
    readOnly = true,
    label,
    ...otherProps
  } = props;
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
        disabled={readOnly}
        name={name}
        className={classNames(
          s.select,
          { [s.readOnly]: readOnly },
          [className]
        )}
      >
        {options?.map((option, key) => (
          <option className={s.option} value={option + key}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
});
