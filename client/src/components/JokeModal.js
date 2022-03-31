import React, { Component } from 'react';
import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addJoke } from '../actions/jokeAction';

class JokeModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newJoke = {
            name: this.state.name
        }

        //Add joke via addJoke action
        this.props.addJoke(newJoke);

        //Close Modal
        this.toggle();
    }

    render(){
        return(
            <div>
                <Button
                    color="primary"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Joke</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Jokes</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="joke">Joke</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="joke"
                                    placeholder='Add joke'
                                    onChange={this.onChange}
                                ></Input>
                                <Button color="primary" style={{marginTop: '2rem' }} block>
                                    Add Joke
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>


            </div>
        )
    }

}

const mapSateToProps = state => ({
    joke: state.joke
});

export default connect(
    mapSateToProps,
    { addJoke })(JokeModal);