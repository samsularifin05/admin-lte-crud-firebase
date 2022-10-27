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
import FormDataKategori from "../form";
const TabelKategori = (props) => {
  const dispatch = useDispatch();
  const datakategori = useSelector(selectorMaster.datakategori);

  useEffect(() => {
    dispatch(actionMaster.getDataKategori());
  }, [dispatch]);

  const columns = [
    {
      title: "Kode Kategori",
      dataIndex: "kode_kategori",
      key: "kode_kategori"
    },
    {
      title: "Nama Kategori",
      dataIndex: "nama_kategori",
      key: "nama_kategori"
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
        dataSource={datakategori}
      />
      <ModalGlobal title={props.isEdit ? "Edit Data" : "Tambah Data"}>
        <FormDataKategori onSubmit={(data) => dispatch(handleSubmit(data))} />
      </ModalGlobal>
    </>
  );
};

export default TabelKategori;
