import { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png';
import styles from './NavMobile.module.scss';
import NavModal from './NavModal';

const NavMobile = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);

  const openNavHandler = () => {
    setModalDisplay(true);
  };
  const closeNavHandler = () => {
    setModalDisplay(false);
  };

  return (
    <div>
      {ReactDOM.createPortal(
        <NavModal
          active={modalDisplay}
          closeModalHandler={closeNavHandler}
          className={styles.modal}
          sectionList={props.sectionList}
        />,
        document.getElementById('modal-root')
      )}

      <div className={styles['nav-mobile']}>
        <img src={logo} alt="Logo for website"></img>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu"
          viewBox="0 0 24 24"
          onClick={openNavHandler}
        >
          <path
            fillRule="evenodd"
            d="M22,17 L22,19 L2,19 L2,17 L22,17 Z M22,11 L22,13 L2,13 L2,11 L22,11 Z M22,5 L22,7 L2,7 L2,5 L22,5 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default NavMobile;
