export const useAuth = () => {
    const auth = useState('auth', () => ({
        isLoggedIn: false
    }))

    const login = () => {
        auth.value.isLoggedIn = true
        if (process.env) localStorage.setItem('loggedIn', 'true')
    }

    const logout = () => {
        auth.value.isLoggedIn = false
        if (process.env) localStorage.removeItem('loggedIn')
    }

    const checkLocalStorage = () => {
        if (process.env) {
            const stored = localStorage.getItem('loggedIn')
            auth.value.isLoggedIn = stored === 'true'
        }
    }

    return { auth, login, logout, checkLocalStorage }
}