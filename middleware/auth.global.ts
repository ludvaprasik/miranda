export default defineNuxtRouteMiddleware((to, from) => {
    if (process.env) return
    const { auth, checkLocalStorage } = useAuth()
    checkLocalStorage()

    const isPublicIntro = to.path.startsWith('/intro')
    const loggedIn = auth.value?.isLoggedIn

    if (!loggedIn && !isPublicIntro) {
        return navigateTo('/intro/intro')
    }

    if (loggedIn && to.path === '/intro/login') {
        return navigateTo('/')
    }
})