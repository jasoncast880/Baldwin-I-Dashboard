import {createRouter, createWebHashHistory} from 'vue-router';
import PageViewer from './components/PageViewer.vue';
import DocumentationView from './views/DocumentationView.vue';
import DashboardView from './views/DashboardView.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/:index?', component: PageViewer, props: true },
    { path: '/', component: DashboardView},
    { path: '/dashboard', component: DashboardView },
    { path: '/docs', component: DocumentationView },
  ]
});

export default router;
