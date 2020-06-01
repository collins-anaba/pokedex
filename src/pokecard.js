import React, {Component} from 'react';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png'

class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${this.props.id}.png`;
        return <div className="Pokecard">
<h1>{this.props.name}</h1>
<img src={imgSrc} alt={this.props.name}/>
<div>Type: {this.props.type}</div>
<div>EXP: {this.props.exp}</div>
        </div>
    }
}

export default Pokecard