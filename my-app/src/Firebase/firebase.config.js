console.log(process.env)

const firebaseConfig = {
    apiKey:process.env.REACT_APP_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDERID,
    appId:process.env.REACT_APP_APP_ID
  };

  // apiKey: "AIzaSyCnVNezF8Bs82Iiwi1OLtSxl7dV-v8tb0U",
  // authDomain: "tourism-project-d2747.firebaseapp.com",
  // projectId: "tourism-project-d2747",
  // storageBucket: "tourism-project-d2747.appspot.com",
  // messagingSenderId: "264614128134",
  // // appId: "1:264614128134:web:20ed4ac55937f73572b187"
  //   apiKey: process.env.REACT_APP_API_KEY,
  //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_APP_ID,

  export default firebaseConfig;

