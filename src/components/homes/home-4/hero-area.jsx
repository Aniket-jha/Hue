import Link from 'next/link';
import React from 'react';
import useModal from '../../../hooks/use-modal';
import { HighlightTwo } from '../../../svg';
import VideoModal from '../../common/modals/modal-video';
import { urlFor } from '../../../lib/client';

const hero_contents = {
  shapes: [{ img: 'hero-shape-4' }, { num: '-two', img: 'hero-shape-4.1' }],
  title: <>Turning everyday concepts  <span className="tp-highlight"> <HighlightTwo /> <i>into creative </i></span> works of art.</>,
  text: "Whether its revamping your brands identity or infusing some pizzazz into your website, were your go-to team. Let's collaborate and bring your boldest ideas to life because, at our agency, we believe in designing dreams that dance to their own beat!",
  btn_text: 'How it Works',
  video_title: 'Behind the scenes',
  video_id: 'LJbkLdtEW00',
  social_links: [
    { id: 1, icon: 'fab fa-Instagram-f social-icon-1', title: 'Instagram',link: 'http://facebook.com' },
   
  ],
  hero_img: '/assets/img/hero/hero-5.png'
}

const { btn_text, hero_img, shapes, social_links, text, title, video_id, video_title } = hero_contents;

const HeroArea = ({homeContent}) => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <React.Fragment>
      <div className="tp-hero-area-two  pt-130 p-relative fix">
        <div className="tp-hero-yellow-shape d-none d-lg-block"></div>
        {shapes.map((s, i) => <div key={i} className={`ce-hero-shape${s.num ? s.num : ''} d-none d-lg-block`}>
          <img src={`/assets/img/hero/${s.img}.png`} alt="" />
        </div>)}
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero-section-box tp-hero-section-box-four pt-120 pb-140">
                <h3 className="tp-hero-bd-title text-black wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                  {title}
                </h3>
                <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">{text}</p>
                <div className="tp-hero-three-button-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
                  <Link href="/about">
                    <a className="tp-btn mr-55">{btn_text}</a>
                  </Link>
                 
                </div>
              </div>
              <div className="tp-hero-social pb-90 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
                <div className="tp-hero-social bp-hero-social">
                  {social_links.map((l, i) => (
                    <a key={i} className={`social-icon-${l.id}`} href={l.link} target="_blank" rel="noreferrer">
                      <i className={l.icon}></i><span>{l.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-duration=".7s" data-wow-delay=".9s">
              <div className="tp-hero-right-img-four pt-90">
           { homeContent?.homeBannerImage &&     <img src={urlFor(homeContent?.homeBannerImage)} alt="" />}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
      {/* video modal end */}
    </React.Fragment>
  );
};

export default HeroArea;