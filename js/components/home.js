const HomeTemplate = {
    template: `
    <div class="container">
        <h1 class="green clr">Home Page</h1>
        <hr>
        <p>Welcome<br/><br/>{{text}}</p>
    </div>`,
    data(){
        return{
            text: 'This is a front-end site structured using Vue JS routing and components for code reusability and cost efficiency; ideal for a serverless architecture approach.',
        }
    }
};