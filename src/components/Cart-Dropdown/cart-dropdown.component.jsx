import React from 'react'
import { connect } from 'react-redux';
import CartItem from '../../components/Cart-Item/cart-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selector';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
            }
        </div>

        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state =>({
    cartItems : selectCartItems(state)
});


export default connect(mapStateToProps)(CartDropdown);