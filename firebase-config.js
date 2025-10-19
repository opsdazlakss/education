// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHyhf5zLhYpVJ0nvSEv1KP00dHyklXpVA",
  authDomain: "mat-egitim-9445e.firebaseapp.com",
  projectId: "mat-egitim-9445e",
  storageBucket: "mat-egitim-9445e.firebasestorage.app",
  messagingSenderId: "311630522097",
  appId: "1:311630522097:web:4b8d8f9774410dfdd16b50"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Auth persistence - kullanıcı oturumunu koru
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
