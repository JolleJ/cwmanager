import AddUserPage from '../components/AddUserPage.vue';
import LoginPage from '../components/LoginPage.vue';
import Home from '../components/Home.vue';
import Error from '../components/404.vue';

const routes = [
    {path: "/", component: LoginPage},
    {path: "/Home", component: Home},
    {path: "/AddUserPage", component: AddUserPage},
    {path: "/Error", component: AddUserPage},
];

export default routes;