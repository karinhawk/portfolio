import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
        <div className='logo-div'>
          <Image width={60} height={40} src='/logo.png'/>
          <h1>Karin</h1>
        </div>
        <Link href="/">
        <a>Home</a>
        </Link>
        <Link href="/about">
        <a>About</a>
        </Link>
        <Link href="/projects">
        <a>Projects</a>
        </Link>
    </nav>
  )
}

export default Navbar