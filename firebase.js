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


//listen for auth status changes
auth.onAuthStateChanged(user=>{
    // var handle_name=document.getElementById('')
    if(user)
    {
        let id;
        console.log("user logged in");
        db.collection('users').get().then(snapshot=>{
            snapshot.docs.forEach(doc=>{
                const user_list=doc.data();
                if(user_list.email===user.email)
                {
                    name=user_list.name;
                    console.log(name);
                    console.log(doc)
                }
        })
        document.querySelector('.loader').classList.add("disapper");
        document.querySelector('.login_signup').classList.add("hidden");
        document.querySelector('.after_login').classList.remove("hidden");
        dashboard(name,id)

        })
    }
    else{
        console.log("user logged out")
        document.querySelector('.after_login').classList.add("hidden");
        document.querySelector('.loader').classList.add("disapper");
        document.querySelector('.login_signup').classList.remove("hidden");
        
    }
})


const logout2=document.querySelectorAll('.logout2');
for(let i=0;i<logout2.length;i++)
{
    logout2[i].addEventListener("click",(e)=>{
        e.preventDefault();
        auth.signOut();
    })

}



const signupform = document.querySelector('#signup-form');
signupform.addEventListener('submit', (e) => {
    
    const email = signupform['signup-email'].value;
    const name=signupform['signup-name'].value;
	const pwd = signupform['signup-password'].value;
	console.log(email, pwd);
    
    auth.createUserWithEmailAndPassword(email, pwd).then((cred) => {
        db.collection('users').add({
            email:email,
            name:name
        })
		console.log(cred);
	});
    
    e.preventDefault();
});

const loginForm=document.querySelector('#login-form');
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=loginForm['login-email'].value;
    const pwd=loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email,pwd).then(cred=>{
        console.log(cred);
        
        // const modal=document.querySelector('#modal-login');
        // M.Modal.getInstance(modal).close();
        // loginForm.reset();
    })
})  