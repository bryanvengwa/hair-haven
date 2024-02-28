'use client'
import { createContext , useEffect, useState } from "react";
import { useRouter } from 'next/router';


export const GlobalContext = createContext({});

export const GlobalContextProvider = ({children})=>{
    const url = 'http://127.0.0.1:8000'
    let [user, setUser] = useState( ()=>localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens') ): null ); 
    let [authTokens, setAuthTokens] = useState(()=>  localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [loading, setLoading] = useState(true);
    const router = useRouter();

    

    let loginUser = async (e)=>{
        e.preventDefault();
        
        let response = await fetch( `${url}http://127.0.0.1:8000/api/token/`, {
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
            navigate('/');
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


    let logOutUser = ( ) => {
        setUser(null);
        setAuthTokens(null);
        localStorage.removeItem('authTokens' )
        useEffect(() => {
            myFunction();
            router.push('/'); // Redirect to "/" after function execution
          }, []); // Run only once on component mount
        
     

    }

    let contextData = {
        user: user,
        loginUser: loginUser, 
        logOutUser: logOutUser,
    }
    useEffect(()=> {

        if(loading){
            updateToken()
        }

        let fourMinutes = 1000 * 60 * 4

        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])

    return (
        <GlobalContext.Provider value={contextData}  >
            {children}
        </GlobalContext.Provider>
    )
}