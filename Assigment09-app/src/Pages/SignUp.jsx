import React from 'react'
import { Input } from '../Components/Input'
import {Btn} from '../Components/Btn'

const SignUp = () => {
  return (
    <div className='signup bg-slate-100 rounded-xl'>
<h1 className='font-bold text-4xl underline'>SIGN UP</h1>
<br />

<Input  type='name' label='Enter Your Name' />
<br />
<Input  type='email' label='Enter Your Email' />
<br />
<Input  type='password' label='Enter Your Password' />
<br />
<Btn  className='btn' label='Sign Up' />






    </div>
  )
}

export {SignUp};