import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'; 

export const SignUpForm = (props) => {

    const schema = yup.object().shape({
        username: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().min(7).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required(),
        phoneNumber: yup.number().required(),
        dob: yup.string().required().matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
    })

    const form = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const {register, handleSubmit, formState, reset} = form

    const {errors, isSubmitting, isSubmitSuccessful, isSubmitted, submitCount, isValid, isDirty} = formState;
    // console.log({isSubmitting, isSubmitSuccessful, isSubmitted, submitCount, isValid})

    const onSubmit = (data) => {
        console.log('clicked')
        // console.log('the data is', data)
        console.log('the data is', data)
        props.addAccount(data)
    }

    const onError = (errors) => {
        console.log('the error is',errors)
    }

    useEffect(() => {
        if(isSubmitSuccessful){
            reset()
        }
    }, [isSubmitSuccessful, reset])

  return (
    <div className='mx-auto w-4/5 bg-zinc-200 mt-6 p-3 rounded-md shadow-md md:w-4/6'>
        <form onSubmit={handleSubmit(onSubmit,onError)}>
            <h1 className='text-3xl font-medium text-center'>Sign Up Here</h1>
            <div>
                <div className='flex flex-col my-3 md:mx-1'>
                    <label htmlFor='username'>Username</label>
                    <input
                        className={`outline-none border rounded-md ${errors.username ? 'border-red-600' : 'border-gray-500'} ${errors.username ? 'focus:border-red-600' : 'focus:border-blue-800'} focus:border-2 px-2 py-1`}
                        type='text'
                        id='username'
                        {...register('username', {
                            required: {
                                value: true,
                                message: 'You have to put a username'
                            }
                        })}
                    />
                    <p className='text-red-600'>{errors.username?.message}</p>
                </div>

                <div className='flex flex-col my-3 md:mx-1'>
                    <label htmlFor='email'>Email</label>
                    <input
                        className={`outline-none border rounded-md ${errors.email ? 'border-red-600' : 'border-gray-500'} ${errors.email ? 'focus:border-red-600' : 'focus:border-blue-800'} focus:border-2 px-2 py-1`}
                        type='text'
                        id='email'
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'You have to put an email'
                            },
                            // pattern: {
                            //     value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                            //     message: 'Invalid email format'
                            // },
                            validate: {
                                notAdmin: (fieldValue) => {
                                    return fieldValue !== 'deji@admin.com' || 'Enter Another Email'
                                }
                            }
                        })}
                    />
                    <p className='text-red-600'>{errors.email?.message}</p>
                </div>

                <div className='flex flex-col my-3 md:mx-1'>
                    <label htmlFor='password'>Password</label>
                    <input
                        className={`outline-none border rounded-md ${errors.password ? 'border-red-600' : 'border-gray-500'} ${errors.password ? 'focus:border-red-600' : 'focus:border-blue-800'} focus:border-2 px-2 py-1`}
                        type='text'
                        id='password'
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'You have to put a password'
                            },
                            // validate: {
                            //     not7characters: (fieldValue) => {
                            //         return fieldValue.length >= 7 || "Password must be more than 8 characters"
                            //     }
                            // },
                        })}
                    />
                    <p className='text-red-600'>{errors.password?.message}</p>
                </div>

                <div className='flex flex-col my-3 md:mx-1'>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input
                        className={`outline-none border rounded-md ${errors.confirmPassword ? 'border-red-600' : 'border-gray-500'} ${errors.confirmPassword ? 'focus:border-red-600' : 'focus:border-blue-800'} focus:border-2 px-2 py-1`}
                        type='text'
                        id='confirmPassword'
                        {...register('confirmPassword', {
                            required: {
                                value: true,
                                message: 'You have to confirm password'
                            },
                            // validate: {
                            //     not7characters: (fieldValue) => {
                            //         return fieldValue.length >= 7 || "Password must be more than 8 characters"
                            //     }
                            // },
                        })}
                    />
                    <p className='text-red-600'>{errors.confirmPassword?.message}</p>
                </div>

                <div className='flex flex-col my-3 md:mx-1'>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input
                        className={`outline-none border rounded-md ${errors.phoneNumber ? 'border-red-600' : 'border-gray-500'} ${errors.phoneNumber ? 'focus:border-red-600' : 'focus:border-blue-800'} focus:border-2 px-2 py-1`}
                        type='text'
                        id='phoneNumber'
                        {...register('phoneNumber', {
                            required: {
                                value: true,
                                message: 'You have to put a phoneNumber'
                            }
                        })}
                    />
                    <p className='text-red-600'>{errors.phoneNumber?.message}</p>
                </div>

                <div className='flex flex-col my-3 md:mx-1'>
                    <label htmlFor='dob'>Date of Birth</label>
                    <input
                        className={`outline-none border rounded-md ${errors.dob ? 'border-red-600' : 'border-gray-500'} ${errors.dob ? 'focus:border-red-600' : 'focus:border-blue-800'} focus:border-2 px-2 py-1`}
                        type='date'
                        id='dob'
                        {...register('dob', {
                            required: {
                                value: true,
                                message: 'You have to put a dob'
                            }
                        })}
                    />
                    <p className='text-red-600'>{errors.dob?.message}</p>
                </div>
            </div>

            <button className='outline-none ease-in-out w-full bg-gray-400 px-2 py-1 rounded hover:bg-blue-600' disabled={!isValid || isSubmitting}>Sign Up</button>
        </form>
    </div>
  )
}
