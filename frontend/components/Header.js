import Link from 'next/link';
export default function Header() {
  return (
    <header className="p-4 bg-white shadow sticky top-0 z-10">
      <nav className="container mx-auto flex justify-between">
        <Link href="/"><a className="text-xl font-bold">ApolloClone</a></Link>
        <ul className="flex space-x-4">
          <li><a>Home</a></li>
          <li><a>Specialties</a></li>
          <li><a>Doctors</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
