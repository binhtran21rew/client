import Dashboard from '../components/admin/Dashboard'
import Profile from '../components/admin/Profile'
import Category from '../components/admin/Category'

const routes = [
    { path: '/admin', exact: true, name: 'Admin'},
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard},
    { path: '/admin/profile', exact: true, name: 'Profile', component: Profile},
    { path: '/admin/categories', exact: true, name: 'Profile', component: Category},

]
export default routes