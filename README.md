
## ts-server

### Start Application

``` typescript
@Bootstrap
class Application {
    static run() {}
}
```

### Routes/Controllers

``` typescript
class BaseController {}
```

- Login 

    ``` typescript
    @controller({
        path: "/Login"
        middlewares: []
    })
    class LoginController {

        @Get
        @middlewares([])
        login() {}

    }
    ```

- Register 

    ``` typescript
    @controller({
        path: "/register"
    })
    class RegisterController {

        @Post
        register() {}

    }
    ```


