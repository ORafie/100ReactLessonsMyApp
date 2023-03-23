import classes from './Texts.module.css';

const Text = (props) => {
    return <div className={classes.text}>{props.text}</div>
}

export default Text;