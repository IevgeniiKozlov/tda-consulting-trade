'use client'

import { Button, Input } from '@nextui-org/react'
import type { FormikProps } from 'formik'
import { Field, Form, Formik } from 'formik'
import { object, string } from 'yup'

const ContactForm = () => {
  return (
    <div className='flex flex-col w-1/2 gap-12 z-20'>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={object().shape({
          name: string()
            .min(2, 'Імʼя має мати мінімум 2 символи')
            .max(24, 'Імʼя має мати максимум 24 символи')
            .matches(
              /^(?=.{2,24}$)[A-Za-zА-Яа-яІіЇїЄєҐґ]+(?:[- '][A-Za-zА-Яа-яІіЇїЄєҐґ]+)*$/i,
              'Імʼя має містити лише кириличні або латинські символи, дефіс та/або пробіл посередині',
            )
            .required('Обовʼязкове поле для заповнення'),
          email: string()
            .matches(
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              'Невірний формат email',
            )
            .required('Введіть адресу електронної пошти'),
          message: string()
            .min(6, 'Пароль має містити не менш ніж 8 символів')
            .max(32, 'Пароль має ммістити не більше ніж 32 символи')
            .required('Введіть пароль'),
        })}
        //   onSubmit={handleSubmit}
      >
        {(props: FormikProps<any>) => (
          <Form
            onSubmit={props.handleSubmit}
            className='flex w-full flex-col flex-wrap items-center justify-center gap-10'
          >
            <Field name='name'>
              {({ meta, field }: any) => {
                const handleChange = (
                  e: React.ChangeEvent<HTMLInputElement>,
                ) => {
                  const { value } = e.target
                  field.onChange(e)
                  props.setFieldValue('name', value)
                }

                return (
                  <Input
                    type='text'
                    variant='bordered'
                    placeholder='Your name'
                    labelPlacement='outside'
                    isRequired
                    onChange={handleChange}
                    isInvalid={!!(meta.touched && meta.error)}
                    errorMessage={meta.touched && meta.error && meta.error}
                    classNames={{
                      label: [
                        'text-sm',
                        'text-paynes-gray',
                        'group-data-[filled-within=true]:text-paynes-gray',
                        'group-data-[focus=true]:text-persian-green',
                        'group-data-[hover=true]:text-persian-green',
                      ],
                      input: [
                        'text-paynes-gray',
                        'text-sm',
                        'group-data-[focus=true]:border-persian-green',
                      ],
                      innerWrapper: [
                        'group-data-[filled-within=true]:text-paynes-gray',
                        'group-data-[focus=true]:text-persian-green',
                        'group-data-[hover=true]:text-persian-green',
                      ],
                      inputWrapper: [
                        'bg-white',
                        'opacity-30',
                        'group-data-[focus=true]:border-persian-green',
                        'group-data-[filled-within=true]:border-paynes-gray',
                        'group-data-[hover=true]:border-persian-green',
                        'w-full',
                        'after:bg-opacity-0',
                      ],
                    }}
                    {...field}
                  />
                )
              }}
            </Field>
            <Field name='email'>
              {({ meta, field }: any) => {
                const handleChange = (
                  e: React.ChangeEvent<HTMLInputElement>,
                ) => {
                  const { value } = e.target
                  field.onChange(e)
                  props.setFieldValue('email', value)
                }

                return (
                  <Input
                    type='email'
                    variant='bordered'
                    placeholder='e-mail'
                    labelPlacement='outside'
                    isRequired
                    isInvalid={!!(meta.touched && meta.error)}
                    errorMessage={meta.touched && meta.error && meta.error}
                    onChange={handleChange}
                    classNames={{
                      label: [
                        'text-sm',
                        'text-paynes-gray',
                        'group-data-[filled-within=true]:text-paynes-gray',
                        'group-data-[focus=true]:text-persian-green',
                        'group-data-[hover=true]:text-persian-green',
                      ],
                      input: [
                        'text-paynes-gray',
                        'text-sm',
                        'group-data-[focus=true]:border-persian-green',
                      ],
                      innerWrapper: [
                        'group-data-[filled-within=true]:text-paynes-gray',
                        'group-data-[focus=true]:text-persian-green',
                        'group-data-[hover=true]:text-persian-green',
                      ],
                      inputWrapper: [
                        'group-data-[focus=true]:border-persian-green',
                        'group-data-[filled-within=true]:border-paynes-gray',
                        'group-data-[hover=true]:border-persian-green',
                        'w-full',
                        'after:bg-opacity-0',
                      ],
                    }}
                    {...field}
                  />
                )
              }}
            </Field>
            <Field name='message'>
              {({ meta, field }: any) => (
                <Input
                  type='text'
                  isInvalid={!!(meta.touched && meta.error)}
                  errorMessage={meta.touched && meta.error && meta.error}
                  variant='bordered'
                  placeholder='Your message'
                  isRequired
                  classNames={{
                    label: [
                      'text-sm',
                      'text-paynes-gray',
                      'group-data-[filled-within=true]:text-paynes-gray',
                      'group-data-[focus=true]:text-persian-green',
                      'group-data-[hover=true]:text-persian-green',
                    ],
                    input: [
                      'text-paynes-gray',
                      'text-sm',
                      'group-data-[focus=true]:border-persian-green',
                    ],
                    innerWrapper: [
                      'group-data-[filled-within=true]:text-paynes-gray',
                      'group-data-[focus=true]:text-persian-green',
                      'group-data-[hover=true]:text-persian-green',
                    ],
                    inputWrapper: [
                      'group-data-[focus=true]:border-persian-green',
                      'group-data-[filled-within=true]:border-paynes-gray',
                      'group-data-[hover=true]:border-persian-green',
                      'w-full',
                      'after:bg-opacity-0',
                    ],
                  }}
                  {...field}
                />
              )}
            </Field>
            <div className='flex w-full flex-col justify-center gap-2 pt-6'>
              <Button
                type='submit'
                disabled={!props.isValid}
                isLoading={props.isSubmitting}
                variant='bordered'
                className='w-full rounded-full border-transparent bg-persian-green py-6 text-center text-base text-white hover:border-persian-green hover:bg-transparent hover:text-persian-green'
              >
                Увійти
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
