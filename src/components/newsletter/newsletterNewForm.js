import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

 import { FormTitle } from "../formTitle";
import { FormInput, FormButton } from "../formFields";
import TextLink from "../textLink";

 class NewNewsletterForm extends Component {
  render() {

     const { handleSubmit } = this.props;

     return (
      <form onSubmit={handleSubmit} className="new-newsletter-form">
        <FormTitle className="new-newsletter-form__title" text="Login" />
        <Field
          className="new-newsletter-form__email"
          placeholder="Enter Email"
          name="email"
          type="email"
          title="Email"
          component={FormInput}
        />

        <div className='new-newsletter-form__text-links'>
            <TextLink to='/forgot' text='Forgot Password'/>
            <TextLink to='/signup' text='Not a member? Register here'/>
        </div>

       </form>
    );
  }
}

 NewNewsletterForm = reduxForm({
  form: "newnewsletter"
})(NewNewsletterForm);

 export default NewNewsletterForm;