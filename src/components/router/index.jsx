import { Dashboard, Kategori, Login,DataUser, DataBarang } from "pages";

const MenuRoutes = [
  {
    path: "/",
    exact: true,
    title: "Login",
    component: () => <Login />
  },
  {
    path: "/dashboard",
    exact: true,
    title: "Dashboard",
    component: () => <Dashboard />
  },
  {
    path: "/master-kategori",
    exact: true,
    title: "Master Kategori",
    component: () => <Kategori />
  },
  {
    path: "/master-user",
    exact: true,
    title: "Master User",
    component: () => <DataUser />
  },
  {
    path: "/master-barang",
    exact: true,
    title: "Master Barang",
    component: () => <DataBarang />
  },


 
];

export default MenuRoutes;
