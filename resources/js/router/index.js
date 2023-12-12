import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

// import all pages
const HOME = () => import(/* webpackChunkName: "Home" */ "../views/Home.vue");
const LOGIN = () =>
    import(/* webpackChunkName: "Login" */ "../views/Login.vue");
const ERROR_404 = () =>
    import(/* webpackChunkName: "Error404" */ "../views/404.vue");

// Outlet
const INDEX_OUTLET = () =>
    import(/* webpackChunkName: "IndexOutlet"*/ "../views/outlets/Index");
const DATA_OUTLET = () =>
    import(/* webpackChunkName: "DataOutlet"*/ "../views/outlets/Data");
const ADD_OUTLET = () =>
    import(/* webpackChunkName: "AddOutlet"*/ "../views/outlets/Add");
const EDIT_OUTLET = () =>
    import(/* webpackChunkName: "EditOutlet"*/ "../views/outlets/Edit");

const INDEX_COURIER = () =>
    import(/* webpackChunkName: "IndexCourier"*/ "../views/courier/Index");
const DATA_COURIER = () =>
    import(/*webpackChunkName: "DataCourier"*/ "../views/courier/Data");
const ADD_COURIER = () =>
    import(/* webpackChunkName: "AddCourier"*/ "../views/courier/Add");
const EDIT_COURIER = () =>
    import(/* webpackChunkName: "EditCourier"*/ "../views/courier/Edit");

const INDEX_PRODUCT = () =>
    import(/* webpackChunkName: "IndexProduct"*/ "../views/products/Index");
const DATA_PRODUCT = () =>
    import(/* webpackChunkName: "DataProduct"*/ "../views/products/Data");
const ADD_PRODUCT = () =>
    import(/* webpackChunkName: "AddProduct" */ "../views/products/Add");
const EDIT_PRODUCT = () =>
    import(/* webpackChunkName: "EditProduct" */ "../views/products/Edit");

const SETTING = () =>
    import(/* webpackChunkName: "Setting" */ "../views/setting/Index");
const SET_PERMISSION = () =>
    import(
        /* webpackChunkName: "SetPermission" */ "../views/setting/roles/SetPermission"
    );

Vue.use(VueRouter);

// define routes
const routes = [
    {
        path: "/",
        name: "Home",
        component: HOME,
        meta: {
            requiresAuth: true,
            title: "Dashboard",
        },
    },
    {
        path: "/login",
        name: "Login",
        component: LOGIN,
        meta: {
            // requiresAuth: false,
            layout: "blank",
            title: "Login",
        },
    },
    {
        path: "/outlets",
        component: INDEX_OUTLET,
        meta: {
            requiresAuth: true,
        },
        children: [
            // penjelasan nested routing
            // https://router.vuejs.org/guide/essentials/nested-routes.html
            {
                path: "", //sebagai index
                name: "OutletData",
                component: DATA_OUTLET,
                meta: {
                    title: "Manage Outlets",
                },
            },
            {
                path: "add",
                name: "OutletAdd",
                component: ADD_OUTLET,
                meta: {
                    title: "Add New Outlet",
                },
            },
            {
                path: "edit/:id",
                name: "OutletEdit",
                component: EDIT_OUTLET,
                meta: {
                    title: "Edit OUtlet",
                },
            },
        ],
    },
    {
        path: "/couriers",
        component: INDEX_COURIER,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: "",
                name: "CourierData",
                component: DATA_COURIER,
                meta: {
                    title: "Manage Courier",
                },
            },
            {
                path: "add",
                name: "CourierAdd",
                component: ADD_COURIER,
                meta: {
                    title: "Add New Courier",
                },
            },
            {
                path: "edit/:id",
                name: "CourierEdit",
                component: EDIT_COURIER,
                meta: {
                    title: "Edit Courier",
                },
            },
        ],
    },
    {
        path: "/products",
        component: INDEX_PRODUCT,
        meta: {
            requiresAuth: true,
            title: "List Product",
        },
        children: [
            {
                path: "",
                name: "ProductData",
                component: DATA_PRODUCT,
                meta: {
                    title: "Manage Product",
                },
            },
            {
                path: "add",
                name: "ProductAdd",
                component: ADD_PRODUCT,
                meta: {
                    title: "Add Product",
                },
            },
            {
                path: "edit/:id",
                name: "ProductEdit",
                component: EDIT_PRODUCT,
                meta: {
                    title: "Edit Product",
                },
            },
        ],
    },
    {
        path: "/setting",
        component: SETTING,
        meta: {
            requiresAuth: true,
            title: "Setting",
        },
        children: [
            {
                path: "role-permission",
                name: "RolePermission",
                component: SET_PERMISSION,
                meta: {
                    title: "Set Permission",
                },
            },
        ],
    },
    {
        path: "*s",
        name: "NotFound",
        component: ERROR_404,
        meta: {
            layout: "blank",
            title: "Not Found",
        },
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});


//stackoverflow.com/questions/49685780/vue-js-get-route-name-in-app-vue

// navigation guard
https: router.beforeEach((to, from, next) => {
    // bersihkan semua error yang ada
    store.commit("CLEAR_ERRORS");
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        let auth = store.getters.isAuth;
        if (!auth) {
            next({ name: "Login" });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
