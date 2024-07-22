
import Link from "next/link"
import { Suspense } from "react"
import { TopTrendingSkeleton } from "@/ui/skeletons"
import TopTrending from "@/ui/home/TopTrending"
import { Banner } from "@/ui/home/BannerSlider"
import { AllProducts } from "@/ui/home/AllProducts"
import { GetAllProduct } from '../_lib/Data'

const menuItem = [{
  url: 'laptop.png', title: 'Laptop', segmentTitle: 'laptop'
},
{ url: 'tablet.png', title: 'Tablet', segmentTitle: 'tablet' },
{ url: 'Console.png', title: 'game console', segmentTitle: 'gameConsole' },
{ url: 'tabletAccesories.png', title: 'Tablet Accessories', segmentTitle: 'tabletAccesories' },
{ url: 'laptopAccesories.png', title: 'Laptop  Accessories', segmentTitle: 'laptopAccesories' },

]
export default async function MainPage({ searchParams, }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  return (
    <>
      <div className='h-52' style={{ backgroundImage: `url(/images/banner.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
      <div className="w-3/5 flex flex-col items-center gap-5 -mt-44 self-center" >
        <div className="text-gray-600 bg-slate-100 p-2 text-center bg-opacity-70">
          <h4 >Consumer Electronics</h4>
          <h1>Discover new and trending products</h1>
        </div>
        <div className="bg-slate-50 rounded-xl h-36 w-full shadow-lg flex flex-row justify-around items-center">
          {
            menuItem.map(item => (
              <Link className="flex flex-col items-center" href={`/${item.segmentTitle}/`}>
                <div className="rounded-full bg-gray-200 w-24 h-24">

                  <div className="w-24 h-24" style={{
                    backgroundImage: `url(/images/${item.url})`, backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}></div>

                </div>
                <span>{item.title}</span>
              </Link>
            ))
          }
        </div>
        <Suspense fallback={<TopTrendingSkeleton />}>
        <span className="text-left w-full font-bold pl-5 text-2xl pt-5">Best Sellers
          </span>
        
          <TopTrending />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <Banner />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <span className="text-left w-full font-bold pl-5 text-2xl pt-5">Just for you
          </span>
          <AllProducts/>
        </Suspense>
      </div>

    </>
  )
}