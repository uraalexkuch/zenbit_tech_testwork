import React, {Component} from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import {connect} from 'react-redux';
import {createContact} from '../actions';
import "../css/Contact.css";
import pict0 from "../image/cloud.svg"
import pict1 from "../image/red-cartoon-3.svg"
import pict2 from "../image/captura-de-tela-20210121-as-1047-1@2x.png"
import pict3 from "../image/ellipse-31.svg"
import pict4 from "../image/goodie1.svg"
import pict5 from "../image/group-5067.svg"
import pict6 from "../image/red-cartoon-4.svg"
import pict7 from "../image/red-cartoon-6.svg"
import { Container, Image} from "react-bootstrap";


class ContactUs extends Component {
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, meta}) => {
        const className2 = `rectangle2 ${meta.error && meta.touched ? 'error' : ''}`

        return (
            <div>
                <input className={className2}{...input} placeholder="Your name*" autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }
    renderInput1 = ({input, meta}) => {
        const className1 = `rectangle1 ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div>
                <input className={className1}{...input} placeholder="Your e-mail*" autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }
    renderInput2 = ({input, meta}) => {
        const className = `rectangle ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div>
                <input className={className}{...input} placeholder="Your message*" autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        const { createContact,reset, } = this.props;
        console.log("нажато")
        console.log(formValues)
       createContact(formValues).then(() => {
           reset();})


    }

    render() {
        const { handleSubmit, reset } = this.props;
        return (
            <Container className="contact-container">
                <Image className="cloud0" alt="" src={pict0}/>
                <Container className="mask-group-container">
                    <Image
                        className="captura-de-tela-2021-01-21-as-1047-1"
                        alt=""
                        src={pict2}
                    />
                </Container>
                <Image className="ellipse" alt="" src={pict3}/>
                <Container className="group-container">

                    <div className="reach-out-to">Reach out to us!</div>


                    {/* <form onSubmit={this.props.handleSubmit(this.onSubmit)}>*/}
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                        <Field
                            name="name"
                            type="name"
                            component={this.renderInput}
                        />

                        <Field
                            name="email"
                            type="email"
                            component={this.renderInput1}
                        />

                        <Field
                            name="message"
                            type="textarea"
                            component={this.renderInput2}
                        />
                        <Container className="group-container1">
                            <button style={{
                                borderRadius: "500px",
                                backgroundColor: "#fad34f",
                                width: "218px",
                                height: "73px"
                            }} className="send-message-text"
                            >Send message
                            </button>

                        </Container>
                    </form>
                </Container>
                <Image className="red-cartoon-3" alt="" src={pict1}/>
                <Image className="goodie1" alt="" src={pict4}/>
                <Image  className="group" alt="" src={pict5}/>
                <Image className="red-cartoon-4" alt="" src={pict6}/>
                <Image className="red-cartoon-6" alt="" src={pict7}/>
            </Container>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.name) {
        errors.name = "Please enter your name";
    } else
    if (formValues.name && !/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/.test(formValues.name)) {
        errors.name = 'Invalid name. Only English'
    }

    if (!formValues.email) {
        errors.email = "Please enter your email";
    } else
        if (formValues.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {

        errors.email = 'Invalid email address'
    }

    if (!formValues.message) {
        errors.message = "Please enter a message"
    }

    return errors;
};

// "Connect" form Component to redux-form
const formWrapped = reduxForm({
    form: 'contactUs',
    validate
})(ContactUs);

export default connect(null, {createContact})(formWrapped);