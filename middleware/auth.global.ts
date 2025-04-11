export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuth()
    // nesikovne, pro intro karusel snad stihnu presunout komponenty pristupne bez zalogovani do samotneho adresare a udelat guard napriklad pres startsWith
    if (!auth.value.isLoggedIn
        && to.path !== '/login'
        && to.path !== '/register'
        && to.path !== '/reset') return navigateTo('/login')
    if (auth.value.isLoggedIn && to.path === '/login') return navigateTo('/')
})