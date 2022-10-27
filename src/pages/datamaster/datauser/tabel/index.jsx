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
import FormDataUser from "../form";
const TabelUsers = (props) => {
  const dispatch = useDispatch();
  const datausers = useSelector(selectorMaster.datausers);

  useEffect(() => {
    dispatch(actionMaster.getDataUser());
  }, [dispatch]);

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username"
    },
    {
      title: "Nama Lengkap",
      dataIndex: "nama_lengkap",
      key: "nama_lengkap"
    },
    {
      title: "Level",
      dataIndex: "level.label",
      key: "level.label",
      render: (cell, row) => {
        return row?.level?.label || "-";
      }
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      hidden :true,
      render: (cell, row) => {
        return (
          <Row className={`text-center ${row.level.value === "SUPERUSERADMIN" ? "d-none" : "d-block"}`} >
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
        dataSource={datausers}
      />
      <ModalGlobal title={props.isEdit ? "Edit Data" : "Tambah Data"}>
        <FormDataUser onSubmit={(data) => dispatch(handleSubmit(data))} />
      </ModalGlobal>
    </>
  );
};

export default TabelUsers;
