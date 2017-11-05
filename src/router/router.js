import App from '../App';
import Home from '../pages/Home';
import Cell from '../components/cell';
import cellDemo from '../pages/demo/cellDemo';
import tabBar from '../components/tabBar';
import tabBarDemo from '../pages/demo/tabBarDemo';

export default [
    {
        path:'/',
        component:App,  // 顶层路由，对应index.html
        children: [     // 二级路由。对应App.vue
            { path:'/',component:Home },
            { path:'/cell',component:Cell },

            //demo
            { path:'/demo/cell',component:cellDemo },
            { path:'/demo/tabBar',component:tabBarDemo },
            
        ]
    }
]