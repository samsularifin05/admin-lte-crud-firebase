const datausers = (state) => state.master.datausers
const datakategori = (state) => state.master.datakategori
const databarang = (state) => state.master.databarang


const selectorMaster = {
    datausers,
    datakategori,
    databarang
}

export {
    selectorMaster
}