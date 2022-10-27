//Mendaftarkan reducer / Menggabungkan
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import master from "./master_reducer";
import themes from "./theme_reducer";
import utility from "./utility_reduce";
export default combineReducers({
  themes : themes,
  utility: utility,
  master: master,
  form: formReducer
});
