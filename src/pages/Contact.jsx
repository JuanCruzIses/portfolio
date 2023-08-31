import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Formik } from 'formik'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser'
import '../css/contact.css'
import { Spinner } from 'react-bootstrap';

function Contact() {
    const [trySend, setTrySend] = useState(false)
    const [error, setError] = useState(null)
    const [emailOk, setEmailOk] = useState()
    const sendEmail = async (event) => {
            setTrySend(true)
            emailjs.send("service_rui7i0b", "template_ylzyweg", {
                user_name: event.user_name,
                user_message: event.user_message,
                user_email: event.user_email,
            }, 'gK7ykd08ebiQM2bZT')
                .then(response => {
                    setTrySend(false)
                    if (response.status == 200) {
                        setEmailOk(true)
                    }
                })
                .catch(error =>{ 
                    setTrySend(false)
                    setEmailOk(false)
                })
        }

    return (
        <>
            <Header />
            <h1 className='contact-title'>Contacto</h1>
            <p>Te invito a comunicarte conmigo para compartir los detalles de tu proyecto y comenzar nuestra colaboración en su realización.</p>
            <Formik initialValues={({
                user_name: '',
                user_email: '',
                user_message: '',
            })}
                onSubmit={sendEmail}
            >
                {({ values, handleSubmit, handleChange, handleBlur }) => (
                    <Form onSubmit={handleSubmit}>
                        {error &&
                            <Form.Group className="container-errors">
                                <p>{error}</p>
                            </Form.Group>
                        }
                        <Row className="form-group-login">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>Nombre y apellido:</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name='user_name'
                                    values={values}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Correo electronico:</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        className='input-email'
                                        type="text"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        name='user_email'
                                        values={values}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>



                            <FloatingLabel className='label-comment' label="Dejame tu mensaje">
                                <Form.Control
                                    as="textarea"
                                    className='input-textarea'
                                    style={{ height: '8em' }}
                                    values={values}
                                    onChange={handleChange}
                                    name='user_message'
                                />
                            </FloatingLabel>


                        </Row>
                        <div className='container-text-button'>
                            {(emailOk == true) && <p>El mensaje se envio correctamente. ¡Muchas gracias por ponerte en contacto conmigo!</p>}
                            {(emailOk == false) && <p>El mensaje no pudo ser enviado, por favor, volve a intentarlo</p>}
                            {trySend == true ? 
                                <Spinner style={{margin: "2em 0 0"}}/> 
                                : 
                                emailOk != undefined ? '' : <Button type="submit">Enviar</Button>
                            }

                        </div>
                    </Form>
                )}
            </Formik>
            <Footer />
        </>
    )
}

export default Contact