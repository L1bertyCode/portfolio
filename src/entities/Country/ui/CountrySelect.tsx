import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Select } from "@/shared/ui/Select/Select";
import { Country } from "../model/types/country";

interface CountrySelectProps {
  className?: string;
  readOnly?: boolean;
  value?: string;
  onChange?: (
    value?: (typeof Country)[keyof typeof Country]
  ) => void;
}
const options = [
  {
    value: Country.Canada,
    content: Country.Canada,
  },
  {
    value: Country.USA,
    content: Country.USA,
  },
  {
    value: Country.Russia,
    content: Country.Russia,
  },
  {
    value: Country.Ukraine,
    content: Country.Ukraine,
  },
  {
    value: Country.German,
    content: Country.German,
  },
];
export const CountrySelect = memo(
  (props: CountrySelectProps) => {
    const {
      className,
      readOnly = true,
      value,
      onChange,
    } = props;
    const { t } = useTranslation();
    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(
          value as (typeof Country)[keyof typeof Country]
        );
      },
      [onChange]
    );
    return (
      <Select
        className={classNames("", {}, [className])}
        label={t("Country")}
        options={options}
        readOnly={readOnly}
        value={value}
        onChange={onChangeHandler}
      />
    );
  }
);
