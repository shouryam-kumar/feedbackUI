import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList(props) {
    const {feedback} = useContext(FeedbackContext)


    if (!feedback || feedback.length===0) {
        return <p>No Feedback Yet</p>
    }


    // return (
    //     <div className="feedback-list">
    //          <AnimatePresence>
    //         {props.feedback.map((item)=>(
    //             <motion.div key={item.id} initial = {{opacity:0}} animate={{opacity:1}} exit = {{}}>
    //             <FeedbackItem key={item.id} item={item} handleDelete = {props.handleDelete} />
    //             </motion.div>
    //         ))}
    //         </AnimatePresence>
    //     </div>
    // )



    return (
        <div className="feedback-list">
            {feedback.map((item)=>(
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    )
}


export default FeedbackList
