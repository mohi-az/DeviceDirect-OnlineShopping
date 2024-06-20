
import image from '../../assets/banner.jpg'
import Image from 'next/image';
import clsx from 'clsx'
export default function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <>
            <div className='h-52' style={{ backgroundImage: `url(/images/banner.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            </div>

            <div className="-mt-44 flex flex-row justify-center">
                {children}
            </div>
        </>
    )
}