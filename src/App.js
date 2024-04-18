import { ReactComponent as RocketLogo} from './assets/images/rocket.svg';
import { ReactComponent as Logo} from './assets/images/logo.svg';
import { ReactComponent as BasketLogo} from './assets/images/basket.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <a href="#"><Logo className='header__logo' /></a>
        <div className="header__menu-wrapper">
          <input id="menu-toggle" type="checkbox" />
          <label className='header__button-container' for="menu-toggle">
            <div className='header__button'></div>
          </label>
          <ul className="header__menu">
            <li><a href="#" className="header__link">Home</a></li>
            <li><a href="#" className="header__link">Products</a></li>
            <li>
              <a href="#" className="header__link">
                <BasketLogo />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='banner'>
        <h1 className='banner__title'>Discover the vast <br />expanses of <span>space</span></h1>
        <h2 className='banner__subTitle'>Where the possibilities are <span>endless!</span></h2>
        <button className='banner__button'>Learn More</button>
      </div>
      <div className='body'>
        <span className='body__label'>Offers</span>
        <div className='body__offers offers'>
          <div className='offers__item-1 offers__item'>
            <h1 className='offers__title'>Move the borders of reality!</h1>
            <p className='offers__subTitle'>Go on a space adventure - it's possible with us!</p>
            <button className='offers__button'>Learn More</button>
          </div>

          <div className='offers__item-2 offers__item'>
            <h1 className='offers__title'>Space is not just stars and planets</h1>
            <p className='offers__subTitle'>Go on a space adventure</p>
            <button className='offers__button'>Learn More</button>
          </div>

          <div className='offers__item-3 offers__item'>
            <h1 className='offers__title'>For those who dream of stars</h1>
            <p className='offers__subTitle'>Our offer: make your dream come true</p>
            <button className='offers__button'>Learn More</button>
          </div>

          <div className='offers__item-4 offers__item'>
            <h1 className='offers__title'>Fulfill your fantastic dreams</h1>
            <p className='offers__subTitle'>Space has never been so close</p>
            <button className='offers__button'>Learn More</button>
          </div>
        </div>
        <div className='body__info'>
          <p className='body__label'>Embark on a space journey</p>
          <div className='body__info-container'>
            <input type="checkbox" className="body__info-state" id="info-toggle" />
            <p className='body__info-text'>
              Travelling into space is one of the most exciting
              and unforgettable adventures that can change your
              life forever. And if you have ever dreamed of
              exploring stars, planets and galaxies, then our
              company is ready to help you realize this dream.
              We offer a unique experience that will allow you
              to go on a space journey and see all the secrets
              of the universe. We guarantee that every moment
              in space will be filled with incredible impressions,
              excitement and new discoveries. Our team of
              professionals takes care of your safety and comfort
              so that you can fully enjoy your adventure in space.
              We offer various options for space excursions.
              <span className='body__info-target'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed malesuada diam eget mi egestas mattis. In in suscipit
                tortor, in condimentum mi. Morbi in metus sed nisl
                eleifend tristique a nec urna. Duis eu tortor non enim
                blandit tincidunt. Vivamus id consequat elit. Maecenas
                faucibus augue quis nunc egestas dignissim eget sed diam.
              </span>
            </p>
            <label for="info-toggle" className="body__info-trigger" />
          </div>
        </div>
      </div>
      <div className='footer'>
        <RocketLogo className='footer__rocketLogo' />
        <p className='footer__text'>Exciting space adventure!</p>
      </div>
    </div>
  );
}

export default App;
