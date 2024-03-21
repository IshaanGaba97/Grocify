import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
    const categories = useCategory();
    return (
        <Layout title={"All Categories"}>
            <div className="container" style={{ marginTop: "110px" }}>
                <h3 className="text-center" style={{ color: "#e27d60" }}>🛒 Explore New Categories </h3>
                <div className="row container">
                    {categories.map((c) => (
                        <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
                            <div className="card catt">
                                <Link to={`/category/${c.slug}`} className="btn cat-btn">
                                    {c.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout >
    );
};

export default Categories;
