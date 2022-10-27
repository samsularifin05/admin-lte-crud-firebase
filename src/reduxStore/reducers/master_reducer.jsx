import { GET_DATA_BARANG, GET_DATA_KATEGORI, GET_DATA_USER } from "reduxStore/actions/master_action";

const initialState = {
    datausers: [],
    datakategori: [],
    databarang: [],
  };
  const master = (state = initialState, actions) => {
    switch (actions.type) {
        case GET_DATA_BARANG:
          return {
            ...state,
            databarang: actions.payload.data,
          };
        case GET_DATA_KATEGORI:
          return {
            ...state,
            datakategori: actions.payload.data,
          };
        case GET_DATA_USER:
          return {
            ...state,
            datausers: actions.payload.data,
          };
         
        default:
          return state;
      }
  }

export default master;
