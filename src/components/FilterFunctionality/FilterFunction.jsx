"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";


const FilterFunction = () => {


    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const handleFilter = (category) => {
        const params = new URLSearchParams(searchParams)
        if(category&&category !== "All"){
            params.set("category", category)
        }else{
            params.delete("category")
            params.delete("search")
        }
        router.push(`${pathname}?${params.toString()}`)
    }
    return (
        <div className="w-full col-span-1">
            <select onChange={e => handleFilter(e.target.value)} className="select select-bordered w-full">
                <option>All</option>
                <option>burger</option>
                <option>biriyani</option>
                <option>beverage</option>
                <option>dish</option>
            </select>
        </div>
    );
};

export default FilterFunction;