import React, { useState } from 'react'
import { Container, Navbar, Form, Row, Col } from 'react-bootstrap'
import cities from '../city.list.json'
import CreazioneListaSearchComp from '../components/CreazioneListaSearchComp'

export default function HomePage() {
  
    const [dati, setDati] = useState([])


  const handlerChangeSearch = (e) => {
    const cerca = e.target.value
    if(e.target.value.length > 2) {
        function capitalizeFirstLetter(string) {
            const lowercaseString = string.toLowerCase();
            return lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);
        }
       let goodCity = capitalizeFirstLetter(cerca)
       const results = cities.filter(city => city.name.includes(goodCity));
       setDati(results)
    //    console.log(dati);
    } else {
        setDati([])
    }


  }
  
  
    return (
        <Container>
            <Navbar className="bg-body-tertiary justify-content-between">
                <Row className='w-100 m-4 d-flex align-items-center'>
                    <Col md="12" >
                        <Form.Control
                        type="text"
                        placeholder="Search your location..."
                        className=" mr-sm-2"
                        onChange={handlerChangeSearch}
                        />
                    </Col>
                </Row>
            </Navbar>
            {setDati && <CreazioneListaSearchComp cities={dati} /> }
        </Container>
  )
}
