import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '../layouts/Default'
import EmptyLayout from '../layouts/Empty'
import AccountLayout from '../layouts/Account'

import Main from '../views/Main'
import Confirm from '../views/Main/Confirm'
import Login from '../views/Auth/Login'
import Questionnaire from '../views/PersonalAccount/Questionnaire'
import Duplicate from '../views/PersonalAccount/Duplicate'
import ClientCards from '../views/PersonalAccount/ClientCards'
import SurveyDoc from '../views/Survey/SurveyDoc'
import Docs from '../views/Main/Docs'
import Painting from '../views/Main/Painting'

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		// redirect: '/main',
		component: DefaultLayout,
		name: 'default',
		redirect: '/main',
		children: [
			{
				path: '/main',
				name: 'main',
				component: Main,
				meta: { requiresAuth: false }
			},
			{
				path: '/confirm',
				name: 'confirm',
				component: Confirm,
				meta: { requiresAuth: false }
			},
			{
				path: '/docs/:doc',
				name: 'docs',
				component: Docs,
				meta: { requiresAuth: false }
			},
		]
	},
	{
		path: '/empty',
		component: EmptyLayout,
		name: 'empty',
		redirect: '/login',
		children: [
			{
				name: 'login',
				path: '/login',
				component: Login
			},
			{
				name: 'surveyDoc',
				path: '/surveyDoc',
				component: SurveyDoc,
				meta: { requiresAuth: true }
			},
			{
				path: '/painting',
				name: 'painting',
				component: Painting,
				meta: { requiresAuth: false }
			}
		]
	},
	{
		path: '/account',
		component: AccountLayout,
		name: 'accountLayout',
		redirect: '/questionnaire',
		children: [
			{
				path: '/questionnaire',
				name: 'Questionnaire',
				component: Questionnaire,
				meta: { requiresAuth: true }
			},
			{
				path: '/duplicate',
				name: 'Duplicate',
				component: Duplicate,
				meta: { requiresAuth: true }
			},
			{
				path: '/clientCards',
				name: 'ClientCards',
				component: ClientCards,
				meta: { requiresAuth: true }
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	scrollBehavior: () => ({ y: 0 }),
	routes
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		next({
			path: '/main'
		})
	} else {
		next()
	}
})

export default router
