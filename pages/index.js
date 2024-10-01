import Image from "next/image";
import Link from "next/link";
import Cafe from "../public/cafe.jpg";
import Pokemon from "./pokemones";

const Pokemon2 = ({ pokemon }) => {
  const id = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();
  return (
    <div className="gap-8" key={pokemon.name} >
      <Pokemon id={id} />
    </div>
  );
};
export default function Home({ pokemones }) {
  return (
    // <div>
    //   <Link href={'/chanchitos'}>Ir a chanchitos</Link>
    //   <Image src={Cafe} width={400} height={400} />
    // </div>
    <div className="container mx-auto">

      <div className="p-8 flex justify-center align-center">
        <div className="text-4xl py-2 md:py-8 sm:py-3">Pokeñex</div>
      </div>
      <div className="grid grid-cols-3 px-2 gap-1 md:grid-cols-4 md:gap-4 sm:grid-cols-3">
        {pokemones.map((poke, index) => (
          <Pokemon2 pokemon={poke} key={index} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();

  return {
    props: { pokemones: data.results },
  };
};
