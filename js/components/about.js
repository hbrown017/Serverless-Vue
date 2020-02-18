const AboutTemplate = {
    template: `
    <div class="container">
        <div class="animated fadeInUp">
            <h1 class="red pageHdr">About Page</h1>
            <hr>
            <h4>{{role}}</h4>
            <ul class="col-md-8">
                <!-- loop through plans -->
                <li v-for="s in skills">{{s}}</li>
            </ul>
        </div>
    </div>`,
    data(){
        return{
            role: 'Full-Stack Developer:',
            skills:['C# .NET', 'Javascript', 'Python', 'Databases', 'SDLC']
        }
    }
};