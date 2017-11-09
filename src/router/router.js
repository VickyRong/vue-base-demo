import App from '../App';
import Home from '../pages/Home';
import cellDemo from '../pages/demo/cellDemo';
import tabBarDemo from '../pages/demo/tabBarDemo';
import navBarDemo from '../pages/demo/navBarDemo';
import buttonDemo from '../pages/demo/vButtonDemo';

export default [
    {
        path:'/',
        component:App,  // 顶层路由，对应index.html
        children: [     // 二级路由。对应App.vue
            { path:'/',component:Home },
            { path:'/demo',component:Home },

            //demo
            { path:'/demo/cell',component:cellDemo },
            { path:'/demo/tabBar',component:tabBarDemo },
            { path:'/demo/navBar',component:navBarDemo },
            { path:'/demo/button',component:buttonDemo },
            
        ]
    }
]