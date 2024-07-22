"use client";

import { useEffect, useState } from 'react';
import Card from '@/components/card/larg/card'
export const AllProducts = async () => {
    const [products, setProducts] = useState<products[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("/api/products?page=1");
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const result = await response.json();
            setProducts(result);
        };

        fetchProducts();
    }, []);
    const nextPage = () => {

    }
    return (
        <>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full justify-between bg-white rounded-xl shadow-lg p-5
         overflow-hidden'>

                {products && products.map(val => <Card {...val} />)}
                <div>
                    {/* <Link className='bg-teal-600 pl-10 pr-10 pt-3 pb-3 rounded-md text-white' href={`/?page=${currentpage + 1}`}>Load more...
                    </Link> */}
                    <button className='bg-teal-600 pl-10 pr-10 pt-3 pb-3 rounded-md text-white' onClick={nextPage}>Load more...</button>
                </div>
            </div>

        </>
    )
}