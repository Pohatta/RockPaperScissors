import React, { Component} from 'react';

import { Button, Form, FormGroup, Row, Col, Container } from 'reactstrap';

class Setup extends Component {
    constructor(props) {
        super(props);
            this.state = {
                actualsForm: [{
                    Description: {
                        elementType: 'input',
                        elementConfig: {
                            type: 'text',
                            placeholder: 'Description: e.g. bought milk and cookies',
                            label: 'Description'

                        },
                        value: '',
                        validation: {
                            required: true,
                            isAllowedName: true
                        },
                        errorMsg: 'Please enter a type name e.g. income. Only letters, numbers & space allowed',
                        valid: false,
                        touched: false,
                        dbName: 'Description',
                        classes: {
                            xs : "12",
                            md : "8"
                        }
                        
                    }
                }], // End form
                formIsValid: false,
                formError: false,
                edit: false,
                editId: null
            }
    }


    render() {

        return(
            <Container>
                <h1>Setup</h1>
            </Container>
        );
    }
};

export default Setup;