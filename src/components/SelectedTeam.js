import React from 'react';
import { connect } from 'react-redux';
import Holders from './Holders';
import Alternates from './Alternates';

const SelectedTeam = () => (
    <section>
        <Holders />
        <Alternates />
    </section>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect( mapStateToProps, mapDispatchToProps )( SelectedTeam );