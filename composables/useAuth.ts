export const useAuth = () => {
    return useState('auth', () => ({
        isLoggedIn: false
    }))
}