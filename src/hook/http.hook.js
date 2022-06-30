import {useState, useCallback} from "react";

export const useHttp = () =>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const request = useCallback(async (method = 'GET', body = null) => {
        setLoading(true)
        try{
            switch (method){
                case 'GET':
                    const signInRaw = localStorage.getItem('Users')
                    const signIn = JSON.parse(signInRaw)
                    const status = signIn.find(user => (user.email === body.email && user.password === body.password))
                    setLoading(false)
                    return status
                case 'POST':
                     const logInRaw = localStorage.getItem('Users')
                     const logIn = JSON.parse(logInRaw) || []
                    if (!logIn.find(user => (user.email === body.email && user.password === body.password))){
                        logIn.push({...body, level: 2})
                        localStorage.setItem('Users', JSON.stringify(logIn))
                        setLoading(false)
                        return 'Successful registration'
                    }
                    else{
                        setLoading(false)
                        return 'Error registration'
                    }


                default:
                    setLoading(false)
                    return 'Error auth'
            }


        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = () => setError(null)

    return {loading, request, error, clearError}
}