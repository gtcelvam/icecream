import './footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="product-logo-container">
            <div className="footer-logo">
                <div className="ice-cream-logo">
                    <img src='./images/vector/Vector.svg' alt='logo'/>
                    <p className='milma'>milma</p>
                </div>
                <div className="ice-cream-title">
                    <p>Ice Cream</p>
                </div>
            </div>
        </div>
        <div className="product-social-contianer">
            <div className="social-icons">
                <p>Follow us</p>
                <p><i class="fab fa-facebook-square"></i></p>
                <p><i class="fab fa-youtube"></i></p>
                <p><i class="fab fa-linkedin"></i></p>
                <p><i class="fab fa-instagram"></i></p>
            </div>
            <div className="copyright">&#169; <span>milmaicecream. All rights Reserved</span></div>
        </div>
    </div>
  )
}

export default Footer