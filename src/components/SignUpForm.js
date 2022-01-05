import React from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import '../styles/Home.css';
import Col from "react-bootstrap/esm/Col";

function SignUpFrom() {
    return(
        <div>
           <div className="form-card">
                    <h5 className="card-title">Sign Up Form</h5>
                        <Form className="form">
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                            <p className="muter">
                                Please use your Gonzaga email address.</p>
                            <div className="row">
                                <Col>
                                    <Form.Control type="text" placeholder="Enter First Name" />
                                </Col>
                                <Col>
                                    <Form.Control type="text" placeholder="Enter Last Name" />

                                </Col>
                            </div>
                            <div className="spacer"></div>
                            <Form.Select className='mt-3' label="Select your grade">
                                <option>Select your grade</option>
                                <option>Fresman</option>
                                <option>Sophmore</option>
                                <option>Junior</option>
                                <option>Senior</option>
                                <option>Graduate</option>
                            </Form.Select>
                            <div className="spacer"></div>
                            <FloatingLabel controlId="floatingTextarea" label="How did you hear about our club?" className="mb-3" style={{color: '#000'}}>
                                <Form.Control as="textarea" label="Leave a comment here" />
                                </FloatingLabel>
                            <div className="spacer"></div>
                            <button className="submit" variant="primary" type="submit"
                            ><p3>Submit</p3></button>    
                        </Form.Group>
                    </Form>
             </div>       

            


        </div>    
    );
}

export default SignUpFrom;