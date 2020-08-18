import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom';
import CartItem from '../../components/Cart-Item/cart-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems,history,dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
              cartItems.length ? cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>)):(<span className='empty-message'>Your cart is empty</span>)
            }
        </div>

        <CustomButton onClick = {()=> {
            history.push('/checkout');
            dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));