if (!window.firebaseInitialized) {
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
  
  // Auth persistence - kullanıcı oturumunu koru
  //firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  
  // Global değişkenleri window nesnesine ekle
  window.auth = firebase.auth();
  window.db = firebase.firestore();
  window.firebaseInitialized = true;
  
  console.log('✅ Firebase başarıyla başlatıldı');
} else {
  console.warn('⚠️ Firebase zaten başlatılmış, tekrar başlatılmadı');
}

// Auth ve db değişkenlerini global scope'ta kullanılabilir yap
const auth = window.auth;
const db = window.db;
