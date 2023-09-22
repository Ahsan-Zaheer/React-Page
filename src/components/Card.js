function Card(props) {
    const classes = props.className;
    return(
        <li className={classes}>
        <img src={props.items.image} alt="TODO: TITLE" />
          <h2>{props.items.title}</h2>
          <p>{props.items.description}</p>
        </li>
    );
}

export default Card;