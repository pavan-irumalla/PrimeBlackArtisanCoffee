import logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footerTopContent'>
        <div>
          <h5>Free Shipping & Returns</h5>
          <p>
            For all orders over 999
          </p>
        </div>
        <div>
          <h5>Secure Payment</h5>
          <p>
            We ensure secure payment
          </p>
        </div>
        <div>
          <h5>Money Back Guarantee</h5>
          <p>
            Returning money 30 days</p>
        </div>
        <div>
          <h5>24/7 Customer Support</h5>
          <p>
            Friendly customer support</p>
        </div>
      </div>
            <nav className="footerNav">
                <img src={logo} alt="logo" className="LogoImg" />
                <span>
                    <button className="navButton">My Locations</button>
                    <button className="navButton">Contact</button>
                    <button className="navButton"> Terms & Conditions</button>
                    <button className="navButton">Refunds & Shipping</button>
                </span >
                <span className="designerContent">
                    <h5 className="designedBy">Designed <br /> By </h5> <h3>Pavannn<br />____12</h3>
                </span>
            </nav >
            <div className="CopyRight">
                <p>@ 2026 Prime Black Artisan Coffee. All rights reserved.</p> </div>
        </div >
    )
}
export default Footer