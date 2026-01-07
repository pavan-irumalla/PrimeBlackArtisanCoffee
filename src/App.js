import "@fontsource/cinzel-decorative";
import "@fontsource/cinzel-decorative/700.css";
import "@fontsource/cinzel-decorative/900.css";
import "@fontsource/didact-gothic";
import "@fontsource/didact-gothic/400.css";
import './App.css';
import logo from './assets/logo.png';
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import image1 from './assets/imagesSectionImg1.jpg';
import image2 from './assets/imagesSectionImg2.jpg';
import image3 from './assets/imagesSectionImg3.jpg';
import image4 from './assets/imagesSectionImg4.jpg';
import Coffeestory from './components/Coffeestory';
import ShopSpecialityCoffee from './assets/shopSpecialityImage.jpg';
import experienceImage from './assets/experienceImage.jpg';
import discoverImage from './assets/discoverImage.jpg';
import tasteImage from './assets/tasteImage.jpg';
import GiftSectionImg from './assets/GiftSectionImg.jpg';
import signatureEspressoImage from './assets/signatureEspresso.jpg';
import vanillaLatteImage from './assets/vanillaLatte.jpg';
import coldBrewImage from './assets/coldBrew.jpg';
import FavoriteItems from './components/FavoriteItems';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img8 from './assets/8.jpg';
import img9 from './assets/9.jpg';
import Footer from "./components/core/Footer";

function App() {
  return (

    <div className='Page'>
      <nav className='headerNav'>
        <img src={logo} alt='logo' className='LogoImg' />
        <span>
          <button className='navButton'>SHOP</button>
          <button className='navButton'>MENU</button>
          <button className='navButton'>LOCATIONS</button>
        </span>
        <span>
          <button className='navButton'>
            <SearchIcon />
          </button>
          <button className='navButton'>
            <PersonIcon />
          </button>
          <button className='buttonCart'>
            <ShoppingCartIcon /><b>Cart</b>
          </button>
        </span>
      </nav>
      <div className='ImagesSection'>
        <div>
          <img src={image1} alt='image1' />
        </div>
        <div>
          <img src={image2} alt='image2' />
        </div>
        <div>
          <img src={image3} alt='image3' />
        </div>
        <div>
          <img src={image4} alt='image4' />
        </div>
      </div>
      <div className='secondSection'>
        <div>
          <h5>Roasted Fresh.</h5>
          <h5>Served at Its Best.</h5>
          <p>
            Our coffees are carefully roasted and brewed within a<br />
            strict six-week window to deliver maximum freshness and flavour.
          </p>
        </div>
        <div>
          <h5>Three Spaces.</h5>
          <h5>One Thoughtful Experience.</h5>
          <p>
            Each location is uniquely designed to feel warm, calm, and<br />
            welcoming — built for comfort and connection.
          </p>
        </div>
        <div>
          <h5>Indian Beans.</h5>
          <h5>World-Class Standards.</h5>
          <p>
            We work exclusively with Indian specialty coffees,<br />
            prepared using globally recognized methods and precision.</p>
        </div>
      </div>
      <div className='thirdSection'>
        <div><img src={logo} alt='storePickupLogo' className='storePickupLogo' /></div>
        <div>
          <button className='storePickupButton'>Store Pickup</button>
          <p className='storePickupText'>
            Skip the wait and pick up your order directly from our<br />
            store! Simply place your order online, choose the store<br />
            pickup option at checkout, and we’ll have your items<br />
            freshly prepared and ready when you arrive. It’s quick,<br />
            convenient, and perfect for when you’re on the go.</p>

        </div>
      </div>
      <div className='coffeeStorySection'>
        <h5 className='coffeeStoryTitle'>Our Speciality Coffee Story</h5>
        <div className='coffeeStoryCards'>
          <Coffeestory
            title="Shop Speciality Coffee"
            content="Premium speciality coffees sourced from across India, freshly roasted and packed in small batches."
            imgSrc={ShopSpecialityCoffee}
          />
          <Coffeestory
            title="Experience Fine Coffee"
            content="Carefully selected Indian speciality beans, roasted in small batches to ensure rich flavour and freshness."
            imgSrc={experienceImage}
          />
          <Coffeestory
            title="Discover Artisanal Coffee"
            content="Exceptional coffees from India’s finest regions, expertly roasted and packed in small batches."
            imgSrc={discoverImage}
          />
          <Coffeestory
            title="Taste Authentic Brews"
            content="High-quality speciality coffees from across India, small-batch roasted for a smooth and memorable cup."
            imgSrc={tasteImage}
          />
        </div>
      </div>
      <div className='giftSection'>
        <div><img src={GiftSectionImg} alt='giftSectionImg' className="giftSectionImg" /></div>
        <div className='giftSectionContent'>
          <h5>GIVE A PRIME GIFT</h5>
          <p>From gift cards to brewing essentials, explore our<br />
            curated gifts and sets. A thoughtful way to tell the<br />
            coffee lovers in your life you care.</p>
          <button className='giftSectionButton'>Shop Gift Cards</button>
        </div>
      </div>

      {/* // Favorite Items Section */}
      <div className='favoriteItemsSection'>
        <h5 className='favoriteItemsTitle'>Our Favorites</h5>
        <div className='favoriteItemsCards'>
          <FavoriteItems
            imgSrc={signatureEspressoImage}
            item="Signature Espresso"
            price="₹ 280"
          />
          <FavoriteItems
            imgSrc={vanillaLatteImage}
            item="Vanilla Latte"
            price="₹ 320"
          />
          <FavoriteItems
            imgSrc={coldBrewImage}
            item="Cold Brew"
            price="₹ 350"
          />
        </div>
      </div>



      <div className='favoriteItemsSection spaceTop'>
        <div className='collectionCards'>
          <div> <img src={img1} alt="img1" /> </div>
          <div> <img src={img2} alt="img2" /> </div>
          <div> <img src={img3} alt="img3" /> </div>
          <div> <img src={img4} alt="img4" /> </div>
          <div> <img src={img5} alt="img5" /> </div>
          <div> <img src={img6} alt="img6" /> </div>
          <div> <img src={img7} alt="img7" /> </div>
          <div> <img src={img8} alt="img8" /> </div>
          <div> <img src={img9} alt="img9" /> </div>
        
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
