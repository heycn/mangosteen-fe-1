import { RouteRecordRaw } from 'vue-router'
import { Welcome } from '../views/Welcome'
import { First } from '../components/welcome/First'
import { Second } from '../components/welcome/Second'
import { Third } from '../components/welcome/Third'
import { Forth } from '../components/welcome/Forth'
import { FirstActions } from '../components/welcome/FirstActions'
import { SecondActions } from '../components/welcome/SecondActions'
import { ThirdActions } from '../components/welcome/ThirdActions'
import { ForthActions } from '../components/welcome/ForthActions'
import { StartPage } from '../views/StartPage'

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    component: Welcome,
    redirect: '/welcome/1',
    children: [
      { path: '1', name: 'Welcome1', components: { main: First, footer: FirstActions } },
      { path: '2', name: 'Welcome2', components: { main: Second, footer: SecondActions } },
      { path: '3', name: 'Welcome3', components: { main: Third, footer: ThirdActions } },
      { path: '4', name: 'Welcome4', components: { main: Forth, footer: ForthActions } }
    ]
  },
  { path: '/start', component: StartPage }
]
