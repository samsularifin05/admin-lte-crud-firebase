import {
  Button,
  HiiddenFiled,
  ReanderField,
  connect,
  Field,
  reduxForm,
} from "components";
import React from "react";
import Validate from "../validate";

let FormDataKategori = (props) => {
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
              name="kode_kategori"
              component={ReanderField}
              label="Kode Kategori"
              type="text"
              readOnly={props.isEdit}
              placeholder="Masukkan Kode Kategori"
            />
          </div>
         <div className="col-lg-6">
            <Field
              name="nama_kategori"
              component={ReanderField}
              label="Nama Kategori"
              type="text"
              placeholder="Masukkan Nama Kategori"
            />
          </div>

        <div className={`col-lg-12} text-right mt-2 btn-block`}>
          &nbsp;
          <Button title="Simpan" color="primary" block />
        </div>
      </div>
    </form>
  );
};

FormDataKategori = reduxForm({
  form: "ModalFormDataKategori",
  enableReinitialize: true,
  validate : Validate
})(FormDataKategori);
export default connect((state) => {
  if (state?.utility?.modalShow?.isEdit === true) {
    return {
      isEdit: state?.utility?.modalShow?.isEdit,
      initialValues: {
        kode_kategori: state?.utility?.modalShow?.data?.kode_kategori,
        nama_kategori: state?.utility?.modalShow?.data?.nama_kategori,
        id: state?.utility?.modalShow?.data?.id,
      }
    };
  } else {
    return {
      isEdit: false
    };
  }
})(FormDataKategori);
