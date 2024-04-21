import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../admin/context/context";
import { HomeContext } from "../../context/context";
import moment from "jalali-moment";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import "./products.css";

const CombinedComponent = () => {
  const { getCategory, category } = useContext(AuthContext);
  const { loadingCatPost, news, LoadCatPost } = useContext(HomeContext);
  const cat = useLocation().search;
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getCategory();
    LoadCatPost();
  }, []);

  const handleCategoryClick = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  const handleResetFilter = () => {
    setSelectedCategory(null);
  };

  return (
    <div>
      <Navbar />
      {category && (
        <div className="filter">
          <button onClick={handleResetFilter}>همه</button>
          {category.map((cat) => (
            <button key={cat.id} onClick={() => handleCategoryClick(cat.id)}>
              {cat.name}
            </button>
          ))}
        </div>
      )}

      <div className="is-flex is-justify-content-center">
        <div className="products">
          {news &&
            news
              .filter((post) =>
                selectedCategory ? post.catId === selectedCategory : true
              )
              .map((post) => (
                <div className="product" key={post.id}>
                  <div className="">
                    <Link state={post} to={`/detail/${post.id}`}>
                      <img src={post.url} alt="" />
                    </Link>
                  </div>
                  <div className="">
                    <Link state={post} to={`/detail/${post.id}`}>
                      <h2>{post.title}</h2>
                      <p>{post.desc}</p>
                    </Link>
                    {/* <div className="">
                      <p>
                        {moment(post.createdAt)
                          .locale("fs")
                          .format("YYYY-MM-DD")}
                      </p>
                    </div> */}
                  </div>
                </div>
              ))}
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default CombinedComponent;
