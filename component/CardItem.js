import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardItem = ({ product }) => {
    const { name, image, brand } = product
    return (
        <div className='card'>
            <Link href={`/product/${product.slug}`}>
                <Image src={image} height={250} width={300} alt="image not found" />
            </Link>
            <div className='card-text'>
                <Link href={`/product`}>
                    <h1>{name}</h1> </Link>
                <p>Price {product.price}</p>
                <h3> Brand {brand}</h3>
                <p> Rating {product.rating}</p>
            </div>
            <div>
                <button className='llg'>Add to Card</button>
            </div>

        </div>
    );
};

export default CardItem;