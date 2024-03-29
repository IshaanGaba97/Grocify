import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment";

const Users = () => {
    const [users, setUsers] = useState([]);

    const getAllUsers = async () => {
        try {
            const { data } = await axios.get("/api/v1/auth/all-users");
            setUsers(data.users);
            toast.success("All Users Data Fetched Successfully");
        } catch (error) {
            console.log(error);
            toast.error("Someething Went Wrong");
        }
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <Layout title={"Dashboard - All Users"}>
            <div className="row dashboard">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                    <h1 className="text-center" style={{ color: "#e27d60" }}>All Users List</h1>
                    <div className="d-flex flex-wrap">
                        <table className="table">
                            <thead>
                                <tr >
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Joined</th>
                                </tr>
                            </thead>
                            {users?.map((u, i) => (

                                <tbody>
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{u?.name}</td>
                                        <td>{u?.email}</td>
                                        <td>{u?.phone}</td>
                                        <td>{u?.address}</td>
                                        <td>{moment(u?.createAt).fromNow()}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Users;
