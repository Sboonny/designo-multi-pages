import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

function getRoutes() {
	const { routes } = loadRouters()
	return routes;
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: getRoutes()
})



export default router;

function loadRouters() {
	const context = import.meta.globEager("../views/**/*.vue");
    const routes: RouteRecordRaw[] = [];

    Object.keys(context).forEach((key: any) => {
        if (key === "./Home.ts") return;
		let name = key.replace(/(\.\.\/views\/|\.vue)/g, '');
		let path = "/" + name.toLowerCase();
		if (name === "Home") path = "/";
		routes.push({
			path: path,
			name: name,
			component: () => import(`../views/${name}.vue`)
		})
    });

    return { context, routes }
}
