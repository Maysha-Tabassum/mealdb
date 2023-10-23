/*eslint-disable*/
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CategoryDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate()
    const [{ idCategory, strCategory, strCategoryDescription, strCategoryThumb }] = data.categories;
    const category = data.categories[idCategory]

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h2>All details about this food.</h2>
            <img className='m-auto pt-20 pb-5' src={strCategoryThumb} alt="" />
            <p>id: {idCategory}</p>
            <h2>Name: {strCategory}</h2>
            <p>detais: {strCategoryDescription}</p>
            <button onClick={handleBack}>Go back</button>
        </div>
    );
};

export default CategoryDetails;