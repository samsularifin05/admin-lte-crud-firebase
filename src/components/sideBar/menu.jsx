const menu = [
  {
    path: "/dashboard",
    icon: "nav-icon fas fa-tachometer-alt",
    title: "Dashboard",
  },
  {
    path: "#",
    icon: "nav-icon fas fa-database",
    title: "Data Master",
    children: [
      {
        path: "/master-user",
        title: "Data User",
        is_show: false,
      },
      {
        path: "/master-kategori",
        title: "Data Kategori",
        is_show: false,
      },
     
      {
        path: "/master-barang",
        title: "Data Barang",
        is_show: false,
      },
     
    ]
  },

];
export default menu;
