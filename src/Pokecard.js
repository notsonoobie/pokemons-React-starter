import React from 'react'
import './Pokecard.css'

const img = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/`

class Pokecard extends React.Component {
    render() {
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div>
                    <p className="Pokecard-info">Attack  : {this.props.attack}</p>
                    <p className="Pokecard-info">Defense : {this.props.defense}</p>
                    <p className="Pokecard-info">Speed   : {this.props.speed}</p>
                    <img src={`${img}${this.props.id}MS.png`} alt={this.props.name} />
                </div>
            </div>
        )
    }  
}

export default Pokecard