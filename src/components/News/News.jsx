import React from 'react';
import classes from './News.module.css';
import Article from './Article/Article';
import { addNewsActionCreator } from '../../redux/store';
import { updateNewsDataActionCreator } from '../../redux/store';

const MyNews = (props) => {
console.log(props, props.newsPage)
    let articles = props.newsPage.newsData.map(article => <Article key={article.id} news={article.article} />)
    
    let newArticle = React.createRef();
    
    let submitNews = () => {
        props.dispatch(addNewsActionCreator());
        newArticle.current.value = '';
    }
    
    let onNewsChange = () => {
        let newTextNews = newArticle.current.value;
        let action = updateNewsDataActionCreator(newTextNews);
        props.dispatch(action);
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