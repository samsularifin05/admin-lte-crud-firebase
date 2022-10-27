import {
  Content,
  Header,
  Sidebar,
  Footer,
  React,
  useSelector,
  LoadingContent,
  getItem
} from "components";
import { Redirect } from "react-router-dom";
import { selectorThemes, selectorUtility } from "reduxStore";
const App = () => {
  const content = useSelector(selectorThemes.handleSetContent);
  const header = useSelector(selectorThemes.handleSetPageHeader);
  const sidebar = useSelector(selectorThemes.handleSetPageSidebar);
  const footer = useSelector(selectorThemes.handleSetFooter);
  const loading = useSelector(selectorUtility.loading);

  
  const isAuthenticated = getItem("userdata");
  return isAuthenticated.length === 0 ? (
    <div>
      {localStorage.clear()}
        <Redirect to="/" />
      {content && <Content />}
      {loading.content && <LoadingContent />}
    </div>
  ) : (
    <div>
      {header && <Header />}
      {sidebar && <Sidebar />}
      {content && <Content />}
      {footer && <Footer />}
      {loading.content && <LoadingContent />}
    </div>
  );
};

export default App;
