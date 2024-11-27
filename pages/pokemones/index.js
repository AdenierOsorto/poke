import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Pokemon = ({ id }) => {
    const [data, setData] = useState({})
    const router = useRouter();
    const fetchData = async () => {
        setData(await getInformation(id))
    }
    useEffect(() => {
        // Check if router.isFallback is false inside the hook
        if (!router.isFallback) {
            fetchData();
        }
    }, [router.isFallback]); // Add the dependency to ensure useEffect runs when router.isFallback changes

    return (
        <div className="shadow-md bg-gray-200 rounded-xl group hover:bg-gray-400">
            <Image src={data?.sprites?.front_default} className="bg-gray-200 rounded-xl group-hover:bg-gray-400" width={400} height={400} />
            <div className="grid grid-cols-2 gap-1 mb-2 p-2">
                <div className="capitalize font-bold">{data?.name}</div>
                <div className="text-right">#{data?.id}</div>
            </div>

            <div className="grid grid-cols-2 gap-1 mb-2 p-2">
                {data?.types?.map(x => {
                    const color = `bg-is--${x.type.name} text-white text-center rounded-xl px-2`;

                    return (
                        <div key={x.type.name} className={color}>
                            {x.type.name}
                        </div>
                    );
                })}
            </div>
        </div >
    )
}

export default Pokemon

export const getInformation = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    return data
}
