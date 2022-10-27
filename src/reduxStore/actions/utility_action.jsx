export const ISLOADING = "ISLOADING";
export const PROGRES = "PROGRES";
export const OPEN_MODAL = "OPEN_MODAL";

const modalShow = (data) => {
  return (dispatch) => {
    dispatch({
      type: OPEN_MODAL,
      payload: {
        isModalShow : data.isModalShow,
        isEdit : data.isEdit,
        data : data.data
      }
    });
  };
};

const modalHide = (data) => {
  return (dispatch) => {
    dispatch({
      type: OPEN_MODAL,
      payload: {
        isModalShow : false,
        isEdit : false,
        data : []
      }
    });
  };
};
const setLoading = (status) => {
  return (dispatch) => {
    dispatch({
      type: ISLOADING,
      payload: {
        content:
          status === "content" ? true : status === undefined ? true : false,
        button:
          status === "button" ? true : status === undefined ? true : false,
        tabel: status === "table" ? true : status === undefined ? true : false
      }
    });
  };
};
const setProgres = (data) => {
  return (dispatch) => {
    let i = 0;
    if (i === 0) {
      i = 1;
      let width = 1;
      let id = setInterval(frame, 30);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          document.body.style.cursor = "initial";
        } else {
          document.body.style.cursor = "wait";
          width++;
          dispatch({
            type: PROGRES,
            payload: width
          });
        }
      }
    }
  };
};
const stopLoading = () => {
  return (dispatch) => {
    dispatch({
      type: ISLOADING,
      payload: {
        content: false,
        button: false,
        tabel: false
      }
    });
  };
};

const utilityAction = {
  setLoading,
  setProgres,
  modalShow,
  modalHide,
  stopLoading
};

export { utilityAction };
