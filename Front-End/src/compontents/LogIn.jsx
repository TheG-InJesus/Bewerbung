import "./LogIn.css"

function LogIn() {
    return (
        <form action="#">

            <label for="uName">Username:</label><br></br>
            <input type="text" id="uName" name="uName"></input><br></br>

            <label for="password">Password:</label><br></br>
            <input type="password" id="password" name="password"></input><br></br>

            <input id="submit" type="submit" value="Log In"></input>
        </form>
    )
}

export default LogIn;