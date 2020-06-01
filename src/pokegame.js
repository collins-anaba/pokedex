import React, { Component } from 'react'
import Pokedex from './pokedex'


class Pokegame extends Component {
static defaultProps = {
    pokemon : [{}]
}

    render(){
        let hand1 = [];
    let hand2 = [...this.props.pokemon]
    while(hand1.length < hand2.length){ let randIdx = Math.floor(Math.random() * hand2.length);
        let randPokemon = hand2.slice(randIdx, 1)[0];
        hand1.push(randPokemon)
        }
        let experience = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience,0);
        let experience2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience,0);

return (
    <div>
        <Pokedex 
        pokemon = {hand1} exp={experience} isWinner={experience > experience2}/>
        <Pokedex 
        pokemon = {hand2} exp= {experience2} isWinner={experience2 > experience}/>
    </div>
)
    }
}
export default Pokegame