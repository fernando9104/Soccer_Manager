import { createStore } from 'redux';

const initialState = {
    players : [
        { 
            id: 1,
            name: "Roberto",
            photo: "https://source.unsplash.com/sibVwORYqs0"  
        },
        { 
            id: 2,
            name: "Angel",
            photo: "https://source.unsplash.com/wKOKidNT14w"  
        },
        { 
            id: 3,
            name: "Benji",
            photo: "https://source.unsplash.com/das6NrjLoM0"  
        }
    ],
    holders: [],
    alternates: []
};

const managerReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case "ADD_HOLDER":
            return  { ...state, 
                        holders: state.holders.concat( action.player ),
                        players: state.players.filter( data => data.id !== action.player.id )
                    };
        case "ADD_ALTERNATE":
            return  { ...state, 
                        alternates: state.alternates.concat( action.player ),
                        players: state.players.filter( data => data.id !== action.player.id )
                    };
        case "REMOVE_HOLDER":
                return  { ...state, 
                            holders: state.holders.filter( data => data.id !== action.player.id ),
                            players: state.players.concat( action.player )
                        };    
        case "REMOVE_ALTERNATE":
                return  { ...state, 
                            alternates: state.alternates.filter( data => data.id !== action.player.id ),
                            players: state.players.concat( action.player )
                        };                                            
        default:
            return state;
    }
};

export default createStore( managerReducer );