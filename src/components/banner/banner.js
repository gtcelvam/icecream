import './banner.css'
function Banner() {
    const myStyle={
        backgroundImage: "url('./images/bg/banner.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
  return (
    <div className='banner-container' >
        <div className="banner-bg" style={myStyle}></div>
        <div className="banner-img">
            <img className='banner-bg-img' src='./images/bg/bannerimg.png' alt='image'/>
            <div className="banner-title">
                <h1>Celebrate Happiness</h1>
                <p>With the goodness of milma</p>
            </div>
            <div className="banner-logo">
                <div className="ice-cream-logo">
                    <img src='./images/vector/Vector.svg' alt='logo'/>
                    <p className='milma'>milma</p>
                </div>
                <div className="ice-cream-title">
                    <p>Ice Cream</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner