type CardProps = {
  children: React.ReactNode;
};
function Card(props: CardProps) {
  return <div className="w-full h-60 rounded-md flex">{props.children}</div>;
}

export default Card;
