import i18nforTests from "@/shared/config/i18n/i18nforTests";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

export function renderWithTranslation(
  component: ReactNode
) {
  render(
    <I18nextProvider i18n={i18nforTests}>
      {component}
    </I18nextProvider>
  );
}
