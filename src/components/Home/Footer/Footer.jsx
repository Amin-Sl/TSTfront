import React from 'react'
import zanoIMG from "../../../assets/images/zanoIMG.png"
import logo from "../../../assets/images/loggo.png"
import {
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import insta from "../../../assets/images/insta.png"
import {Link} from "react-router-dom"
import "./footer.css"
const Footer = () => {
  return (

<footer class="footer">
<div class="container">
 <div class="row">
   <div class="footer-col">
     <h4>تی اس تی اسپورت</h4>
     <ul>
       <li><Link to="/" ><h2>خانه</h2></Link></li>
       <li><Link to="/products" ><h2>محصولات</h2></Link></li>
       <li><Link><h2>درباره ما</h2></Link></li>
       <li><Link><h2>بلاگ</h2></Link></li>
       <li><Link><h2>تماس با ما</h2></Link></li>
     </ul>
   </div>
   <div class="footer-col">
     <h4>درباره ما</h4>
     <ul>
      <img src={logo} alt='' width={60}/>
      <p>تولیدی ورزشی TST به عنوان یکی از بزرگترین و شناخته شده‌ترین تولید کننده‌های کش بدنسازی فعالیت خود را با پشتوانه تجربه ۱۵ ساله در فعالیت ورزشی در سال ۱۳۹۵ آغاز کرد.</p>
     </ul>
   </div>
   <div class="footer-col">
     <h4>خرید از ما</h4>
     <ul>
     </ul>
   </div>
   <div class="footer-col">
     <h4>مارا دنبال کنید</h4>
     <div class="social-links">
        <div className="instagram">
          <TelegramIcon round={true} size={40} />
        </div>
        <div className="instagram">
          <LinkedinIcon round={true} size={40} />
        </div>
        <div className="instagram">
         <img src={insta} alt="" />
        </div>
      </div>
     </div>
   </div>
</div>
</footer>

  )
}

export default Footer