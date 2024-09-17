'use client'

import {
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Textarea,
} from '@nextui-org/react'
import type { FormikHelpers, FormikProps } from 'formik'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { object, string } from 'yup'

const LetterOfIntentForm = () => {
  const [isInvalid, setIsInvalid] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState<string[]>([
    'Crude Oil',
    'Diesel',
    'Gasoline',
  ])

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>,
  ) => {
    setSubmitting(true)
    const res = await fetch('/api/pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ typesProducts: selectedProducts, ...values }),
    })
    const blob = await res.blob()
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = 'Letter_of_Intent_en.pdf'
    link.click()
    resetForm()
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{
        companyName: '',
        companyAddress: '',
        companyContact: '',
        supplyVolume: '',
        deliverySchedule: '',
        paymentTerms: '',
        logistics: '',
        qualityStandards: '',
        legalFinancialAspects: '',
      }}
      validationSchema={object().shape({
        companyName: string()
          .trim()
          .min(1, 'Please enter your name company')
          .required('Please enter your name company'),
        companyAddress: string()
          .trim()
          .min(1, 'Please enter your address company')
          .required('Please enter your address company'),
        companyContact: string()
          .trim()
          .min(1, 'Please enter your contact company')
          .required('Please enter your contact company'),
        supplyVolume: string()
          .trim()
          .min(1, 'Please enter specify the expected supply volume')
          .required('Please enter specify the expected supply volume'),
        deliverySchedule: string()
          .trim()
          .min(
            1,
            'Please enter specify the start date and duration of deliveries',
          )
          .required(
            'Please enter specify the start date and duration of deliveries',
          ),
        paymentTerms: string()
          .trim()
          .min(
            1,
            'Please enter specify main payment terms, e.g., phased payment, advance payment, etc.',
          )
          .required(
            'Please enter specify main payment terms, e.g., phased payment, advance payment, etc.',
          ),
        logistics: string()
          .trim()
          .min(1, 'Please describe logistics delivery terms')
          .required('Please describe logistics delivery terms'),
        qualityStandards: string()
          .trim()
          .min(1, 'Please describe quality standards')
          .required('Please describe quality standards'),
      })}
      onSubmit={handleSubmit}
    >
      {(props: FormikProps<any>) => {
        const { isValid, isSubmitting, handleSubmit } = props
        return (
          <Form
            onSubmit={handleSubmit}
            className='flex flex-wrap w-full gap-x-5 gap-y-2'
          >
            <Field name='companyName'>
              {({ meta, field }: any) => (
                <Input
                  type='text'
                  label='Name Company'
                  isRequired
                  isInvalid={!!(meta.touched && meta.error)}
                  errorMessage={meta.touched && meta.error && meta.error}
                  classNames={{
                    base: ['order-1', 'basis-[48%]', 'grow shrink', 'min-h-20'],
                  }}
                  {...field}
                />
              )}
            </Field>

            <Field name='companyAddress'>
              {({ meta, field }: any) => (
                <Input
                  type='text'
                  label='Address Company'
                  isRequired
                  isInvalid={!!(meta.touched && meta.error)}
                  errorMessage={meta.touched && meta.error && meta.error}
                  classNames={{
                    base: ['order-2', 'basis-[48%]', 'grow shrink', 'min-h-20'],
                  }}
                  {...field}
                />
              )}
            </Field>

            <Field name='companyContact'>
              {({ meta, field }: any) => (
                <Input
                  type='text'
                  label='Contact Company'
                  isRequired
                  isInvalid={!!(meta.touched && meta.error)}
                  errorMessage={meta.touched && meta.error && meta.error}
                  classNames={{
                    base: ['order-3', 'basis-[48%]', 'grow shrink', 'min-h-20'],
                  }}
                  {...field}
                />
              )}
            </Field>

            <Field name='typesProducts'>
              {() => (
                <CheckboxGroup
                  isRequired
                  label='Select types products'
                  errorMessage={'Please select types products'}
                  orientation='horizontal'
                  isInvalid={isInvalid}
                  value={selectedProducts}
                  onChange={(value: string[]) => {
                    setIsInvalid(value.length < 1)
                    setSelectedProducts(value)
                  }}
                  classNames={{
                    base: [
                      'order-4',
                      'basis-[48%]',
                      'grow',
                      'shrink',
                      'gap-2',
                      'min-h-[84px]',
                      isInvalid ? '[&>*:last-child]:text-xs' : '',
                    ],
                  }}
                >
                  <Checkbox value='Crude Oil'>Crude Oil</Checkbox>
                  <Checkbox value='Diesel'>Diesel</Checkbox>
                  <Checkbox value='Gasoline'>Gasoline</Checkbox>
                </CheckboxGroup>
              )}
            </Field>

            <Field name='supplyVolume'>
              {({ meta, field }: any) => (
                <Input
                  type='text'
                  label='Supply Volume'
                  isRequired
                  isInvalid={!!(meta.touched && meta.error)}
                  errorMessage={meta.touched && meta.error && meta.error}
                  classNames={{
                    base: ['order-5', 'basis-[48%]', 'grow shrink', 'min-h-20'],
                  }}
                  {...field}
                />
              )}
            </Field>

            <Field name='deliverySchedule'>
              {({ meta, field }: any) => (
                <Input
                  type='text'
                  label='Delivery Schedul'
                  isRequired
                  isInvalid={!!(meta.touched && meta.error)}
                  errorMessage={meta.touched && meta.error && meta.error}
                  classNames={{
                    base: ['order-6', 'basis-[48%]', 'grow shrink', 'min-h-20'],
                  }}
                  {...field}
                />
              )}
            </Field>

            <Field name='paymentTerms'>
              {({ meta, field }: any) => (
                <Input
                  type='text'
                  label='Payment Terms'
                  isRequired
                  isInvalid={!!(meta.touched && meta.error)}
                  errorMessage={meta.touched && meta.error && meta.error}
                  classNames={{
                    base: ['order-7', 'basis-[48%]', 'grow shrink', 'min-h-20'],
                  }}
                  {...field}
                />
              )}
            </Field>

            <Field name='logistics'>
              {({ meta, field }: any) => (
                <Textarea
                  isRequired
                  label='Logistics'
                  placeholder='Describe delivery terms, responsibility for transportation, and cargo insurance'
                  isInvalid={!!(meta.touched && meta.error)}
                  errorMessage={meta.touched && meta.error && meta.error}
                  classNames={{
                    base: [
                      'order-8',
                      'basis-[48%]',
                      'grow shrink',
                      'min-h-[124px]',
                    ],
                  }}
                  {...field}
                />
              )}
            </Field>

            <Field name='qualityStandards'>
              {({ meta, field }: any) => (
                <Textarea
                  isRequired
                  label='Quality Standards'
                  placeholder='Describe the quality standards required by your company'
                  isInvalid={!!(meta.touched && meta.error)}
                  errorMessage={meta.touched && meta.error && meta.error}
                  classNames={{
                    base: [
                      'order-9',
                      'basis-[48%]',
                      'grow shrink',
                      'min-h-[124px]',
                    ],
                  }}
                  {...field}
                />
              )}
            </Field>

            <Field name='legalFinancialAspects'>
              {({ meta, field }: any) => (
                <Textarea
                  label='Legal and Financial Aspects'
                  placeholder='Mention that all details will be discussed in the future contract'
                  isInvalid={!!(meta.touched && meta.error)}
                  errorMessage={meta.touched && meta.error && meta.error}
                  classNames={{
                    base: ['order-10', 'basis-[48%]', 'grow shrink'],
                  }}
                  {...field}
                />
              )}
            </Field>

            <div className='order-11 flex w-full flex-col justify-center gap-2 pt-6'>
              <Button
                type='submit'
                disabled={!isValid}
                isLoading={isSubmitting}
                variant='ghost'
                className='h-fit w-fit rounded-xl px-6 py-2 font-russo bg-primary border-light-gray text-white hover:text-action hover:border-action hover:bg-light-gray'
              >
                Donwload LOI
              </Button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default LetterOfIntentForm
