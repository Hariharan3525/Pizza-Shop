import React, { useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Menucard from './Menucard'

const Menu = () => {
    const [menu] = useState([1,2,3,4,5,6,7,8])


  return (
    <section id='menu' className='bg-light'>
        <Container>
            <div className="text-center">
                <h3 className="text-primary my-3 py-5">Treat Yourself with our Everyday Menu <i class="bi bi-tiktok"></i></h3>
            </div>
            <Row>
                {menu.map((item)=>{
                    return(
                        <Col key={item} md={6} lg={4} xl={3}>
                            <Menucard/>
                        </Col>
                    )})
                }
            </Row>
        </Container>

    </section>
  )
}

export default Menu