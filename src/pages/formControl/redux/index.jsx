// import { utilityAction } from "reduxStore";
import { db } from "config/firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  Timestamp,
  doc,
  updateDoc
} from "firebase/firestore";
const handleSubmit = (data) => {
  return async (dispatch, getState) => {
    try {
      await addDoc(collection(db, "tasks"), {
        username: data.username,
        level: data.level.value,
        password: data.password,
        created: Timestamp.now(),
      });
      alert("data tersimpan");
    } catch (err) {
      console.log(err);
    }
  };
};

const handleUpdate = (id) => {
  return async (dispatch, getState) => {
    const taskDocRef = doc(db, "tasks", id);
    try {
      await updateDoc(taskDocRef, {
        username: "ini edit",
        level: "edit coy"
      });
    } catch (err) {
      alert(err);
    }
  };
};

const handleDelete = (id) => {
  return async (dispatch, getState) => {
    const taskDocRef = doc(db, "tasks", id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };
};

export { handleSubmit, handleUpdate, handleDelete };
