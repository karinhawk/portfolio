import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>Navbar
        <div className='navbar__logo'>
        <h1>Navbar</h1>
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