import React from 'react';
import {useForm} from 'react-hook-form';
// import {DevTool} from '@hookform/devtools';
import "./Styling.css"
type Form = {
  name: string
  Email: string
  Message: string
}
const Contact = () => {
  const forms = useForm<Form>();
  const {register, control, handleSubmit, formState, reset} = forms;
  const {errors} = formState;
  const onSubmit = (data: Form) => {
    console.log('formsubmited', data)
    reset();
  }
  // const {name, ref, onChange, onBlur} = register("user")

  
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <h1 className='main'>Contact Form</h1><br/><br/><br/>
            <label htmlFor='Name '> Name </label> 
            <input type='text' id='Name' {...register('name', {required:'name is requered'})}/> <br/>
            <p>{errors.name?.message}</p>

            <label htmlFor='Email'> Email </label>
            <input type='text' id='Email' {...register('Email', {required:'Email is requered', pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'invalid email'}})}/><br/>
            <p>{errors.Email?.message}</p>

            <label htmlFor='username'> Message </label>
            <input type='text' id='Message ' {...register('Message', {required:'message is requered'})}/><br/>
            <p>{errors.Message?.message}</p>
            
            <button>Submit</button>

        </form>
        {/* <DevTool control={control}/> */}
    </div>
  )
};

export default Contact