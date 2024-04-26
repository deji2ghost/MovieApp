import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

export const SigninForm = () => {

    const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required()
    })

    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(schema)
    })

    const {errors, isValid, isSubmitting} = formState

    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <div>
        <h1>Sign In Here</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col my-3 md:mx-1'>
                <label htmlFor='email'>Email</label>
                <input
                    className={`outline-none border rounded-md ${errors.email ? 'border-red-600' : 'border-gray-500'} ${errors.email ? 'focus:border-red-600' : 'focus:border-blue-800'} focus:border-2 px-2 py-1`}
                    type='text'
                    id='email'
                    {...register('email')}
                />
                <p className='text-red-600'>{errors.email?.message}</p>
            </div>

            <div className='flex flex-col my-3 md:mx-1'>
                <label htmlFor='password'>Password</label>
                <input
                    className={`outline-none border rounded-md ${errors.password ? 'border-red-600' : 'border-gray-500'} ${errors.password ? 'focus:border-red-600' : 'focus:border-blue-800'} focus:border-2 px-2 py-1`}
                    type='text'
                    id='password'
                    {...register('password')}
                />
                <p className='text-red-600'>{errors.password?.message}</p>
            </div>

            <button className='outline-none ease-in-out w-full bg-gray-400 px-2 py-1 rounded hover:bg-blue-600' disabled={!isValid || isSubmitting}>Sign Up</button>
        </form>
    </div>
  )
}
