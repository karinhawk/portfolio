import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 5000)
    }, [])

  return (
    <div className='not-found'>
        <h1>Oops!</h1>
        <h2>That page cannot be found</h2>
        <Link href="/"><a>Return to Home</a></Link>
    </div>
  )
}

export default NotFound