/*
    Created By: Harry Brown III
    Description: Serverless application approach using Vue routing and components for code reusability and cost/performance efficiency.
*/

Vue.component('page-nav', {
    template: `
    <nav class="navbar">
        <router-link class="brand-title" to="/Home"><h4>Brown</h4></router-link>
        <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <div class="navbar-links">
            <ul>
                <!-- loop through nav page links -->
                <li v-for="pageName in pages">
                    <router-link v-bind:to="'/' + pageName">{{pageName}}</a>
                </li>
            </ul>
        </div>
    </nav>`,
    data(){
        return{
            pages: ['Home', 'About', 'Login']
        }
    }
})

Vue.component('page-footer', {
    template: `
    <footer class="ftr">
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
            'Updated:' : '2/14/2020'
        }
    }
}
})

// set routes with associated template component (js/components)
const routes = [
    { path: '/', component: HomeTemplate },
    { path: '/Home', component: HomeTemplate },
    { path: '/About', component: AboutTemplate },
    { path: '/Login', component: LoginTemplate }
]

// create Vue router object from vue-router.min.js
const router = new VueRouter({routes})

new Vue({
    el: '#app',
    router,
    watch:{
        '$route' (to, from) {
            //if(to.path == '/Login')
                this.$router.go();
        }
    }
});

//-------- Hamburger Menu Dropdown ----------
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})