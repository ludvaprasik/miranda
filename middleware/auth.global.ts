export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuth()
    if (!auth.value.isLoggedIn && to.path !== '/welcome') return navigateTo('/welcome')
    if (auth.value.isLoggedIn && to.path === '/welcome') return navigateTo('/')
})