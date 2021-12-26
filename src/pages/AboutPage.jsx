import {Link} from 'react-router-dom'
import Card from "../components/shared/Card"

function AboutPage() {
    return (
        <Card className="about">
            <h1>About this Project</h1>
            <p>This is a React app to leave feeedback for a product or service</p>
            <p>Version: 1.0.0</p>
            
            <p>
                <Link to="/">Back to home</Link>
            </p>
        </Card>
    )
}

export default AboutPage
