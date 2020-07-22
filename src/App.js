import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { SetCurrentUser } from './redux/user/user.actions';


class App extends React.Component {  
  unsubscribeFromAuth = null

  componentDidMount(){

    const { SetCurrentUser } = this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth); 

        userRef.onSnapshot(snapShot => {
          SetCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      SetCurrentUser(userAuth);
    });
  }
  
  componentWillUnmount(){
    this.unubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path = '/' component={HomePage} />
          <Route path = '/shop' component={ShopPage} />
          <Route exact path = '/signin' render = {()=> this.props.currentUser?(<Redirect to='/' />):(<SignInSignUpPage/>)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser:user.currentUser
})

const mapDispatchToProps = dispatch => ({
  SetCurrentUser: user => dispatch(SetCurrentUser(user))
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
