// import { utilityAction } from "reduxStore";
import { reset, ToastNotification } from "components";
import { db, storage } from "config/firebase";
import {
  collection,
  deleteDoc,
  Timestamp,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import {  utilityAction } from "reduxStore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const handleSubmit = (data) => {
  return async (dispatch, getState) => {
    let state = getState();

    const storageRef = ref(storage, `files/test.jpg`);
    const uploadTask =  uploadBytesResumable(storageRef, data.foto);
    // https://blog.logrocket.com/firebase-cloud-storage-firebase-v9-react/
    let url = ''
    uploadTask.on("state_changed",
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log(downloadURL)
          url = downloadURL
          // setImgUrl(downloadURL)
        });
      }
    );
    if (state.utility.modalShow.isEdit) {
      const taskDocRef = doc(db, "barang", data.id);
      try {
        dispatch(utilityAction.modalHide());
        ToastNotification("success", "Data Berhasil Di Update");
        await updateDoc(taskDocRef, {
          kode_kategori: data.kode_kategori,
          nama_barang: data.nama_barang,
          harga_jual: data.harga_jual,
          harga_reseller: data.harga_reseller,
        });
        dispatch(reset('ModalFormDataKategori'))
      } catch (err) {
        ToastNotification("info", "Data Gagal Tersimpan");
      }
    } else {
      try {
        let cekData = state.master.datakategori.findIndex((list)=> list.kode_barang === data.kode_barang) === -1 ? true : false
        if(cekData){
          dispatch(utilityAction.modalHide());
          ToastNotification("success", "Data Tersimpan");
          await addDoc(collection(db, "barang"), {
            kode_barang: data.kode_barang,
            kode_kategori: data.kode_kategori,
            nama_barang: data.nama_barang,
            harga_jual: data.harga_jual,
            harga_reseller: data.harga_reseller,
            foto : url,
            created: Timestamp.now()
          });
          dispatch(reset('ModalFormDataKategori'))
        }else{
          ToastNotification('info',`Kode Barang <b>${data.kode_barang}</b> sudah terdaftar`)
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
    const taskDocRef = doc(db, "barang", id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };
};

export { handleSubmit, handleDelete };
