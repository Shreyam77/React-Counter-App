import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <HeaderComponent/>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                    <Route path='/todos' element={<ListTodosComponent />}></Route>
                    <Route path='/logout' element={<LogoutComponent />}></Route>
                    <Route path='*' element={<ErrorComponent />}></Route>
                </Routes>
            </BrowserRouter>

            <FooterComponent/>
        </div>
    )
}

function LoginComponent() {
    const [username, setUsername] = useState('Shreyam')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setSuccessMessage] = useState(false)
    const [showErrorMessage, setErrorMessage] = useState(false)
    const navigate = useNavigate()
    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }
    function handleSubmit() {
        if (username === 'Shreyam' && password === 'pass') {
            setSuccessMessage(true)
            setErrorMessage(false)
            navigate(`/welcome/${username}`)
        }
        else {
            setSuccessMessage(false)
            setErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            <h1>Login</h1>
            {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>}
            {showErrorMessage && <div className='errorMessage'>Authenticated Failed</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    const {username} = useParams()

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos here: <Link to="/todos">Todos</Link>

            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>Apologies for the 404. Reach out to our team</div>
        </div>
    )
}

function ListTodosComponent() {
    const today = new Date()
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
    const todos = [
        {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
        {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate},
        {id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate}
    ]
    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>DESCRIPTION</td>
                        <td>DONE ?</td>
                        <td>TARGET DATE</td>
                    </tr>
                </thead>
                <tbody>
                {
                    todos.map(
                        todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>   
                        )
                    )
                }    
                </tbody>
            </table>
        </div>
    )
}

function HeaderComponent() {
    return (
        <div className="header">
            Header <hr/>
        </div>
    )
}

function FooterComponent() {
    return (
        <div className="footer">
            <hr/> Footer
        </div>
    )
}

function LogoutComponent() {
    return (
        <div className="LogoutComponent">
            <h1>You are Logged Out</h1>
            <div>Thank  you for using our App. Come Back Soon</div>
        </div>
    )
}