import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
//import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import Poste from 'src/components/Dashboard/Views/Poste.vue'
import Personnel from 'src/components/Dashboard/Views/Personnel.vue'
import Profil from 'src/components/Dashboard/Views/Profil.vue'
import Menu from 'src/components/Dashboard/Views/Menu.vue'
import User from 'src/components/Dashboard/Views/User.vue'
import Droit from 'src/components/Dashboard/Views/Droit.vue'
import Login from 'src/components/GeneralViews/Login.vue'
import Connexion from 'src/components/Dashboard/Views/Connexion.vue'
import Historique from 'src/components/Dashboard/Views/Historique.vue'
import TypeMenu from 'src/components/Dashboard/Views/TypeMenu.vue'
import Presence from 'src/components/Dashboard/Views/Presence.vue'
import Recapitulatif from 'src/components/Dashboard/Views/Recapitulatif.vue'

const routes = [
  {
    path: '/',
    component: Overview,
    redirect: '/admin/overview'
  },
  {
    path: '/login_apps',
    component: Login,
    name: 'login_apps'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'users',
        name: 'users',
        component: User
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
  
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'postes',
        name: 'postes',
        component: Poste
      },
      {
        path: 'personnels',
        name: 'personnels',
        component: Personnel
      },
      {
        path: 'profils',
        name: 'profils',
        component: Profil
      },
      {
        path: 'menus',
        name: 'menus',
        component: Menu
      },
      {
        path: 'droits',
        name: 'droits',
        component: Droit
      },
      
      {
        path: 'connexions',
        name: 'connexions',
        component: Connexion
      },
     
      {
        path: 'typemenus',
        name: 'typemenus',
        component: TypeMenu
      },
      {
        path: 'presences',
        name: 'presences',
        component: Presence
      },
      {
        path: 'recapitulatifs',
        name: 'recapitulatifs',
        component: Recapitulatif
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
