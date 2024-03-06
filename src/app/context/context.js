'use client'
import { createContext , useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { jwtDecode } from "jwt-decode";



  export const GlobalContext = createContext();



export const GlobalContextProvider = ({children})=>{
  const router = useRouter();
    const url = 'http://127.0.0.1:8000'
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const [user, setUser] = useState(() => {
        try {
          const storedTokens = localStorage.getItem('authTokens');
          return storedTokens ? jwtDecode(storedTokens) : null;
        } catch (error) {
         
          return null;
        }
      });
      const [authTokens, setAuthTokens] = useState(() => {
        try {
          const storedTokens = localStorage.getItem('authTokens');
          return storedTokens ? JSON.parse(storedTokens) : null;
        } catch (error) {
      
          return null;
        }
      });
    let [loading, setLoading] = useState(true);
    

    

    let loginUser = async (e)=>{
        e.preventDefault();
        
        let response = await fetch( `${url}/api/token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
             body: JSON.stringify({username: e.target.username.value , password: e.target.password.value }), 

        })
        let data = await response.json();
        console.log('data', data)

        if(response.status === 200){
            setAuthTokens(data);
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data ))
            router.push('/');
        }else{
            alert('something went wrong')
        }
    }

    let updateToken = async ()=> {

        let response = await fetch(`${url}/api/token/refresh/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens?.refresh})
        })

        let data = await response.json()
        
        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
             localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            logOutUser();
        }

        if(loading){
            setLoading(false)
        }
    }


    let logOutUser = () => {
        setShouldRedirect(true);
        setUser(null);
        setAuthTokens(null);
        localStorage.removeItem('authTokens');
    
        // Redirect to "/" after logout
      

      };

      useEffect(() => {
          if (shouldRedirect) {
    router.push('/');
    setShouldRedirect(false); // Reset flag after redirect
  }
    }, [shouldRedirect, router]); // Run only once on component mount

    let registerUser = async (event) => {

        event.preventDefault();
        const apiUrl = `${url}/api/register/`;
        try {
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: event.target.username.value,
                email: event.target.email.value,
                password: event.target.password.value,
              }),
            });


    }catch (error) {
        console.error('Error during registration:', error);
        // You can handle other errors here.
      }


    };

    let contextData = {
        user: user,
        loginUser: loginUser, 
        logOutUser: logOutUser,
    }
    useEffect(()=> {

        if(loading){
            updateToken()
        }
        console.log('run')
        let fourMinutes = 1000 * 60 * 4

        let interval =  setInterval(()=> {
            if(authTokens){
              console.log('run 4')
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)

    }, [authTokens, loading , updateToken])

    return (
        <GlobalContext.Provider value={contextData}  >
            {children}
        </GlobalContext.Provider>
    )
}