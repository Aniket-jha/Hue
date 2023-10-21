import Link from 'next/link';
import React from 'react';
import useSticky from '../../hooks/use-sticky';
import MobileMenu from './mobile-menu';
import NavMenus from './nav-menus';
import Image from 'next/image';
const HeaderFour = () => {
  const { headerSticky } = useSticky();
  return (
    <React.Fragment>
      <header className="d-none d-lg-block">
        <div id="header-sticky" className={`tp-header-area-two header-transparent header-space-three pl-115 pr-115 pt-35 ${headerSticky ? 'header-sticky' : ''}`}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="tp-logo text-start">
                  <Link href="/">
                    <a><img style={{width:"90px"}} src="/assets/img/logo/logomain.png" alt="" /></a>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-6">
                <div className="tp-main-menu tp-menu-black text-center">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={"logomain.png"} />
      {/* <!-- mobile-menu-area-end --> */}
    </React.Fragment>
  );
};

export default HeaderFour;