import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
firestore.collection('users').doc('5pFMfguc6Bcf83vC0vtC').collection('cartItems').doc('CjAGG3muVKVGlV9xxeLi');
firestore.doc('users/5pFMfguc6Bcf83vC0vtC/cartItems/CjAGG3muVKVGlV9xxeLi');
firestore.collection('users/5pFMfguc6Bcf83vC0vtC/cartItems');