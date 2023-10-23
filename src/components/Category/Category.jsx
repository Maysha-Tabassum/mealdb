/*eslint-disable*/
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Category = ({ category }) => {
    const navigate = useNavigate()
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription
    } = category;

    const handleNavigate = () => {
        navigate(`/category/${idCategory}`)
    }

    return (
        <div>
            <img src={strCategoryThumb} alt="" />
            <h3>id: {idCategory}</h3>
            <h3>Name: {strCategory}</h3>
            <Link to={`/category/${idCategory}`}>Show Details</Link>
            <p><button onClick={handleNavigate}>Buy Now</button></p>

        </div>
    );
};

export default Category;