import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import { createSelector } from "@reduxjs/toolkit";

export const getCounter = (state: StateSchema) =>
  state.counter;
