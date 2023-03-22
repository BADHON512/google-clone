import CardItem from '@/component/CardItem';
import React from 'react';
import { data } from './../utils/data';

const bata=data.product
const page = () => {
    return (
        <div className='dis'>
           {
            bata.map((value,index)=>(<CardItem product={value} key={index}></CardItem>))
           }
        </div>
    );
};

export default page;