import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import PcardLoader from "./PcardLoader";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: "20",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalize(this.props.category)} - Khabri News`;
  }

  async componentDidMount() {
    this.fetchFunc(this.state.page);
  }

  fetchFunc = async (pageNo) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${pageNo}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(10);
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    this.props.setProgress(30);

    let jsonData = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: jsonData.articles,
      totalResults: jsonData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  };

  fetchDataforScroller = async () => {
   
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let jsonData = await data.json();
    this.setState({
      articles: this.state.articles.concat(jsonData.articles),
      totalResults: jsonData.totalResults,
    });
  };

  handleNextClick = async () => {
    this.fetchFunc(this.state.page + 1);
    this.setState({ page: this.state.page + 1 });
  };

  handlePrevClick = async () => {
    this.fetchFunc(this.state.page - 1);
    this.setState({ page: this.state.page - 1 });
  };

  capitalize = (word) => {
    let msg = word.toLowerCase();
    return msg.charAt(0).toUpperCase() + msg.slice(1);
  };

  upperCase = (word) => {
    let text = word.toUpperCase();
    return text;
  };

  render() {
    const headings = {
      fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
      fontSize: "3.125rem",
      fontWeight: "bold",
    };
    return (
      <>
        <>
          <div style={{marginTop: "80px"}}>
          <h1 className="text-center" style={headings}>
            Khabri - Top Headlines
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
                {this.props.country.toUpperCase()} -{" "}
                {this.capitalize(this.props.category)}
              </span>
            </h1>
          </center>
          </div>
          {this.state.loading && (
            <>
              <PcardLoader />
              <PcardLoader className="my-3" />
              <Spinner />
            </>
          )}
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchDataforScroller}
            hasMore={this.state.articles.length !== this.state.totalResults}
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
                {/* {this.state.loading && (
              <div className="col-md-4">
                <PlaceholderCard />
              </div>
            )} */}

                {this.state.articles.map((element) => {
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
        {/* <div className="container d-flex justify-content-between my-4">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
            className="btn btn-warning"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
            className="btn btn-warning"
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}
