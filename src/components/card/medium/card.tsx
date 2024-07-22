import Image from "next/image";

export const Card = (prop: TopTrendProduct) => {

    return (
        <>
            <div className=" gap-2 border-1 flex flex-col max-w-48 min-w-48 max-h-56">
                <div className="w-full  relative  h-2/4 min-h-2/4" >
                    <Image src={`/images/products/${prop.thumb_img}`} alt={prop.name} layout="fill" objectFit="contain"/>
                </div>
                <span className="text-nowrap  pl-3 overflow-x-hidden text-ellipsis">{prop.name}</span>
                {/* <span>{prop.brandname}</span> */}
                <span className="pl-3 font-bold">{prop.price} €</span>
            </div>
        </>
    )
}
export default Card;