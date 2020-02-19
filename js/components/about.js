const AboutTemplate = {
    template: `
    <div class="animated fadeInLeft">
        <h1 class="red pageHdr">About Page</h1>
        <hr>
        <h5><b>{{role}}</b></h5>
        <ul class="col-md-8">
            <!-- loop through plans -->
            <li v-for="t in tech">{{t}}
                <ul v-if="t === 'CSS'" class="subBull"><li v-for="sub in subCSS">{{sub}}</li></ul>
                <ul v-if="t === 'VueJS'" class="subBull"><li v-for="sub in subJS">{{sub}}</li></ul>
                <ul v-if="t === 'API'" class="subBull"><li v-for="sub in subAPI">{{sub}}</li></ul>
            </li>
        </ul>
    </div>`,
    data(){
        return{
            role: 'Technologies implemented in this site:',
            tech:['CSS', 'Javascript (Pure)', 'VueJS', 'HTML', 'API'],
            subCSS: ['Navbar & Footer (Custom)', 'Flexbox', 'Key-Frame Animations', 'Variables', 'Bootstrap (Minimal)', 'Form Validation (Custom)'],
            subJS: ['Conditional Statements', 'Iterative Statements', 'Data Binding', 'Components', 'Routing'],
            subAPI: ['ES6 Fetch', 'Facade Design Pattern']
        }
    }
};