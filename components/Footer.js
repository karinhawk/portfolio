import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footer-items'>
      <a href='https://github.com/karinhawk'>
        <Image src='/github.svg' height={40} width={40} alt="link to my github"/>
        </a>
        <p>Copyright 2022 Karin Hawksworth</p>
        <a href='https://www.linkedin.com/in/karin-hawksworth-5b3513171/'>
        <Image src='/linkedin.svg' height={40} width={40} alt="link to my linkedin"/>
        </a>
      </div>
    </footer>
  )
}

export default Footer