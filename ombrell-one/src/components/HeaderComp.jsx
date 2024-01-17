import React from 'react'
import { Image } from 'react-bootstrap'

export default function HeaderComp() {
  return (
    <div className='d-flex justify-content-center'>
          <Image src='/logo.png' className='my-3' rounded />
        </div>
  )
}
