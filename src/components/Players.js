import React from 'react';
import { connect } from 'react-redux';

const Players = ({ players, addHolder, addAlternate }) => (
    <section>
        <h2>Jugadores</h2>
        <div className="players-cont" >
            {
                players.map( data =>(
                    <article className='player' key={data.id} >
                        <img src={data.photo} alt={data.name} height="140" width="160" />
                        <h3>{data.name}</h3>
                        <div>
                            <button onClick={()=> addHolder(data)}>Titular</button>
                            <button onClick={()=> addAlternate(data)}>Suplente</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
);

const mapStateToProps = state => ({
    players: state.players
});

const mapDispatchToProps = dispatch => ({
    addHolder: data => { dispatch({ type:"ADD_HOLDER", player:data }) }, 
    addAlternate: data => { dispatch({ type:"ADD_ALTERNATE", player:data }) }
});

export default connect( mapStateToProps, mapDispatchToProps )( Players );