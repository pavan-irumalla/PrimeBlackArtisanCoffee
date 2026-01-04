import logo from './assets/logo.png';
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import image1 from './assets/imagesSectionImg1.jpg';
import image2 from './assets/imagesSectionImg2.jpg';
import image3 from './assets/imagesSectionImg3.jpg';
import image4 from './assets/imagesSectionImg4.jpg';
import ShopSpecialityCoffee from './assets/shopSpecialityImage.jpg';
import experienceImage from './assets/experienceImage.jpg';
import discoverImage from './assets/discoverImage.jpg';
import tasteImage from './assets/tasteImage.jpg';
import "@fontsource/cinzel-decorative";
import "@fontsource/cinzel-decorative/700.css";
import "@fontsource/cinzel-decorative/900.css";
import "@fontsource/didact-gothic";
import "@fontsource/didact-gothic/400.css";

import './App.css';

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
            <ShoppingCartIcon />Cart
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
        <img src='' alt='storePickupImg' />
      </div>
      <div className='coffeeStorySection'>
        <h5>Our Speciality Coffee Story</h5>
        <div className='coffeeStoryCards'>
        <div className='CoffeeStory'>
          <p className='coffeeStoryContentHeadings'>Shop Speciality Coffee</p>
          <p>Premium speciality coffees sourced from</p>
          <p>across India, freshly roasted</p>
          <p>and packed in small batches.</p>
          <img src={ShopSpecialityCoffee} alt='image1' />
        </div>
        <div className='CoffeeStory'>
          <p className='coffeeStoryContentHeadings'>Experience Fine Coffee</p>
          <p>Carefully selected Indian speciality beans,</p>
          <p>roasted in small batches to</p>
          <p>ensure rich flavour and freshness.</p>
                    <img src={experienceImage} alt='image1' />

        </div>
        <div className='CoffeeStory'>
          <p className='coffeeStoryContentHeadings'>Discover Artisanal Coffee</p>
          <p>Exceptional coffees from India’s finest</p>
          <p>regions, expertly roasted and</p>
          <p>packed in small batches.</p>
                    <img src={discoverImage} alt='image1' />

        </div>
        <div className='CoffeeStory'>
          <p className='coffeeStoryContentHeadings'>Taste Authentic Brews</p>
          <p>High-quality speciality coffees from across</p>
          <p>India, small-batch roasted for</p>
          <p>a smooth and memorable cup.</p>
                    <img src={tasteImage} alt='image1' />

        </div>
        </div>
      </div>

    </div>
  );
}

export default App;
