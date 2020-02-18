const HomeTemplate = {
    template: `
    <div class="container">
        <div class="animated fadeInDown">
            <h1 class="green pageHdr">Home Page</h1>
            <hr>
            <p>Welcome<br/><br/>{{text}}</p>
        </div>
    </div>`,
    data(){
        return{
            text: 'This is a front-end site structured using VueJS routing and components for code reusability and cost efficiency; ideal for a serverless architecture approach.',
        }
    }
};