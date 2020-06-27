import React from 'react';
import Pokecard from './Pokecard';


var data = require('./data.json')
// Padding with Leading Zeroes
var pkData = data.map(p =>
    ({
        'id': ('0000' + p.id).slice(-3),
        'name': p.name,
        'type': p.type,
        'base': p.base
    })
)

class Pokedeck extends React.Component{
    static defaultProps = {
        pokemon : pkData
    }
    render() {
        return (
            <div className="Pokedeck">
                {console.log(this.props.pokemon)}
                <h1>Pokemon Deck</h1>
                {
                    this.props.pokemon.map(p => (
                        <Pokecard name={p.name.english} attack={p.base.Attack} defense={p.base.Defense} speed={p.base.Speed} id={p.id}/>
                    ))
                }
            </div>
        )
    }
}
export default Pokedeck