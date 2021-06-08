import Pokemon from './Pokemon';

function PokeList(props) {
// console.log(props)
    const item = props.allPokemons.map((onePokemon, i) => {
    return (
      <li key={i}>
        <Pokemon onePokemon={onePokemon} />
      </li>
    );
  });

  return (
    <div>
      <ul className="list">{item}</ul>
    </div>
  );
}


export default PokeList;