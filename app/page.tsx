import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welkom John Doe.</h1>
      <p>Organiseer je favoriete recepten <Link href="/recipes">hier ➡</Link>!</p>
    </div>
  );
}
