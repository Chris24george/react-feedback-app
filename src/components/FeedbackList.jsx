import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

function FeedbackList() {

  const {feedback} = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet.</p>
  }

  return (
    <div className="feedback-list">
      {
        feedback.map((item) => (
          <FeedbackItem 
            key={item.id} 
            item={item}
          />
        ))
      }
    </div>
  )
}


export default FeedbackList