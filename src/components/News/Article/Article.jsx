import classes from './Article.module.css'


const Article = (props) => {
    return (
        <div  className={classes.news}>
            <img src='https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg' alt='description'/>
            {props.news}
        </div>
    )
}

export default Article;


