import React from 'react'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import Layout from '../components/Layout/Layout';

const Contact = () => {
    return (
        <Layout title={"Contact us"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                    <p className="text-justify mt-2">
                        Have a question, concern, or just want to say hello? We'd love to hear from you! At [Store Name], we're committed to providing exceptional service and assistance to our valued customers. Whether you need help with an order, have feedback to share, or simply want to get in touch, our dedicated team is here to assist you every step of the way. Feel free to reach out to us via phone, email, or the contact form below. We aim to respond promptly to all inquiries within 24 hours.
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : www.help@ecommerceapp.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : 012-3456789
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : 1800-0000-0000 (toll free)
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Contact