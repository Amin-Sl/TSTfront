import React from "react";
import { Link } from "react-router-dom";
import popularImg from "../../../assets/images/1.jpeg";
import { BsEye } from "react-icons/bs";
import travel from "../../../assets/images/P4.jpg";
import "./popular.css";
import { useContext } from "react";
import { HomeContext } from "../../../context/context";
import Loader from "../../Loading/Loader";
import moment from "jalali-moment"
const PopularNews = () => {
  const { loadingPopular, popularNews } = useContext(HomeContext);
  return (
    <div className="container mt-6">
      <div className="columns">
        {loadingPopular ? (
          <div className="column is-four-fifths has-background-white p-4 has-text-centered">
            <Loader />
          </div>
        ) : (
          <div className="column is-four-fifths has-background-white p-4">
            <div className="popular mb-5">
              <h1>  پرفروش ترین ها</h1>
            </div>
            <div className="columns">
              {popularNews &&
                popularNews?.map((news) => {
                  return (
                    <div className="column popular-news" key={news.id}>
                      <div className="popular-img is-relative">
                        <Link to={`/detail/${news.id}`} state={news}>
                          <img
                            src={news.url}
                            className="is-fullwidth popular-image"
                            alt=""
                          />
                        </Link>
                        {/* <div className="num-views">
                          <span>
                            <BsEye />
                            {news.numViews}
                          </span>
                        </div> */}
                      </div>
                      <div className="popular-title">
                        <h4 className="is-flex has-text-weight-bold is-size-8">
                          <Link to={`/detail/${news.id}`} state={news}>{news.title}</Link>
                        </h4>
                      </div>
                      <div className="author mt-4">
                        <span className="is-size-6 has-text-grey ml-2">
                        </span>
                        <span className="is-size-6 has-text-grey mr-2">
                          {/* {news?.user?.name} */}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        <div className="travel column is-one-fifth has-text-centered">
          <img src={travel} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PopularNews;
