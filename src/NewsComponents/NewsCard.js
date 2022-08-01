import React from "react";
import "./NewsCard.css"

const NewsCard = ({ newsData }) => {
  return (
    <>
      {newsData.map((item, index) => {
        return (
          <div key={index} className="newscard_wrapper">
            <div className="newsimg">
              <img
                src={
                  item.urlToImage
                    ? item.urlToImage
                    : "https://bitsofco.de/content/images/2018/12/broken-1.png"
                }
                alt=""
              />
            </div>
            <div className="newstext">
              <div className="news_headline">
                <p>{item.title}</p>
              </div>
              <div className="news_credential">
                <span>Short by {item.author ? item.author : "Unknown"}</span>
              </div>
              <div className="news_article">
                <p>{item.description}</p>
              </div>
              <div className="news_read_more">
                Read More at <a href={item.url} target="__blank" className="source">
                  <b>{item.source.name ? item.source.name : "Unknown"}</b>
                </a> 
                
              </div>
            </div>
          </div>
        );
      })}



    </>
  );
};

export default NewsCard;
