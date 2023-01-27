import { useContext } from "react"
import { AuthContext } from "./security/AuthContext"

function FooterComponent() {
    const authContext = useContext(AuthContext)
    console.log(authContext.number)
    return (
        <footer header='footer'>
            <div className='container'>
                Your Footer
            </div>
        </footer>
    )
}

export default FooterComponent