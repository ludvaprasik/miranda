export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuth()
    if (!auth.value.isLoggedIn && to.path !== '/login') return navigateTo('/login')
    if (auth.value.isLoggedIn && to.path === '/login') return navigateTo('/')
})