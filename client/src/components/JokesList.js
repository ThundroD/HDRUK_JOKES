import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getJokes, deleteJoke } from '../actions/jokeAction';
import PropTypes from 'prop-types';


class JokesList extends Component {

    componentDidMount(){
        this.props.getJokes();
    }

    onDeleteClick = (id) => {
        this.props.deleteJoke(id);
    }

    render(){
        //Pull State
        const { jokes } = this.props.joke;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="jokes-list">
                        {jokes.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} className="dark">
                                <ListGroupItem>
                                    <Button className="remove-btn"
                                    color="danger"
                                    size="small"
                                    onClick={this.onDeleteClick.bind(this, _id)}>
                                        &times;</Button>
                                    {name}</ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>

                </ListGroup>
            </Container>
        );
    }
}

JokesList.propTypes = {
    getJokes: PropTypes.func.isRequired,
    joke: PropTypes.object.isRequired
}

const mapSatetoProps = (state) => ({
    joke: state.joke
});

export default connect(
    mapSatetoProps,
    { getJokes, deleteJoke })(JokesList);