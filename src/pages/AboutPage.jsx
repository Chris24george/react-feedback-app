import Card from "../components/shared/Card";
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>about this project</h1>
        <p>this is a react app to leave feedback for a product</p>
      </div>
      <Link to='/'>Go back to home</Link>
    </Card>
  )
}

export default AboutPage