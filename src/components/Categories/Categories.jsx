/*eslint-disable*/
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Categories = () => {
    const data = useLoaderData();

    return (
        <div className='pt-5'>
            <h3 className='pt-5 pb-5'>Total foods: {data.categories.length}</h3>
            <div className='grid grid-cols-3 gap-8'>
                {
                    data.categories.map(category => <Category
                        key={category.idCategory}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;