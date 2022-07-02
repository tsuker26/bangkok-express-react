import React, {useState} from "react";
import style from "./RibbonMenu.module.css";
import RibbonMenuEl from "./RibbonMenuEl/RibbonMenuEl";
import arrow from "./angle-icon.svg";


const RibbonMenu = ({activeClass,categories}) => {

  const [positionNav, setPosition] = useState({ left: 0, visibleRight: true, visibleLeft: false });


  let RibbonEl = categories.map((category) => (
    <RibbonMenuEl active={activeClass}  category={category} key={category.id} />
  ));

  const scrollRightNav = () => {
    let copyState = { ...positionNav, left: positionNav.left - 340, visibleLeft: true };
    setPosition(copyState);
    if (copyState.left === -680) {
      copyState.visibleRight = false;
    }
  };
  const scrollLeftNav = () => {
    let copyState = { ...positionNav, left: positionNav.left + 340, visibleRight: true };
    setPosition(copyState);
    if (copyState.left === 0) {
      copyState.visibleLeft = false;
    }
  };

  return (
    <div className={style.container}>
      <h2 className={style.section_heading}>Our Menu</h2>
      <div className={style.ribbon}>
        <button
          className={
            positionNav.visibleLeft
              ? `${style.ribbon__arrow} ${style.ribbon__arrow_left} ${style.ribbon__arrow_visible} `
              : `${style.ribbon__arrow} ${style.ribbon__arrow_left}  `
          }
          onClick={scrollLeftNav}
        >
          <img src={arrow} alt="icon" />
        </button>
        <nav className={style.ribbon__inner} style={{ left: `${positionNav.left}px` }}>
          {RibbonEl}
        </nav>
        <button
          className={
            positionNav.visibleRight
              ? `${style.ribbon__arrow} ${style.ribbon__arrow_right} ${style.ribbon__arrow_visible} `
              : `${style.ribbon__arrow} ${style.ribbon__arrow_right}  `
          }
          onClick={scrollRightNav}
        >
          <img src={arrow} alt="icon" />
        </button>
      </div>
    </div>
  );
};

export default RibbonMenu;
