import { Col,Row} from "react-bootstrap"
import { RiSecurePaymentLine } from "react-icons/ri";
import { SiSecurityscorecard } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { GiTakeMyMoney,GiPodiumWinner,GiTrade } from "react-icons/gi";
import "./About.scss"

const About =()=> {
    return (
        <div className="about_container">
            <Row className="big_text">
                <Col >Make your crypto transections easier</Col>
            </Row>
            <Row className="small_text">
                <Col>We Guarantee the security of your data transection</Col>
            </Row>
            <Row className="item_container">
                <Col md={4} sm={6}>
                    <div className="svg_box">
                        <RiSecurePaymentLine/>
                    </div>
                    <div className="text_box">
                        <h6>Payment Option</h6>
                        <span>
                            variety of payment options for users to choose from, including credit/debit cards, bank transfers, and various cryptocurrencies. This makes it easy for users to purchase and sell cryptocurrencies using their preferred method of payment.
                        </span>
                    </div>
                </Col>
                <Col md={4} sm={6}>
                    <div className="svg_box">
                        <SiSecurityscorecard/>
                    </div>
                    <div className="text_box">
                        <h6>Strong security</h6>
                        <span>
                            implementing various measures to protect user data and funds. This includes features such as two-factor authentication, encryption, and regular security audits to ensure that user accounts are protected from hacks and other security threats.
                        </span>
                    </div>
                </Col>
                <Col md={4} sm={6}>
                    <div className="svg_box">
                        <BiSupport/>
                    </div>
                    <div className="text_box">
                        <h6>24/7 support</h6>
                        <span>
                            24/7 customer support to assist users with any issues or questions they may have. This can include live chat, email support, and a dedicated support team that is always available to help users navigate the platform.
                        </span>
                    </div>
                </Col>
                <Col md={4} sm={6}>
                    <div className="svg_box">
                        <GiTakeMyMoney/>
                    </div>
                    <div className="text_box">
                        <h6>Competitive commission</h6>
                        <span>
                            competitive commission rates for buying and selling cryptocurrencies, ensuring that users can make transactions at a fair price. This can be particularly important for users who frequently trade cryptocurrencies and want to minimize transaction costs.
                        </span>
                    </div>
                </Col>
                <Col md={4} sm={6}>
                    <div className="svg_box">
                        <GiPodiumWinner/>
                    </div>
                    <div className="text_box">
                        <h6>Reliable order execution</h6>
                        <span>
                            website is designed to execute trades quickly and efficiently, ensuring that users can buy and sell cryptocurrencies without delays or technical issues. This includes features such as real-time market data, fast order execution, and user-friendly trading interfaces.
                        </span>
                    </div>
                </Col>
                <Col md={4} sm={6}>
                    <div className="svg_box">
                        <GiTrade/>
                    </div>
                    <div className="text_box">
                        <h6>Range of API solutions</h6>
                        <span>
                            range of API solutions for developers and businesses, including REST APIs, WebSocket APIs, and FIX APIs. This allows developers to build custom trading applications and integrate your platform with other software tools, making it more accessible and versatile for a wider range of users.
                        </span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default About