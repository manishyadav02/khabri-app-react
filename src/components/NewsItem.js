import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://img.freepik.com/free-vector/top-headlines-news-themem-background_1017-14199.jpg?w=2000"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
          <h5><span className="badge bg-secondary">{source}</span></h5>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author?author:"Unknown"} on {new Date(publishedAt).toUTCString()}{" "}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
