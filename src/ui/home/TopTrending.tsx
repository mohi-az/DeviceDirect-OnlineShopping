import { GetTopTrending } from '../../_lib/Data';
import Card from '../../components/card/medium/card'
'no-store'
export default async function TopTrending() {
    
    const topProducts = await GetTopTrending();
    return (
        <div className="p-5 h-56 bg-white shadow-md rounded-xl w-full flex flex-row gap-3 overflow-x-scroll overflow-y-hidden ">
           
                {
                    topProducts.map(prod => <Card {...prod} />)
                }
        </div>
    )
}