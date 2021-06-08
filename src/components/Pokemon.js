function Pokemon(props) {
const itemTypes = props.onePokemon.types.map((type, index) => {
    return (
      <li key={index} className=''>
        {type}
      </li>
    );
  });
  return (
    <div className='list-item'>
      <img className="image" src={props.onePokemon.url} alt={props.onePokemon.name} />
      <h2 className='list-title'>{props.onePokemon.name}</h2>
      <ul className='list-types'>{itemTypes}</ul>
    </div>
  );
};

export default Pokemon;