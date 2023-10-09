import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import './index.css';
import { BellIcon, MessengerIcon, CaretIcon, PlusIcon, CogIcon, ChevronIcon, ArrowIcon, BoltIcon } from '../../assets';


const Navbar = props => (
  <nav className="navbar">
    <ul className="navbar-nav">{ props.children }</ul>
  </nav>
);

const NavItem = props => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a
        href="#"
        className="icon-button"
        onClick={() => setOpen(!open)}
      >
        { props.icon }
      </a>

      {/* if open === true, render props.children ( the DropDownMenu ) */}
      { open && props.children }
    </li>
  );
}

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.scrollHeight);
  }, []);

  function calcHeight(ele) {
    const height = ele.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{ props.leftIcon }</span>
        { props.children }
        <span className="icon-right">{ props.rightIcon }</span>
      </a>
    );
  }

  return (
    <div
      className="dropdown"
      ref={ dropdownRef }
      style={{ height: menuHeight }}
    >
      <CSSTransition
        classNames="menu-primary"
        in={ activeMenu === 'main' }
        timeout={ 500 }
        onEnter={ calcHeight }
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={ <CogIcon /> }
            rightIcon={ <ChevronIcon /> }
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={ <ChevronIcon /> }
            goToMenu="animals"
          >
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        classNames="menu-secondary"
        in={ activeMenu === 'settings' }
        timeout={ 500 }
        onEnter={ calcHeight }
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={ <ArrowIcon /> }>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={ <BoltIcon /> }>HTML</DropdownItem>
          <DropdownItem leftIcon={ <BoltIcon /> }>CSS</DropdownItem>
          <DropdownItem leftIcon={ <BoltIcon /> }>JavaScript</DropdownItem>
          <DropdownItem leftIcon={ <BoltIcon /> }>Awesome!</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        classNames="menu-secondary"
        in={ activeMenu === 'animals' }
        timeout={ 500 }
        onEnter={ calcHeight }
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={ <ArrowIcon /> }>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

const Dropdown = () => (
  <Navbar>
    <NavItem icon={ <PlusIcon /> } />
    <NavItem icon={ <BellIcon /> } />
    <NavItem icon={ <MessengerIcon /> } />
    <NavItem icon={ <CaretIcon /> }>
      <DropdownMenu></DropdownMenu>
    </NavItem>
  </Navbar>
)

export default Dropdown;
