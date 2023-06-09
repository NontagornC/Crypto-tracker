import {Row,Col,Button} from "react-bootstrap";
import "./Banner.scss"
import { Typewriter } from 'react-simple-typewriter'
import { useNavigate } from "react-router-dom";

const Banner =()=> {
    const navigate = useNavigate()
    return (
        <div className="banner_container">
            <Row>
                <Col className="left">
                    <div className="text_running">
                        <span className="big_text">
                            Discover the Future of Money with NtgCurrency
                        </span>
                        <span className="small_text">
                        <Typewriter
                                words={['Discover the Future of Money with NtgCurrency', 'Join the Cryptocurrency Revolution: Discover the Future of Money with NtgCurrency', 'Your Gateway to the Future of Money and Finance']}
                                loop={10}
                                cursor
                                cursorStyle='.'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>
                    <Button variant="secondary" onClick={()=>navigate(`/detailpage`)}>Get Started</Button>
                </Col>
                <Col className="right">
                    <img src="https://static.vecteezy.com/system/resources/previews/009/394/422/original/3d-illustration-bitcoin-cryptocurrency-png.png" alt="" />
                </Col>
            </Row>
        </div>
    )
}

export default Banner