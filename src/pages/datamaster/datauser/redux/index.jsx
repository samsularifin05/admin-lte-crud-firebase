// import { utilityAction } from "reduxStore";
import { reset, ToastNotification } from "components";
import { doEncrypt } from "components/helper/Encrypt";
import { db } from "config/firebase";
import {
  collection,
  deleteDoc,
  Timestamp,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { actionMaster, utilityAction } from "reduxStore";

const handleSubmit = (data) => {
  return async (dispatch, getState) => {
    let state = getState();

    if (state.utility.modalShow.isEdit) {
      const taskDocRef = doc(db, "users", data.id);
      try {
        dispatch(utilityAction.modalHide());
        ToastNotification("success", "Data Berhasil Di Update");
        await updateDoc(taskDocRef, {
          username: data.username,
          nama_lengkap: data.nama_lengkap,
          level: data.level
        });
        dispatch(reset('ModalFormDataUser'))
      } catch (err) {
        ToastNotification("info", "Data Gagal Tersimpan");
      }
    } else {
      try {
        let cekData = state.master.datausers.findIndex((list)=> list.username === data.username) === -1 ? true : false
        if(cekData){
          dispatch(utilityAction.modalHide());
          ToastNotification("success", "Data Tersimpan");
          await addDoc(collection(db, "users"), {
            username: data.username,
            nama_lengkap: data.nama_lengkap,
            level: data.level,
            password: doEncrypt(data.password),
            created: Timestamp.now()
          });
          dispatch(reset('ModalFormDataUser'))
        }else{
          ToastNotification('info',`Username <b>${data.username}</b> sudah terdaftar`)
          return false
        }
      } catch (err) {
        console.log(err);
        ToastNotification("info", "Data Gagal Tersimpan");
      }
    }
  };
};

const handleDelete = (id) => {
  return async (dispatch, getState) => {
    const taskDocRef = doc(db, "users", id);
    try {
      await deleteDoc(taskDocRef);
      dispatch(actionMaster.getDataUser());
    } catch (err) {
      alert(err);
    }
  };
};

export { handleSubmit, handleDelete };
