import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { contactSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import { useRouter } from "next/router";
import axios from "axios"
const ContactForm = () => {
  // user
  // const { user } = useSelector(state => state.auth);
  // console.log(user)
   
  const sendMessage = async (ms, val, doc) =>{
    
      console.log(ms, val);
      console.log(process.env.NEXT_PUBLIC_BASE_URL)
       await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`,doc)
            router.push('/')
    
  };

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', msg: '', subject:'' },
    validationSchema: contactSchema,
   onSubmit:  async (values, { resetForm }) => {
       const doc = {
                    _type: "contactForm",
                    name: values.name,
                    email: values.email,
                  subject:values.subject,
                    message: values.msg,
                    
                  };

                  await sendMessage(500, values, doc);
                  alert(JSON.stringify(values, null, 2));
                  // show message

                  messageRef.current.innerText =
                    "Your Message has been successfully sent. We  will contact you asap.";
                  // Reset the values
                  values.name = "";
                  values.email = "";
                  values.subject = "";
                  values.message = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = "";
                  }, 2000);
             
                 
      },
 
    
  })

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className='mb-30'>
        <input value={values.name} onChange={handleChange} onBlur={handleBlur}
          name="name" type="text" placeholder="Enter your Name" />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>
      <div className='mb-30'>
        <input value={values.email} onChange={handleChange} onBlur={handleBlur}
          name="email" type="email" placeholder="Enter your Mail" />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
       <div className='mb-30'>
        <input value={values.subject} onChange={handleChange} onBlur={handleBlur}
          name="subject" type="text" placeholder="Enter your Subject" />
       
      </div>
      <div className='mb-30'>
        <textarea value={values.msg} onChange={handleChange} onBlur={handleBlur} name="msg"
          placeholder="Enter your Massage"></textarea>
        {touched.msg && <ErrorMsg error={errors.msg} />}
      </div>
      <button type="submit" className="tp-btn-yellow">Send Massage</button>
    </form>
  );
};

export default ContactForm;