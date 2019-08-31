import React from 'react';
import { connect } from 'react-redux';

const Alternates = ({ alternates, removeAlternate }) => (
    <section>
        <h2>Suplentes</h2>
        <div className='alternates-cont'>
            {
                alternates.map( data => (
                    <article className='alternate' key={data.id} >
                        <div>
                            <img src={data.photo} alt={data.name} height="140" width="160" />
                            <button onClick={()=> removeAlternate(data)}>X</button>
                        </div>
                        <p>{data.name}</p>
                    </article>
                ))
            }
        </div>
    </section>
);

const mapStateToProps = state => ({
    alternates: state.alternates
});

const mapDispatchToProps = dispatch => ({
    removeAlternate: data => { dispatch({ type:"REMOVE_ALTERNATE", player:data }) }
});

export default connect( mapStateToProps, mapDispatchToProps )( Alternates );