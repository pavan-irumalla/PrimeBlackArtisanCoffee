import './FavoriteItems.css';

const FavoriteItems = ({ imgSrc, item, price }) => {
  return (
    <div className='FavoriteItems'>
        <img src={imgSrc} alt='image1' className='itemImg' />
        <p className='item'><b>{item}</b></p>
        <p className='price'>{price}</p>
        </div>
  )
}

export default FavoriteItems