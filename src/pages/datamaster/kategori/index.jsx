import { Card, PanelContent, React } from "components";
import TabelKategori from "./tabel";
const Kategori = () => {
  return (
    <PanelContent
      title="Master Kategori"
      menu="Data Master"
      submenu="Kategori"
      headerContent
    >
      <Card title="Data kategori">
        <TabelKategori />
      </Card>
    </PanelContent>
  );
};

export default Kategori;
