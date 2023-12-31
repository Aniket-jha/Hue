import Link from 'next/link';
import React from 'react';
import SocialLinks from '../social-links';
import CopyrightArea from './component/copyright-area';

const footer_contents = {
  logo: '/assets/img/logo/logo-white.png',
  widget_desc: 'A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci tationulla',
  footer_widgets: [
    {
      w_class: 'd-flex justify-content-lg-center',
      title: 'Sitemap',
      widget_lists: [{name:"Contact",link:"contact"}, {name:"Work",link:"work"}, {name:"Home",link:""}]
    },
   
  ],
  footer_widgetsTwo:[
     {
      padd: 'pl-20',
      title: 'Services',
      widget_lists: ['Digital Marketing and Strategy', 'Web & Mobile Development', 'Social Media Marketing', 'Branding and Designing', 'Content Creation','Production & Shoots']
    },
  ],
  subscribe_title: 'Subscribe Newslatter',
  subscribe_text: 'Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo',
  copy_right_text: <>© Copyright ©{new Date().getFullYear()} HUE. All Rights Reserved Copyright</>,
  conditions: ['Terms and conditions', 'Privacy policy', 'Login / Signup']
}

const { conditions, copy_right_text, footer_widgets,footer_widgetsTwo, logo, widget_desc, subscribe_text, subscribe_title } = footer_contents;

const FooterThree = ({ home_four = false }) => {
  return (
    <React.Fragment>
      <footer>
        <div className="tp-footer-area black-bg pt-130 pb-30">
          <div className="container">
            <div className="row wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget">
                  <div className="tp-footer-widget__logo mb-30">
                    <Link href="/">
                      <a><img src={logo} alt="" /></a>
                    </Link>
                  </div>
                  
                 
                 
                </div>
              </div>
              {footer_widgets.map((w, i) => {
                const { title, widget_lists, w_class, padd } = w;
                return <div key={i} className={`col-xl-3 col-lg-2 col-md-6 ${w_class ? w_class : ''}`}>
                  <div className={`tp-footer-widget ${padd ? padd : ''}`}>
                    <div className="tp-footer-widget__title pb-15">
                      <h3 className="footer-title">{title}</h3>
                    </div>
                    <div className="tp-footer-widget__list">
                      <ul>
                        {widget_lists.map((l, i) => <li key={i}> <Link href={"/"+l.link} ><p style={{cursor:"pointer"}} > {l.name}</p></Link></li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              })}
               {footer_widgetsTwo.map((w, i) => {
                const { title, widget_lists, w_class, padd } = w;
                return <div key={i} className={`col-xl-3 col-lg-2 col-md-6 ${w_class ? w_class : ''}`}>
                  <div className={`tp-footer-widget ${padd ? padd : ''}`}>
                    <div className="tp-footer-widget__title pb-15">
                      <h3 className="footer-title">{title}</h3>
                    </div>
                    <div className="tp-footer-widget__list">
                      <ul>
                        {widget_lists.map((l, i) => <li key={i}> <p  > {l}</p></li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              })}
              
              
            </div>
          </div>

          {/* CopyrightArea start */}
          <CopyrightArea copy_right_text={copy_right_text} conditions={conditions} />
          {/* CopyrightArea end */}
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FooterThree;

const InstagramItem = ({ img }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
      <div className="tp-footer-widget__tp-insta-img mb-15">
        <img className="w-100" src={`/assets/img/footer/footer-${img}.jpg`} alt="" />
        <div className="tp-footer-widget__tp-insta-img-icon">
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  )
}