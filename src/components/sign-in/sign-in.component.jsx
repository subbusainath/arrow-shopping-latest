import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const { email,password }=this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email:'',password:''});


        }catch(error){
            console.log(error);
        }

        this.setState({ email:'', password:''});
    }

 
 
 
 
 
 
 
    handleChange = event =>{
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} required  label="Email" />
                

                <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} required label="Password"/>
                

                <CustomButton type='submit'> SIGN IN </CustomButton>

        <CustomButton onClick = {signInWithGoogle}> {` `} SIGN IN WITH GOOGLE{``} </CustomButton>   
            </form>
        </div>
        );
    }
}



export default SignIn;
