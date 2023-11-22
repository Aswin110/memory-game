function Cards ({gamePlay, pokemon}) {
    return (
        <div className="cards">
          {pokemon.length > 0 &&
            pokemon.map((poke) => (
                <img key={poke.id}
                    className="card"
                    onClick={(e) => gamePlay(e)}
                    src={poke.imgUrl} 
                    alt={poke.name} 
                />
            ))}
        </div>
      );
}

export default Cards;