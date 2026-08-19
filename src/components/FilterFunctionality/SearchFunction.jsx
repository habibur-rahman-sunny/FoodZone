"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchFunction = () => {
    const [searchingInput, setSearchingInput] = useState();
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    
    const handleSearch = ()=> {
        const params = new URLSearchParams(searchParams)
        if(searchingInput){
            params.set("search", searchingInput)
        }else{
            params.delete("search")
        }
        router.push(`${pathname}?${params.toString()}`)
        }
    return (
        <div className="flex w-full gap-2 col-span-2">
            <input
                type="text"
                placeholder="Search your favorite food..."
                className="input input-bordered w-full"
                onChange={e=>setSearchingInput(e.target.value)}
            />

            <button className="btn bg-purple-500 text-white hover:bg-purple-600" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchFunction;