import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
    const [auth] = useAuth();
    return (
        <Layout title={"Dashboard - Ecommerce App"}>
            <div className="container-fluid m-3 p-3 dashboard">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="card w-75 p-3">
                            <h3 className="text-center mb-4">{auth?.user?.name}'s Dashboard</h3>
                            <h5 style={{ color: "#e27d60" }}> Name : {auth?.user?.name}</h5>
                            <h5 style={{ color: "#e27d60" }}>Email : {auth?.user?.email}</h5>
                            <h5 style={{ color: "#e27d60" }}>Address : {auth?.user?.address}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;