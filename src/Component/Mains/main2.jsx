import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import './Responsive/Responsive2.css'
import './Main2.css'

const Main2 = () =>{
    return(
        <>
        <div className="container-bapak">
        <Container>
            <Row lg='2' md='2' sm='2' xs='1'>
                <Col>
                <div className="bapak-img">
                <div className="img-main2">
                <img className='gambar-main2' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                </div>
               
 
                <div className="img-main2-first">
                    <img className='gambar-main3' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                    <h4>Stranger Things</h4>
                    <p>Men-download</p>
                </div>
                </div>

                </Col>

                <Col>
                <div className="bapak-text2">
                <div className="text-main2">
                    <h3>Download acara TV untuk menontonnya secara offline.</h3>
                    <p>Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton.</p>
                </div>
                </div>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}

export default Main2