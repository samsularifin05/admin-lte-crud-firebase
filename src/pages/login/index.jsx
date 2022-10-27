import {
  React,
  ToastNotification,
  useDispatch,
  useEffect,
  useSelector,
  doDecrypt,
  setItem
} from "components";
import {
  actionMaster,
  actionTheme,
  selectorMaster,
  utilityAction
} from "reduxStore";
import { withRouter } from "react-router-dom";
import FormLogin from "./form";

const Login = (props) => {
  const dispatch = useDispatch();
  const datausers = useSelector(selectorMaster.datausers);

  useEffect(() => {
    dispatch(actionMaster.getDataUser());
    dispatch(actionTheme.handleSetPageSidebar(false));
    dispatch(actionTheme.handleSetFooter(false));
    dispatch(actionTheme.handleSetPageHeader(false));
    return () => {
      dispatch(actionTheme.handleSetPageHeader(true));
      dispatch(actionTheme.handleSetPageSidebar(true));
      dispatch(actionTheme.handleSetFooter(true));
      dispatch(actionTheme.handleSetPageHeader(true));
    };
  }, [dispatch]);

  const handleSubmit = (data) => {
    dispatch(utilityAction.setProgres());
    dispatch(utilityAction.setLoading("content"));
    let result = datausers.find((list) => list.username === data.username);
    if (result === undefined) {
      ToastNotification("info", "Username Dan Passowrd Salah");
      dispatch(utilityAction.stopLoading());
      return false;
    }
    if (result) {
      if (doDecrypt(result.password) !== data.password) {
        ToastNotification("info", "Password Salah");
        dispatch(utilityAction.stopLoading());
        return false;
      } else {
        setTimeout(() => {
          setItem("userdata", {
            username : result.username,
            nama_lengkap : result.nama_lengkap,
            level : result.level,
          });
          dispatch(utilityAction.stopLoading());
          props.history.push("/dashboard");
          window.location.reload();
        }, 4000);
      }
    }
  };
  return (
    <div className="login-box container" style={{ marginTop: "10%" }}>
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <div className="h1">
            <b>Admin</b>LTE
          </div>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <FormLogin onSubmit={(data) => handleSubmit(data)} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
