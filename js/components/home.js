const HomeTemplate = {
    template: `
    <div class="animated fadeInDown">
        <h1 class="green pageHdr">Home Page</h1>
        <hr>
        <span class="home"><h5>{{rowOne}}</h5><h1>{{rowTwo}}</h1></span>
    </div>`,
    data(){
        return{
            rowOne: 'A dynamic, serverless architectural design approach for code reusability, performance, and',
            rowTwo: 'insane monthly-cost savings!'
        }
    }
};