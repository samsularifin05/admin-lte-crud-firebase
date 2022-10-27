import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "config/firebase";
import { utilityAction } from "./utility_action";

export const GET_DATA_USER = "GET_DATA_USER";
export const GET_DATA_KATEGORI = "GET_DATA_KATEGORI";
export const GET_DATA_BARANG = "GET_DATA_BARANG";

const getDataBarang = () => {
  return (dispatch) => {
    dispatch(utilityAction.setLoading("table"));
    const q = query(collection(db, "barang"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      let finalResult = querySnapshot.docs.map((doc) => {
        return Object.assign(doc.data(), { id: doc.id });
      });
      dispatch(utilityAction.stopLoading());

      dispatch({
        type: GET_DATA_BARANG,
        payload: {
          data: finalResult
        }
      });
    });
  };
};
const getDataUser = () => {
  return (dispatch) => {
    dispatch(utilityAction.setLoading("table"));
    const q = query(collection(db, "users"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      let finalResult = querySnapshot.docs.map((doc) => {
        return Object.assign(doc.data(), { id: doc.id });
      });
      dispatch(utilityAction.stopLoading());

      dispatch({
        type: GET_DATA_USER,
        payload: {
          data: finalResult
        }
      });
    });
  };
};
const getDataKategori = () => {
  return (dispatch) => {
    dispatch(utilityAction.setLoading("table"));
    const q = query(collection(db, "kategori"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      let finalResult = querySnapshot.docs.map((doc) => {
        return Object.assign(doc.data(), { id: doc.id });
      });
      dispatch(utilityAction.stopLoading());
      dispatch({
        type: GET_DATA_KATEGORI,
        payload: {
          data: finalResult
        }
      });
    });
  };
};

// export { getDataUser };

const actionMaster = {
  getDataUser,
  getDataKategori,
  getDataBarang
};
export { actionMaster };
