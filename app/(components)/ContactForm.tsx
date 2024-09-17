'use client'

import { Button, Input, Textarea } from '@nextui-org/react'
import type { FormikHelpers, FormikProps } from 'formik'
import { Field, Form, Formik } from 'formik'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { object, string } from 'yup'

const ContactForm = () => {
  const handleSubmit = async (
    values: { email: string; name: string; message: string },
    { setSubmitting, resetForm }: FormikHelpers<any>,
  ) => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      if (res) {
        toast.success('Email sent successfully!', {
          position: 'top-center',
          style: {
            borderRadius: '10px',
            background: 'grey',
            color: '#fff',
          },
        })
        resetForm()
      } else {
        throw new Error('Failed to send email.')
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.message, {
        position: 'top-center',
        style: {
          borderRadius: '10px',
          background: 'red',
          color: '#fff',
        },
      })
    }
    setSubmitting(false)
  }

  return (
    <div className='flex flex-col w-full lg:w-1/2 lg:gap-12 z-20'>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={object().shape({
          name: string()
            .min(2, 'The name must have at least 2 characters')
            .max(24, 'The name must have a maximum of 24 characters')
            .matches(
              /^(?=.{2,24}$)[A-Za-zА-Яа-яІіЇїЄєҐґ]+(?:[- '][A-Za-zА-Яа-яІіЇїЄєҐґ]+)*$/i,
              'The name must contain only Latin characters, a hyphen and/or a space in the middle',
            )
            .required('Mandatory field for filling'),
          email: string()
            .matches(
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              'Invalid email format',
            )
            .required('Enter your email address'),
          message: string().required('Mandatory field for filling'),
        })}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<any>) => (
          <Form
            onSubmit={props.handleSubmit}
            className='flex w-full flex-col flex-wrap items-center justify-center gap-4 lg:gap-8'
          >
            <Field name='name'>
              {({ meta, field }: any) => (
                <Input
                  type='text'
                  variant='bordered'
                  placeholder='Your name'
                  labelPlacement='outside'
                  isRequired
                  isInvalid={!!(meta.touched && meta.error)}
                  errorMessage={meta.touched && meta.error && meta.error}
                  classNames={{
                    input: [
                      'text-light-black',
                      'text-sm',
                      'group-data-[focus=true]:border-primary',
                    ],
                    inputWrapper: [
                      'bg-white',
                      'opacity-90',
                      'group-data-[focus=true]:border-primary',
                      'group-data-[hover=true]:border-primary',
                      'w-full',
                      'after:bg-opacity-0',
                    ],
                  }}
                  {...field}
                />
              )}
            </Field>
            <Field name='email'>
              {({ meta, field }: any) => (
                <Input
                  type='email'
                  variant='bordered'
                  placeholder='Email'
                  labelPlacement='outside'
                  isRequired
                  isInvalid={!!(meta.touched && meta.error)}
                  errorMessage={meta.touched && meta.error && meta.error}
                  classNames={{
                    input: [
                      'text-light-black',
                      'text-sm',
                      'group-data-[focus=true]:border-primary',
                    ],
                    inputWrapper: [
                      'bg-white',
                      'opacity-90',
                      'group-data-[focus=true]:border-primary',
                      'group-data-[filled-within=true]:border-paynes-gray',
                      'group-data-[hover=true]:border-primary',
                      'w-full',
                      'after:bg-opacity-0',
                    ],
                  }}
                  {...field}
                />
              )}
            </Field>
            <Field name='message'>
              {({ field }: any) => (
                <Textarea
                  variant='faded'
                  labelPlacement='outside'
                  placeholder='Enter your message'
                  className={{
                    inputWrapper: [
                      'data-[hover=true]:!border-primary',
                      'data-[focus=true]:!border-primary',
                    ],
                  }}
                  {...field}
                />
              )}
            </Field>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                type='submit'
                disabled={!props.isValid}
                isLoading={props.isSubmitting}
                variant='bordered'
                className='w-full lg:w-[200px] h-fit rounded-xl px-6 py-2 font-russo bg-primary border-white text-white hover:text-action hover:border-action hover:bg-light-gray z-20'
              >
                Send message
              </Button>
            </motion.div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
