var LoginTemplate = {
    template: `
    <div class="animated bounce">
        <h1 class="blue pageHdr">Login Page</h1>
        <hr/>
        <span id="error"></span>
        <div class="loginContent">
            <form id="form" action="#" method="POST">
                <div class="row">
                    <div class="col-md-4">
                        <label for="userName"> Username:</label>
                        <input type="text" class="form-control" name="userName" id="userName" required>
                    </div>
                    <div class="col-md-4">
                        <label for="pw">Password:</label>
                        <input type="password" class="form-control" name="pw" id="pw" required>
                    </div>
                    <div class="col-md-4">
                        <br/>
                        <button type="submit" class="btn btn-secondary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="loginNote">
            {{text}}
            <a v-bind:href="link" target="_blank">{{link}}</a>
        </div>
        <span id="data" class="data"></span>
    </div>`,
    data(){
        return{
            text: 'This page performs form validation from an API call using a Facade design pattern. API:',
            link: 'https://jsonplaceholder.typicode.com/users'
        }
    }
}