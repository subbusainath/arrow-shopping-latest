import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon  from '../../components/Cart-Icon/cart-icon.component';
import CartDropdown from '../../components/Cart-Dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';
import './header.styles.scss';

const Header = ({ currentUser,hidden }) => (
    <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
        <div className="options">    
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/shop">
                CONTACT
            </Link>
            {currentUser? (
            <Link className='option' onClick = {() => auth.signOut()}>
                SIGN OUT
            </Link>
            ) : (
                <Link className='option' to="/signin">
                    SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
        { hidden?null:<CartDropdown /> }
    </div>  
);

const mapStateToProps = createStructuredSelector({
currentUser: selectCurrentUser,
hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);