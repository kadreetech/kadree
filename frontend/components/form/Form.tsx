import { PortableText } from '@portabletext/react';
import axios from 'axios';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { Lang, useMainContext } from '../../context/context';
import { emailTemplate } from '../../pages/api/emailTemplate';
import { InputField, SelectField, SumitButton, TextAreaField } from './SelectField';

export interface IAlert {
  isSuccess: boolean
  header: string
  message: string
}

export interface IForm {
  subject?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}
export const Form = ({ section, formsCollection }: { section: any, formsCollection: any[] }) => {
  const [alert, setAlert] = useState<IAlert | null>(null)
  const { lang } = useMainContext();
  const mainForm = formsCollection?.find(x => x._id === section.section_form._ref)
  const title = mainForm.mainform_title;
  const body = mainForm.mainform_body;

  const FormTitle = {
    block: ({ children }: any) => <p className="text-2xl lg:text-3xl text-black mb-4 text-center leading-7 font-light md:text-right">{children}</p>,
    marks: {
      strong: ({ children }: any) => <strong className=' font-bold'>{children}</strong>
    },
  };

  const FormBody = {
    block: ({ children }: any) => <p className="text-sm lg:text-md font-light leading-6 text-black mb-4 text-left md:text-right">{children}</p>,
    marks: {
      strong: ({ children }: any) => <strong className='text-accent font-bold'>{children}</strong>
    },
  };

  const initialVallues: IForm = {
    subject: 'Select a subject',
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const handleSubmit = async (values: IForm) => {
    try {
      const test = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: values.email,
          fullname: values.name,
          subject: values.subject,
          message: values.message,
          phone: values.phone,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      if (test) {
        setAlert({
          isSuccess: true,
          header: 'Thanks for contacting us!',
          message: 'We will get back to you shortly'
        })
      }
    } catch (error: any) {
      setAlert({
        isSuccess: false,
        header: 'Oh no... there was an error',
        message: 'Please try to react us at this email or phone number'
      })
    }
  }

  const requiredMessage = 'This field is required';
  const validationSchema = Yup.object().shape({
    subject: Yup.string().required(requiredMessage).not(['Select a subject'], 'The selection is not valid'),
    name: Yup.string().required(requiredMessage),
    email: Yup.string().email('Should be a valid email').required(requiredMessage),
    phone: Yup.string().matches(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/, 'The phone number is incorrect').required(requiredMessage),
    message: Yup.string().required(requiredMessage),
  });

  if (formsCollection.length <= 0) return null

  return (
    <div className='px-4 w-full flex flex-col md:flex-row justify-center items-center md:items-start z-20 lg:mb-24'>
      <div className='mb-4 md:mb-0 w-full md:w-1/2 shrink-0 md:pl-32 max-w-[1280px] '>
        <PortableText value={title} components={FormTitle} />
        <PortableText value={body} components={FormBody} />
      </div>
      <div className='w-full flex flex-col items-center md:w-1/2  shrink-0'>
        {alert ?
          <Alert {...alert} />
          :
          <Formik
            initialValues={initialVallues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <>
              <SelectField name={'subject'} label={lang === Lang.EN ? 'Topic' : 'Tema'} />
              <InputField name='name' label={lang === Lang.EN ? 'Name' : 'Nombre'} type={'text'} />
              <InputField name='phone' label={lang === Lang.EN ? 'Phone' : 'Teléfono'} type={'tel'} />
              <InputField name='email' label={lang === Lang.EN ? 'Email' : 'Correo Electrónico'} type={'email'} />
              <TextAreaField name='message' label={lang === Lang.EN ? 'Message' : 'Mensaje'} />
              <SumitButton />
            </>
          </Formik>
        }
      </div>
    </div>
  );
};


const Alert = ({ isSuccess, header, message }: IAlert) => {
  return (
    <div className={`bg-success/10 text-success border-2 border-success p-8 rounded-md`}>
      <div className='text-black/80 text-xl font-bold'> {header}</div>
      <div className='text-black/80 text-sm'> {message}</div>
      {!isSuccess && <a href='mailto:daniel@overlapweb.com'>daniel@overlapweb.com</a>}
      {!isSuccess && <a href='mailto:daniel@overlapweb.com'>daniel@overlapweb.com</a>}
    </div>
  )
}