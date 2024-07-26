import React from "react";

export default function NewsItem (props){

    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      props;
    return (
      <div className="my-3">
        <div className="card" style={{margin:"20px"}}>
        <div style={{display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0',
          }}>
        <span className="badge rounded-pill bg-primary">{source}</span>
        </div>
          <img
          
            src={
              imageUrl
                ? imageUrl
                : "https://img.freepik.com/free-vector/top-headlines-news-themem-background_1017-14199.jpg?w=2000"
            }
            className="card-img-top"
            alt="..."
            onError={(e) => {
              e.currentTarget.src = "https://img.freepik.com/free-vector/top-headlines-news-themem-background_1017-14199.jpg?w=2000";
            }}
          />
          <div className="card-body">
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
