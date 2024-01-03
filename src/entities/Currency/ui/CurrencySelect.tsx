import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import { Select } from "@/shared/ui/Select/Select";
import { Currency } from "../model/types/currency";

interface CurrencyProps {
  className?: string;
  readOnly?: boolean;
  value?: string;
  onChange?: (
    value: (typeof Currency)[keyof typeof Currency]
  ) => void;
}
const options = [
  {
    value: Currency.EUR,
    content: Currency.EUR,
  },
  {
    value: Currency.RUB,
    content: Currency.RUB,
  },
  {
    value: Currency.USD,
    content: Currency.USD,
  },
];
export const CurrencySelect = memo(
  (props: CurrencyProps) => {
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
          value as (typeof Currency)[keyof typeof Currency]
        );
      },
      [onChange]
    );
    return (
      <Select
        className={classNames("", {}, [className])}
        label={t("Currency")}
        options={options}
        readOnly={readOnly}
        value={value}
        onChange={onChangeHandler}
      />
    );
  }
);
