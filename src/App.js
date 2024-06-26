import Login from "./admin/auth/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./admin/dashboard/Dashboard";
import ViewNews from "./admin/dashboard/components/news/ViewNews";
import AddNews from "./admin/dashboard/components/news/AddNews";
import { ToastContainer } from "react-toastify";
import Main from "./admin/dashboard/components/main/Main";
import EditNews from "./admin/dashboard/components/news/EditNews";
import ViewCategory from "./admin/dashboard/components/category/ViewCategory";
import AddCategory from "./admin/dashboard/components/category/AddCategory";
import EditCategory from "./admin/dashboard/components/category/EditCategory";
import ViewVideo from "./admin/dashboard/components/video/ViewVideo";
import AddVideo from "./admin/dashboard/components/video/AddVideo";
import ViewUsers from "./admin/dashboard/components/users/ViewUsers";
import AddUsers from "./admin/dashboard/components/users/AddUsers";
import EditUsers from "./admin/dashboard/components/users/EditUsers";
import ProfileUpdate from "./admin/dashboard/components/users/ProfileUpdate";
import HomeScreen from "./pages/HomeScreen";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./components/Products/products"
import Detail from "./pages/Detail";
import ViewComment from "./admin/dashboard/components/comment/ViewComment";
import { useContext } from "react";
import { AuthContext } from "./admin/context/context";
import NotView from "./components/NotLogin/NotView";
import Admin from "./admin/authCheck/Admin";
function App() {
  const { userId } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/administrator" element={<Login />} />

        {userId && (
          <>
            <Route path="/dashboard" element={<Main />} />
            <Route path="/add-product" element={<AddNews />} />
            <Route path="/view-product" element={<ViewNews />} />
            <Route path="/edit-product/:id" element={<EditNews />} />

            <Route element={<Admin />}>
              <Route path="/view-category" element={<ViewCategory />} />
              <Route path="/add-category" element={<AddCategory />} />
              <Route path="/update-category/:id" element={<EditCategory />} />

              <Route path="/view-video" element={<ViewVideo />} />
              <Route path="/add-video" element={<AddVideo />} />

              <Route path="/view-users" element={<ViewUsers />} />
              <Route path="/add-user" element={<AddUsers />} />
              <Route path="/edit-user/:id" element={<EditUsers />} />
            </Route>

            <Route path="/update-profile/:id" element={<ProfileUpdate />} />
            <Route path="/comment" element={<ViewComment />} />
          </>
        )}

        <Route path="*" element={<NotView />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
