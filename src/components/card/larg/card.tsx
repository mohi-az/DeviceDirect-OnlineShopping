"use client"
import Image from "next/image";

export const Card = (prop: TopTrendProduct | products) => {

    return (
        <>
            <div className=" gap-2 border-0 flex flex-col max-w-56 min-w-48 max-h-64 h-64 ">
                <div className="relative w-56 h-48" >
                    <Image src={`/images/products/${prop.thumb_img}`} alt={prop.name} 
                    loading="lazy"
                    blurDataURL={`/images/product-placeholder.png`} placeholder="blur"
                         layout="fill"
                          objectFit="contain" 
                          sizes="20vw"
                        />
                </div>
                <span className="text-nowrap  pl-3 overflow-x-hidden text-ellipsis">{prop.name}</span>
                <span className="text-nowrap  pl-3">{prop.brandname}</span>
                <span className="pl-3 font-bold">{prop.price} €</span>
            </div>
        </>
    )
}
export default Card;