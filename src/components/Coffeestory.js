import './Coffeestory.css';

const Coffeestory = ({title, content, imgSrc}) => {
  return (
    <div className='CoffeeStory'>
        <p className='coffeeStoryContentHeadings'>{title}</p>
        <p className='coffeeContentPara'>{content}</p>
        <img src={imgSrc} alt='image1' className='coffeeContentImg' />
        </div>
  )
}

export default Coffeestory