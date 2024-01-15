import React, { useEffect , useState } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";






const News = (props)=>{

    const[article,setArticle] = useState([])
    const [page,setPage] = useState(1)
    // const [loading, setloading] = useState(true)
    const [totalResults,setTotalResults] = useState(0)

    const updateNews = async()=> {

        props.setProgress(10);

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c6135e599397494f9e0db43104a2bfe2&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(30);

        let parsedData = await data.json();
        props.setProgress(50);

        setArticle(parsedData.articles)
        // setloading(false)
        setTotalResults(parsedData.totalResults)
        
        props.setProgress(100);

    }

    const onclickNext = async () => {

        
        setPage(page+1)
        updateNews();

    }

    const onclickPrev = async () => {

        setPage(page-1)
        updateNews();
    }


    useEffect(()=>{
        updateNews();
      // eslint-disable-next-line  
    },[])
    

    

   const fetchMoreData = async() => {
        setPage(page+1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c6135e599397494f9e0db43104a2bfe2&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);

        let parsedData = await data.json();
        setArticle(article.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        

      };

    
        return (
            <div>

                <div className="container my-3">
                    <h2>QuickNews-TopHeadlines</h2>

                    <InfiniteScroll
                        dataLength={article.length}
                        next={fetchMoreData}
                        hasMore={article.length !== totalResults}
                        loader={<h4>Loading...</h4>}
                    >

                        <div className="row my-2">
                            {article.map((element) => {

                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title:""} description={element.description} ImageUrl={element.urlToImage} url={element.url} author={element.author} publish={element.publishedAt} />

                                </div>

                            })}





                        </div>
                    </InfiniteScroll>

                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={page <= 1} onClick={onclickPrev} className="btn btn-dark">&larr; Prev</button>
                        <button type="button" disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} onClick={onclickNext} className="btn btn-dark">Next &rarr; </button>
                    </div>


                </div>
            </div>
        )
    
}

export default News

