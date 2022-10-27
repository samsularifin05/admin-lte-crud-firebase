import { Card, PanelContent, React } from "components";
import TabelBarang from "./tabel";
const DataBarang = () => {
  return (
    <PanelContent
      title="Master DataBarang"
      menu="Data Master"
      submenu="DataBarang"
      headerContent
    >
      <Card title="Data DataBarang">
        <TabelBarang />
      </Card>
    </PanelContent>
  );
};

export default DataBarang;
