import Image from "next/image";
import Link from "next/link";
import Cafe from "../public/cafe.jpg";

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();
  return (
    <li key={pokemon.name}>
      <Link href={`/pokemones/${id}`}>{pokemon.name}</Link>
    </li>
  );
};
export default function Home({ pokemones }) {
  return (
    // <div>
    //   <Link href={'/chanchitos'}>Ir a chanchitos</Link>
    //   <Image src={Cafe} width={400} height={400} />
    // </div>
    <div>
      <p>Pokemones</p>
      <ul>
        {pokemones.map((poke) => (
          <Pokemon pokemon={poke} key={pokemones.name} />
        ))}
      </ul>
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
