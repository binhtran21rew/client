import Dashboard from '../components/admin/Dashboard'
import Profile from '../components/admin/Profile'
import AddCategory from '../components/admin/Category/AddCategory'
import ViewCategory from '../components/admin/Category/ViewCategory'
import EditCategory from '../components/admin/Category/EditCategory'
import ViewProduct from '../components/admin/Product/ViewProduct'
import AddProduct from '../components/admin/Product/AddProduct'

const routes = [
    { path: '/admin', exact: true, name: 'Admin'},
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard},
    { path: '/admin/profile', exact: true, name: 'Profile', component: Profile},
    { path: '/admin/Add_categories', exact: true, name: 'AddCategory', component: AddCategory},
    { path: '/admin/categories', exact: true, name: 'ViewCategory', component: ViewCategory},
    { path: '/admin/edit_category/:id', exact: true, name: 'EditCategory', component: EditCategory},
    { path: '/admin/product', exact: true, name: 'ViewProdcut', component: ViewProduct},
    { path: '/admin/Add_product', exact: true, name: 'AddProduct', component: AddProduct},



]
export default routes