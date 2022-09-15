import { ContactFormWrapper } from "../atoms/styled-pages"
import user from '../assets/images/User.png'
import emailIcon from '../assets/svg/Email.svg'
import MsgIcon from '../assets/svg/Message.svg'
import { StyledButtons } from "../atoms/styled-buttons"
import { useFormik } from 'formik'
import * as yup from 'yup';
import { useToast } from '@chakra-ui/react'

function ContactForm() {
    const successToast = useToast();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: yup.object({
            name: yup.string()
                    .label('Name')
                    .required(),
            email: yup.string()
            .label('Email Address')
            .email()
            .required(),
            message: yup.string()
            .label('Message')
            .required()
        }),

        onSubmit: function(values, {resetForm}) {
            console.log(values)
            successToast({
                title: ' Message Submitted',
                description: "We will get back to you shortly.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              });
              resetForm();
        }
    })
  return (
    <ContactFormWrapper onSubmit={formik.handleSubmit}>
        <div className="input-wrapper">
        <div className="input-group">
        <img src={user} alt="icon" />
            <input
             className={formik.touched.name && formik.errors.name ? 'error' : ''}
             onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}
            type="text"
            name="name"
            id="name"
            placeholder="Your Name" />
        </div>
        {formik.touched.name && formik.errors.name && (
               <small className='errorText'>{formik.errors.name}</small>)}
        </div>
        <div className="input-wrapper">
        <div className="input-group">
            <img src={emailIcon} alt="icon" />
            <input
             className={formik.touched.email && formik.errors.email ? 'error' : ''}
             onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
             type="text"
            name="email"
            id="email"
            placeholder="Email" 
            required/>
        </div>
        {formik.touched.email && formik.errors.email && (
               <small className='errorText'>{formik.errors.email}</small>)}
        </div>
        <div className="input-wrapper">
        <div className="input-group">
            <img src={MsgIcon} alt="icon" />
            <textarea
             className={formik.touched.message && formik.errors.message ? 'error' : ''}
             onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message}
             type="text"
            name="message"
            id="message"
            placeholder="Message" />
        </div>
        {formik.touched.message && formik.errors.message && (
               <small className='errorText'>{formik.errors.message}</small>)}
        </div>
        <StyledButtons type="submit">
            Leave a message
        </StyledButtons>
    </ContactFormWrapper>
  )
}

export default ContactForm