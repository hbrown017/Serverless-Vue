/*
    Created By: Harry Brown III
    Description: Serverless application approach using Vue routing and components for code reusability and cost/performance efficiency.
*/

Vue.component('page-nav', {
    template: `
    <nav class="navbar navbar-expand-lg bg-primary text-uppercase fixed-top" id="mainNav">
        <router-link class="navbar-brand js-scroll-trigger" to="/Home"><h4>Brown</h4></router-link>
        <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-secondary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <i class="far fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <!-- loop through nav page links -->
                <li class="nav-item mx-0 mx-lg-1" v-for="pageName in pages">
                    <router-link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" v-bind:to="'/' + pageName">{{pageName}}</a>
                </li>
            </ul>
        </div>
    </nav>`,
    data(){
        return{
            pages: ['Home', 'About']
        }
    }
})

Vue.component('page-footer', {
    template: `
    <footer class="ftr bg-warning">
    <div class="modules">
        <div class="col-md-12 ftrContent">
            <!-- loop through nav info -->
            <span v-for="(i, items) in info">{{items}} {{i}}</span>
        </div>
    </div>
  </footer>`,
  data(){
    return{
        info: {
            'Developer:': 'Harry Brown',
            'Occupation:': 'Software/Technology Industry',
            'Updated:' : '2/1/2020'
        }
    }
}
})

// set routes with associated template component (js/components)
const routes = [
    { path: '/', component: HomeTemplate },
    { path: '/Home', component: HomeTemplate },
    { path: '/About', component: AboutTemplate }
]

// create Vue router object from vue-router.min.js
const router = new VueRouter({routes})

new Vue({
    el: '#app',
    router
});