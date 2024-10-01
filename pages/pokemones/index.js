import Image from "next/image";
import Link from "next/link";
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
        <div>
            <Image src={data?.sprites?.front_default} className="bg-gray rounded-xl" width={400} height={400} />
            <div className="grid grid-cols-2 gap-1 mb-2">
                <div className="capitalize font-bold">{data?.name}</div>
                <div className="text-right">#{data?.id}</div>
            </div>

            <div className="grid grid-cols-2 gap-1 mb-2">
                {data?.types?.map(x => {
                    // Define the dynamic class name
                    const color = `bg-is--${x.type.name} text-white text-center rounded-xl px-2`;

                    // Return JSX for each type
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


// export const getStaticProps = async ({ params }) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
//     const data = await response.json()
//     return { props: { data } }
// }
export const getInformation = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    console.log({ data })
    return data
}

// export const getStaticPaths = async () => {
//     const paths = [
//         { params: { id: '1' } },
//         { params: { id: '2' } },
//     ]

//     return {
//         paths: paths,
//         fallback: 'blocking',
//     }
// }
// export const getServerSideProps = async ({params}) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
//     const data = await response.json()
//     return {props: {data}}
// }