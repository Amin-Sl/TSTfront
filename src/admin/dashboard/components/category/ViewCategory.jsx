import React from "react";
import Dashboard from "../../Dashboard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/context";
import { useEffect } from "react";

const ViewCategory = () => {
  const { getCategory, category,deleteCategory } = useContext(AuthContext);

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <Dashboard>
      <div className="is-flex is-justify-content-end">
        <Link to="/add-category" className="button px-6 is-success mb-6">
          افزودن دسته بندی
        </Link>
      </div>

      <table className="viewCats table is-fullwidth">
        <thead className="is-fullwidth">
          <tr>
            <th className="is-color-white">شماره</th>
            <th className="is-color-white">نام</th>
            <th className="is-color-white">ویرایش</th>
            <th className="is-color-white">حذف</th>
          </tr>
        </thead>

        <tbody>
          {category &&
            category.map((cat, index) => {
              return (
                <tr  key={cat.id}>
                  <td>{index + 1}</td>
                  <td>{cat.name}</td>
                  <td>
                    <Link
                      state={cat}
                      to={`/update-category/${cat.id}`}
                      className="button is-info"
                    >
                      ویرایش
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteCategory(cat.id)}
                      className="button is-danger"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Dashboard>
  );
};

export default ViewCategory;
