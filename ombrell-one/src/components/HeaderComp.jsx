import React, { useEffect, useState } from 'react'
import { CloseButton, Image } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

export default function HeaderComp() {

    const [home, setHome] = useState(false)
    const path = useLocation()
    const navigate = useNavigate();
    

    useEffect(() => {
        if(path.pathname !== '/') {
            setHome(true)
        } else{
            setHome(false)
        }
    },[path])
    

  return (
    <>
    {home && <CloseButton onClick={() => navigate('/')} className='m-3 bottoneChiudi' />}
    <div className='d-flex justify-content-center'>
          <Image src='/logo.png' className='my-3' rounded />
    </div>
    </>
  )
}
