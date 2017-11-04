import App from '../App.vue';
import Home from '../pages/Home.vue';
import Cell from '../components/cell.vue';

export default [
    {
        path:'/',
        component:App,  // 顶层路由，对应index.html
        children: [     // 二级路由。对应App.vue
            { path:'/',component:Home },
            { path:'/cell',component:Cell },
            
        ]
    }
]