import React from 'react';
import classes from './News.module.css';
import Article from './Article/Article';

const MyNews = (props) => {

    let articles = props.newsData.map(article => <Article key={article.id} news={article.article} />)
    let newArticle = React.createRef();
    
    let submitNews = () => {
        props.addNews();
        newArticle.current.value = '';
    }
    
    let onNewsChange = (event) => {
        let newTextNews = event.target.value;
        props.updateNewsData(newTextNews);
    }

    return (
        <div className={classes.masonry}>
            <h3>News</h3>
            <div>
                <textarea onChange={onNewsChange}
                    ref={newArticle}
                value={props.newTextForNewsData}
                />
            </div>
            <div>
                <button onClick={submitNews}>Add news</button>
            </div>
            <div>
                {articles}
            </div>
        </div>
            
    )
}

export default MyNews;
