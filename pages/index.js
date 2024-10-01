import Image from "next/image";
import Link from "next/link";
import Cafe from "../public/cafe.jpg";
import Pokemon from "./pokemones";
import { useRouter } from 'next/router'
const Pokemon2 = ({ pokemon }) => {
  const router = useRouter()
  const rediretPokemonByID = (id) => {
    router.push(`/pokemones/${id}`)
  }
  const id = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();
  return (
    <div className="gap-8 cursor-pointer" key={pokemon.name} onClick={() => rediretPokemonByID(id)}>
      <Pokemon id={id} />
    </div>
  );
};
export default function Home({ pokemones }) {
  return (
    <div className="grid grid-cols-3 px-2 gap-1 md:grid-cols-4 md:gap-4 sm:grid-cols-3">
      {pokemones.map((poke, index) => (
        <Pokemon2 pokemon={poke} key={index} />
      ))}
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
