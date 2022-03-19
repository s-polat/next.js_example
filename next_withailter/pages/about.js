import Link from 'next/link'
import React from 'react'

export default function about() {
  return (
    <div>
        <h1>
            About
        </h1>

        <Link href={'/'}>
                <a>
                    Home
                </a>
        </Link>
    </div>
  )
}
