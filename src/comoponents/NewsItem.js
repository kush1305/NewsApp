import React from 'react'

const NewsItem = (props)=>{
  
    let {title,description,ImageUrl,url,author,publish} = props;
    return (
      
    <div>
      <div className="card" >
        <img src={ImageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p class="card-text"><small class="text-muted">{!author?"Unknown":author}</small></p>
          <p className="card-text">{description}
            
          </p>
          <a href={url} target="_blank" className="btn btn-sm btn-dark">

            Read more
          </a>
          <p class="card-text"><small class="text-muted">{publish}</small></p>
        </div>
      </div>
    </div>
      
    )
  
}

export default NewsItem

