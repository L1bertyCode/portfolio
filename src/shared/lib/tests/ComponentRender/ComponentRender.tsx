import {
  StateSchema,
  StoreProvider,
} from "@/app/providers/StoreProvider";
import i18nforTests from "@/shared/config/i18n/i18nforTests";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
export interface ComponentRenderProps {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}
export function ComponentRender(
  component: ReactNode,
  options?: ComponentRenderProps
) {
  const { route = "/", initialState = {} } =
    options as ComponentRenderProps;
  render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nforTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
}
