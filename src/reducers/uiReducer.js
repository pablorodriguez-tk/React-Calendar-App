import { types } from "../types/types";

const initialState = {
  modelOpend: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
      };

    case types.uiCloseModal:
      return {};

    default:
      return state;
  }
};
