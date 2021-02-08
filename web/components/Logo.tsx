import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src="/logo-dark.svg" alt="zuhaus logo" width={45} height={22} />
      </a>
    </Link>
  )
}

export default Logo
