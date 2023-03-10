import {Row,Col} from 'react-bootstrap';
import { AiFillFacebook,AiFillTwitterSquare,AiFillLinkedin,AiFillGithub } from "react-icons/ai";
import "./Footer.scss"

const Footer =()=>{
    return (
        <div className="footer_container">
            <Row className='mx-auto'>
                <Col>
                    <Row className='header'>NTGCurrency</Row>
                    <Row className='text_container'>
                        <Row className='text'>Cypto Website</Row>
                        <Row className='text'>Make youe crypto transections easier</Row>
                    </Row>
                    <Row className='text_container'>
                        <Row className='text'>ntgcurrency@gmail.com</Row>
                        <span>
                            <AiFillFacebook/>
                            <AiFillTwitterSquare/>
                            <AiFillLinkedin/>
                            <AiFillGithub/>
                        </span>
                    </Row>
                    
                </Col>
                <Col>
                    <Row className='header'>About</Row>
                    <Row className='text_container'>
                        <Row className='text'>About us</Row>
                        <Row className='text'>Currency data</Row>
                        <Row className='text'>Exchange data</Row>
                    </Row>
                </Col>
                <Col>
                    <Row className='header'>Service</Row>
                    <Row className='text_container'>
                        <Row className='text'>24/7 Support</Row>
                        <Row className='text'>Strong security</Row>
                        <Row className='text'>Payment Option</Row>
                        <Row className='text'>Support Center</Row>
                    </Row>
                </Col>
                <Col>
                    <Row className='header'>Product</Row>
                    <Row className='text_container'>
                        <Row className='text'>NFT</Row>
                        <Row className='text'>Trust Wallet</Row>
                        <Row className='text'>Buy BNB</Row>
                        <Row className='text'>Buy Bitcoin</Row>
                        <Row className='text'>Buy XRP</Row>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Footer