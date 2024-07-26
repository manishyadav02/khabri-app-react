import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import PcardLoader from "./PcardLoader";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  

  useEffect(() => {
    document.title = `${capitalize(props.category)} (${props.country.toUpperCase()}) - Khabri News`;
    fetchFunc(page);
     //eslint-disable-next-line
  }, []);        

  const fetchFunc = async (pageNo) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.pageSize}`;
    props.setProgress(10);
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);

    let jsonData = await data.json();
    props.setProgress(70);

    setArticles(jsonData.articles);
    setTotalResults(jsonData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchDataforScroller = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;

    setPage(page + 1);

    let data = await fetch(url);
    let jsonData = await data.json();

    setArticles(articles.concat(jsonData.articles));
    setTotalResults(jsonData.totalResults);
  };

  const capitalize = (word) => {
    let msg = word.toLowerCase();
    return msg.charAt(0).toUpperCase() + msg.slice(1);
  };

  

  let headings = {
    fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
    fontSize: "3.125rem",
    fontWeight: "bold",
  };
  return (
    <>
      <>
        <div style={{ marginTop: "80px" }}>
          <h1 className="text-center" style={headings}>
            News-React - Top Headlines
          </h1>
          <center>
            <h1>
              <span
                className="badge bg-primary"
                style={{
                  fontFamily:
                    "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
                }}
              >
                {props.country.toUpperCase()} -{" "}
                {capitalize(props.category)}
              </span>
            </h1>
          </center>
        </div>
        {loading && (
          <>
            <PcardLoader />
            <PcardLoader className="my-3" />
            <Spinner />
          </>
        )}
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchDataforScroller}
          hasMore={articles.length !== totalResults}
          loader={
            <>
              <PcardLoader />
              <PcardLoader className="my-3" />
              <Spinner />
            </>
          }
        >
          <div className="container">
            <div className="row">
             

              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
      
    </>
  );
}

News.defaultProps = {
  country: "us",
  pageSize: "20",
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
