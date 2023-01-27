import { useParams, Link } from 'react-router-dom'
function WelcomeComponent() {
    const { username } = useParams()

    

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos here: <Link to="/todos">Todos</Link>

            </div>
        </div>
    )
}

export default WelcomeComponent