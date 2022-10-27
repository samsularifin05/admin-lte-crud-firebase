// import { utilityAction } from "reduxStore";
import { reset, ToastNotification } from "components";
import { db } from "config/firebase";
import {
  collection,
  deleteDoc,
  Timestamp,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import {  utilityAction } from "reduxStore";

const handleSubmit = (data) => {
  return async (dispatch, getState) => {
    let state = getState();

    if (state.utility.modalShow.isEdit) {
      const taskDocRef = doc(db, "kategori", data.id);
      try {
        dispatch(utilityAction.modalHide());
        ToastNotification("success", "Data Berhasil Di Update");
        await updateDoc(taskDocRef, {
          nama_kategori: data.nama_kategori,
        });
        dispatch(reset('ModalFormDataKategori'))
      } catch (err) {
        ToastNotification("info", "Data Gagal Tersimpan");
      }
    } else {
      try {
        let cekData = state.master.datakategori.findIndex((list)=> list.kode_kategori === data.kode_kategori) === -1 ? true : false
        if(cekData){
          dispatch(utilityAction.modalHide());
          ToastNotification("success", "Data Tersimpan");
          await addDoc(collection(db, "kategori"), {
            kode_kategori: data.kode_kategori,
            nama_kategori: data.nama_kategori,
            created: Timestamp.now()
          });
          dispatch(reset('ModalFormDataKategori'))
        }else{
          ToastNotification('info',`Kode Kategori <b>${data.kode_kategori}</b> sudah terdaftar`)
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
    const taskDocRef = doc(db, "kategori", id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };
};

export { handleSubmit, handleDelete };
