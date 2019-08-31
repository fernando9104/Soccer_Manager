import React from 'react';
import { connect } from 'react-redux';

const Holders = ({ holders, removeHolder }) => (
    <section>
        <h2>Titulares</h2>
        <div className='holders-cont'>
            {
                holders.map( data => (
                    <article className='holder' key={data.id} >
                        <div>
                            <img src={data.photo} alt={data.name} height="140" width="160" />
                            <button onClick={()=> removeHolder(data)} >X</button>
                        </div>
                        <p>{data.name}</p>
                    </article>
                ))
            }
        </div>
    </section>
);

const mapStateToProps = state => ({
    holders: state.holders
});

const mapDispatchToProps = dispatch => ({
    removeHolder: data => { dispatch({ type:"REMOVE_HOLDER", player:data }) }
});

export default connect( mapStateToProps, mapDispatchToProps )( Holders );
