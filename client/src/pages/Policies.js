import React from 'react'
import Layout from '../components/Layout/Layout';

const Policies = () => {
    return (
        <Layout title={"Privacy Policy"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p>Personal Information: When you place an order or register an account with us, we may collect personal information such as your name, email address, shipping address, and payment details.
                    </p>
                    <p>Usage Information: We may collect information about how you interact with our website, including your browsing activity, device information, and IP address.</p>
                    <p>Cookies: We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can manage your cookie preferences through your browser settings.</p>
                </div>
            </div>
        </Layout>
    )
}

export default Policies;