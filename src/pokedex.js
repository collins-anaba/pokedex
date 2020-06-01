import React, { Component } from 'react'
import Pokecard from './pokecard';



class Pokedex extends Component {
static defaultProps = {
    pokemon : [{}]
}

    render(){
return (
    <div>
        <h1>Pokedex!</h1>
        <p>Total experience: {this.props.exp}</p>
<p>{this.props.isWinner ? 'Winner' : "Loser" }</p>
        {this.props.pokemon.map((p)=> (
            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
        ))}
    </div>
)
    }
}
export default Pokedex