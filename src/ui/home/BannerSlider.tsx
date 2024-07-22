import Image from "next/image";

export const Banner = ()=>{

    return (
        <div className="w-full relative h-48">

        <Image src="https://devicedirectbucket.s3.eu-central-1.amazonaws.com/bn1.jpg" alt="Banner" layout="fill" objectFit="contain"/>
        </div>
    )
}