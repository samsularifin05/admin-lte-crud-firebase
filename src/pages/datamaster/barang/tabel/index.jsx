import {
  React,
  Button,
  TabelMaster,
  Row,
  Col,
  useEffect,
  useDispatch,
  useSelector,
  ModalGlobal
} from "components";
import { actionMaster, selectorMaster, utilityAction } from "reduxStore";
import { handleDelete, handleSubmit } from "../redux";
import FormDataBarang from "../form";
const TabelBarang = (props) => {
  const dispatch = useDispatch();
  const databarang = useSelector(selectorMaster.databarang);

  useEffect(() => {
    dispatch(actionMaster.getDataBarang());
  }, [dispatch]);

  const columns = [
    {
      title: "Kode Barang",
      dataIndex: "kode_barang",
      key: "kode_barang"
    },
    {
      title: "Nama Barang",
      dataIndex: "nama_barang",
      key: "nama_barang"
    },
    {
      title: "Harga Jual",
      dataIndex: "harga_jual",
      key: "harga_jual"
    },
    {
      title: "Haraga Reseller",
      dataIndex: "harga_reseller",
      key: "harga_reseller"
    },
    {
      title: "Foto",
      dataIndex: "foto",
      key: "foto"
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      hidden :true,
      render: (cell, row) => {
        return (
          <Row className={`text-center`} >
            <Col size="12" className="mr-3 text-center">
              <Button
                type="button"
                color="danger"
                onClick={() => dispatch(handleDelete(row.id))}
                icon="fa-trash"
              />{" "}
              &nbsp;
              <Button
                type="button"
                color="info"
                icon="fa-edit"
                onClick={() =>
                  dispatch(
                    utilityAction.modalShow({
                      isModalShow: true,
                      isEdit: true,
                      data: row
                    })
                  )
                }
              />
            </Col>
          </Row>
        );
      }
    }
  ];

  return (
    <>
      <TabelMaster
        createData={true}
        rowKey="id"
        columns={columns}
        dataSource={databarang}
      />
      <ModalGlobal title={props.isEdit ? "Edit Data" : "Tambah Data"}>
        <FormDataBarang onSubmit={(data) => dispatch(handleSubmit(data))} />
      </ModalGlobal>
    </>
  );
};

export default TabelBarang;
