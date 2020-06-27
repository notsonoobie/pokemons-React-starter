import React from 'react'
import './Pokecard.css'

const img = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/`

class Pokecard extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="card">
                <h1>{this.props.name}</h1>
                <div>
                    <p>Attack  : {this.props.attack}</p>
                    <p>Defense : {this.props.defense}</p>
                    <p>Speed   : {this.props.speed}</p>
                    <img src={`${img}${this.props.id}MS.png`} alt={this.props.name} />
                </div>
            </div>
        )
    }  
}

export default Pokecard