import Shop from './Shop';
import classes from './Items.module.css';

function Items(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <Shop
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
    </ul>
  );
}

export default Items;
