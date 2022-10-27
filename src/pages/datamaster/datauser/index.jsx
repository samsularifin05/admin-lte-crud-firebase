import { Card, PanelContent, React } from "components";
import TabelUsers from "./tabel";
const DataUser = () => {
  return (
    <PanelContent
      title="Master DataUser"
      menu="Data Master"
      submenu="DataUser"
      headerContent
    >
      <Card title="Data DataUser">
        <TabelUsers />
      </Card>
    </PanelContent>
  );
};

export default DataUser;
