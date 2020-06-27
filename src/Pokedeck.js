import React from 'react';
import Pokecard from './Pokecard';
import './Pokedeck.css';

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
const noOfCardToDisplay = 8
var currentPage = 1
var paginatedData
renderrrr()

function backward() {
    currentPage > 1 ? (currentPage = currentPage - 1) : (currentPage = 1)
    renderrrr()
}

function forward() {
    if (currentPage < pkData.length / noOfCardToDisplay) {
        currentPage = currentPage + 1
    }
    renderrrr()
}

function renderrrr() {
    var start = noOfCardToDisplay * currentPage - noOfCardToDisplay
    var end = noOfCardToDisplay + start

    paginatedData = pkData.slice(start, end)
    console.log(paginatedData)
}
class Pokedeck extends React.Component{
    // static defaultProps = {
    //     pokemon : pkData
    // }
    constructor() {
        super()
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
    }
    forceUpdateHandler() {
        this.forceUpdate()
    }
    render() {
        return (
            <div className="Pokedeck">
                <h1>Pokemon Deck</h1>
                <div className="Pokedeck-cards">
                    {
                        /* this.props.pokemon.map(p => (
                            <Pokecard name={p.name.english} attack={p.base.Attack} defense={p.base.Defense} speed={p.base.Speed} id={p.id}/>
                        )) */
                        paginatedData.map(p => (
                            <Pokecard name={p.name.english} attack={p.base.Attack} defense={p.base.Defense} speed={p.base.Speed} id={p.id}/>
                        ))
                    }
                </div>
                <div className="Pokedeck-pagination">
                    <input type="button" id="backward" value="<<" onClick={() => { backward(); this.forceUpdateHandler() }} />
                    <input type="button" id="forward" value=">>" onClick={() => { forward(); this.forceUpdateHandler() }} />
                </div>
            </div>
        )
    }
}
export default Pokedeck