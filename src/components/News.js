import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PlaceholderCard from "./PlaceholderCard";
import PropTypes from "prop-types";

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

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.fetchFunc(this.state.page);
  }

  fetchFunc = async (pageNo) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=281e472773ee480daa32bab3b8ec8b49&page=${pageNo}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let jsonData = await data.json();
    this.setState({
      articles: jsonData.articles,
      totalResults: jsonData.totalResults,
      loading: false,
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

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center">Khabri - Top Headlines</h1>
          <div className="row">
            {this.state.loading && (
              <div className="col-md-4">
                <PlaceholderCard />
              </div>
            )}
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                      source = {element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container d-flex justify-content-between my-4">
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
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            onClick={this.handleNextClick}
            className="btn btn-warning"
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
