// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: 'AIzaSyBvvKZjLcRhZnxat1q-bfQGY89pWmFl98g',
	authDomain: 'start-page-cb59c.firebaseapp.com',
	databaseURL: 'https://start-page-cb59c.firebaseio.com',
	projectId: 'start-page-cb59c',
	appId: '1:871024079594:web:6409930e3f8e3e09a0dd93',
	measurementId: 'G-SVENZZM8LT',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
// db.settings({timestampsInSnapshots:true});
const signupform = document.querySelector('#signup-form');
signupform.addEventListener('submit', (e) => {
	const email = signupform['signup-email'].value;
	const pwd = signupform['signup-password'].value;
	

	console.log(email, pwd);

	auth.createUserWithEmailAndPassword(email, pwd).then((cred) => {
		console.log(cred);
	});
	e.preventDefault();
});


