import React, { useEffect } from "react";
import sendNews from "../../../assets/images/P1.jpg";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./whatsnews.css";
import { useContext } from "react";
import { HomeContext } from "../../../context/context";
import Loader from "../../Loading/Loader";
import moment from "jalali-moment";
const WhatsNews = () => {
  const { category, loadingCatPost, news, LoadCatPost } =
    useContext(HomeContext);
  const cat = useLocation().search;
  useEffect(() => {
    LoadCatPost();
  }, [cat]);
  console.log(news);
  return (
    <div id="whats-news" className="py-5">
      <div className="container">
        <div className="columns is-flex-widescreen is-block-tablet">
          <div className="column is-flex is-one-quarter-widescreen is-justify-content-center">
            <img src={sendNews} className="sendnews" alt="" />
          </div>
          <div className="column is-three-quarters-widescreen is-justify-content-center">
            <div className="whats-news has-background-white p-5">
              <div className="whats-news-title is-flex is-justify-content-space-between is-align-items-center">
                <div className="whats-news-nav">
                  <ul className="is-flex">
                    <li className="ml-5 has-text-weight-bold">
                      <NavLink to="/">همه</NavLink>
                    </li>
                    {category &&
                      category?.map((cat) => {
                        return (
                          <li
                            className="ml-5 has-text-weight-bold"
                            key={cat.id}
                          >
                            <NavLink to={`/?cat=${cat.id}`}>{cat.name}</NavLink>
                          </li>
                        );
                      })}
                  </ul>
                </div>

                <div className="whats-news-name">
                  <h1 className="is-size-2 title"></h1>
                </div>
              </div>

              {loadingCatPost ? (
                <div className="has-text-centered">
                  <Loader />
                </div>
              ) : (
                <div className="whats-news-post mt-6">
                  {news &&
                    news?.slice(-4).map((post) => {
                      return (
                        <div className="whats-news-post-item" key={post.id}>
                          <div className="whats-news-post-item-img">
                            <Link state={post} to={`/detail/${post.id}`}>
                              <img src={post.url} alt="" />
                            </Link>
                          </div>
                          <div className="whats-news-post-item-description">
                            <div className="whats-news-post-item-title">
                              <h2>
                                <Link state={post} to={`/detail/${post.id}`}>
                                  <p>{post.title}</p>
                                </Link>
                              </h2>
                            </div>
                            <Link state={post} to={`/detail/${post.id}`}>
                              <p>{post.desc}</p>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNews;
