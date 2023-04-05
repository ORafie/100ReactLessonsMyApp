import React from 'react';
import classes from './News.module.css';
import Article from './Article/Article';

const MyNews = (props) => {
console.log(props, props.newsPage)
    let articles = props.newsPage.newsData.map(article => <Article key={article.id} news={article.article} />)
    
    let newArticle = React.createRef();
    
    let submitNews = () => {
        props.dispatch({ type: 'ADD-NEWS'});
        newArticle.current.value = '';
    }
    
    let onNewsChange = () => {
        let newTextNews = newArticle.current.value;
        props.dispatch({ type: 'UPDATE-NEWS-DATA', newTextNews });
    }
console.log(123, props.newsPage.newTextForNewsData)
    return (
        <div className={classes.masonry}>
            <h3>News</h3>
            <div>
                <textarea onChange={onNewsChange} ref={newArticle}
                value={props.newsPage.newTextForNewsData}
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