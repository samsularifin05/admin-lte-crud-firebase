import {
  Button,
  HiiddenFiled,
  ReanderField,
  connect,
  Field,
  reduxForm,
  ReanderSelect,
  useDispatch,
  useSelector,
  FileInput
} from "components";
import React from "react";
import { useEffect } from "react";
import { actionMaster, selectorMaster } from "reduxStore";
import Validate from "../validate";

let FormDataBarang = (props) => {
  const dispatch = useDispatch();
  const datakategori = useSelector(selectorMaster.datakategori);

  useEffect(() => {
    dispatch(actionMaster.getDataKategori());
  }, [dispatch]);
  return (
    <form onSubmit={props.handleSubmit} autoComplete="off">
      <div className="row">
        {props.isEdit && (
          <Field
            name="id"
            readOnly={props.isEdit}
            component={HiiddenFiled}
            type="hidden"
          />
        )}
         <div className="col-lg-6">
          <Field
            name="kode_barang"
            component={ReanderField}
            label="Kode Barang"
            type="text"
            readOnly={props.isEdit}
            placeholder="Masukkan Kode Barang"
          />
        </div>
        <div className="col-lg-6">
          <Field
            name="kode_kategori"
            component={ReanderSelect}
            options={datakategori.map((list) => {
              return {
                value: list.kode_kategori,
                label: list.nama_kategori
              };
            })}
            label="Kategori"
            type="text"
            placeholder="Masukkan Kategori"
          />
        </div>
       
        <div className="col-lg-6">
          <Field
            name="nama_barang"
            component={ReanderField}
            label="Nama Barang"
            type="text"
            placeholder="Masukkan Nama Barang"
          />
        </div>
        <div className="col-lg-6">
          <Field
            name="harga_jual"
            component={ReanderField}
            label="Harga Jual"
            type="text"
            placeholder="Masukkan Harga Jual"
          />
        </div>
        <div className="col-lg-6">
          <Field
            name="harga_reseller"
            component={ReanderField}
            label="Harga Reseller"
            type="text"
            placeholder="Masukkan Harga Reseller"
          />
        </div>
        <div className="col-lg-6">
          <Field
            name="foto"
            component={FileInput}
            label="Foto"
            placeholder="Masukkan Foto"
          />
        </div>

        <div
          className={`col-lg-${
            props.isEdit ? "6" : "12"
          } text-right mt-2 btn-block`}
        >
          &nbsp;
          <Button title="Simpan" color="primary" block />
        </div>
      </div>
    </form>
  );
};

FormDataBarang = reduxForm({
  form: "ModalFormDataBarang",
  enableReinitialize: true,
  validate: Validate
})(FormDataBarang);
export default connect((state) => {
  if (state?.utility?.modalShow?.isEdit === true) {
    return {
      isEdit: state?.utility?.modalShow?.isEdit,
      initialValues: {
        username: state?.utility?.modalShow?.data?.username,
        nama_lengkap: state?.utility?.modalShow?.data?.nama_lengkap,
        level: state?.utility?.modalShow?.data?.level,
        id: state?.utility?.modalShow?.data?.id
      }
    };
  } else {
    return {
      isEdit: false
    };
  }
})(FormDataBarang);
