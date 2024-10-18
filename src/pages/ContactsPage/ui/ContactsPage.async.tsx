import { lazy } from "react";

export const ContactsPageAsync = lazy(() => new Promise((res, rej) => {
  //@ts-ignore
  setTimeout(() => res(import("./ContactsPage")), 1500);
}));