import React, { Component } from 'react';

import {FormTitle} from '../formTitle';
class SignIn extends Component {
  render(){
    return (
      <div className='sign-in'>
        <FormTitle className='sign-in__title' text='Login' />
      </div>
    )
  }
}

export default SignIn;