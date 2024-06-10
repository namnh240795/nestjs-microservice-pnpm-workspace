import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }
  function onFailure(error) {
    console.log(error);
  }

  useEffect(() => {
    function handleCredentialResponse(response) {
      console.log("Encoded JWT ID token: " + response.credential);
    }
    window.onload = function () {
      window.google.accounts.id.initialize({
        client_id: "Your.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      window.google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      // window.google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }, [])

  return (
    <>
       <div id="g_id_onload"
        data-client_id="Your.apps.googleusercontent.com"
        data-login_uri="http://localhost:5173/google-login-redirect"
        data-auto_prompt="false">
    </div>
    <div className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left">
          </div>
          <div id="buttonDiv"></div>
    </>
  )
}

export default App
