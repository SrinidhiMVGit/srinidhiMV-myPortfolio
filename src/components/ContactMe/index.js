import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

import './ContactMe.css';

const ContactMe = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: {errors} } = useForm(); 


    const service_id = 'srinidhi_mv_12345';
    const template_id = 'template_id_0'; 
    const user_id = 'user_32xP2EM36jMlB2TX6No7k';

    const onSubmit = ( data, r ) => {
        sendEmail(
            service_id, 
            template_id,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            user_id
            );

            r.target.reset();
    }

    const sendEmail = (service_id, template_id, variables, user_id) => {
    
        emailjs.send(service_id, template_id, variables, user_id)
          .then(() => {
              setSuccessMessage('Form sent successfully!!!, I will contact you as soon as possible.');
          }).catch((err) => {
                console.error(`Something went wrong ${err}`);
          });
      }

    return (
        <div id="contactme" className="contacts">
                <div className="text-center">
                    <h1>Contact Me</h1>
                    <p>Please fill out the form and please explain your requirement. I'll get back to you as soon as possible. Thanks.</p>
                    <span className="success-message">{successMessage}</span>
                </div>
                <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                                <input
                                    id="name"
                                    text="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    aria-invalid={errors.name ? "true" : "false"}
                                    {...register("name",{
                                        required: "Please enter your name",
                                        maxLength: {
                                            value: 20,
                                            message: "Please enter name less than 20 characters"
                                        }
                                        })
                                    }
                                />
                            <div className="line" />
                            </div>
                            <span className="error-message">{errors.name && errors.name.message}</span>
                            <div className="text-center">
                                <input
                                    id="phone"
                                    text="text"
                                    className="form-control"
                                    placeholder="Phone"
                                    name="phone"
                                    aria-invalid={errors.phone ? "true" : "false"}
                                    {
                                        ...register("phone",{
                                            required: "Please enter your phone number",

                                        })
                                    }
                                />
                            <div className="line" />
                            </div>
                            <span className="error-message">{errors.phone && errors.phone.message}</span>
                            <div className="text-center">
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    aria-invalid={errors.email ? "true" : "false"}
                                    {
                                        ...register("email",{
                                            required: "Please enter your email id",
                                            pattern: {
                                                value: /^[A-Za-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid email"
                                            }
                                        })
                                    }
                                />
                                <div className="line" />
                            </div>
                            <span className="error-message">{errors.email && errors.email.message}</span>
                            <div className="text-center">
                                <input
                                    id="subject"
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    aria-invalid={errors.subject ? "true" : "false"}
                                    {
                                        ...register("subject",{
                                            required: "OOPS, you forgot to add the subject!!!"
                                        })
                                    }
                                />
                                <div className="line" />
                            </div>
                            <span className="error-message">{errors.subject && errors.subject.message}</span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <textarea
                                    id="description"
                                    type="text"
                                    className="form-control"
                                    placeholder="Please click here describe your requirement"
                                    name="description"
                                    aria-invalid={errors.description ? "true" : "false"}
                                    {
                                        ...register("description", {
                                            required: "Please describe shortly your needs..."
                                        })
                                    }
                                />
                                <div className="line" />
                            </div>
                            
                            <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                        </div>
                    </div>      
            </form>
                </div>
        </div>
    )
}

export default ContactMe;