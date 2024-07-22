import { cache } from 'react'
import 'server-only'
import { Pool } from 'pg'

const pool = new Pool();
export const GetTopTrending = async (): Promise<TopTrendProduct[]> => {
    try {
        'no-store'
        const result = await pool.query("SELECT * FROM public.vsales limit 12")
        return result.rows as TopTrendProduct[];
    }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("unable to fetch top trending data")
    }
}
export const GetAllProduct = async (offset: number, pageSize: number = 10): Promise<products[]> => {

    try {

        const result = await pool.query(`select * from public.vproducts limit ${pageSize} offset ${offset * pageSize}`)
        return result.rows as products[];

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("unable to fetch top trending data")
    }

}
