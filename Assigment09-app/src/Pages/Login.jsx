import { Btn } from '../Components/Btn';
import { Input } from '../Components/Input'
import React from 'react'

const Login = () => {
  return (
    <div className='login  bg-slate-100 rounded-xl '>
<h1 className='font-bold text-4xl'>LOGIN</h1><br />
<Input  type='name' label='Enter Your Name' /><br />
<Input  type='email' label='Choose Your Email' /><br />
<Input  type='email' label='Confirm Email' /><br />
<Input  type='password' label='Create New Password' /><br />
<Input type='password' label='Confirm Password' /><br />
<Input type='date' label='Date Of Birth' /><br />
<Btn  label='LOGIN' />



    </div>
   
  )
}

export {Login};