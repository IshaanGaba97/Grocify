import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
    return (
        <Layout title={"About us - Ecommerce app"}>
            <h1>About Us</h1>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">
                        Welcome to [Your E-commerce Website Name], your ultimate destination for all your shopping needs! At [Your E-commerce Website Name], we're passionate about providing you with a seamless and enjoyable online shopping experience. With a wide range of products spanning across categories such as fashion, electronics, home decor, beauty, and much more, we aim to cater to every taste and preference. Our mission is to empower customers by offering high-quality products, competitive prices, and exceptional customer service. Whether you're searching for the latest fashion trends, upgrading your tech gadgets, or sprucing up your home, we've got you covered. Shop with confidence knowing that we prioritize your satisfaction above all else. Join our growing community of satisfied customers and experience the convenience of shopping at [Your E-commerce Website Name] today!
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default About