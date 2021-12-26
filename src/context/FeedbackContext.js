import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=>{
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is feedback item2',
            rating: 10
        },
        {
            id: 3,
            text: 'This is feedback item3',
            rating: 10
        },
        {
            id: 4,
            text: 'This is feedback item4',
            rating: 10
        },
        {
            id: 5,
            text: 'This is feedback item5',
            rating: 10
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id)=> {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item)=> item.id !== id ))
        }
    }

    //Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    //add feedback
    const addFeedback = (newFeedback)=>{
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback,...feedback])
    }

    //update feedback item

    const updateFeedback = (id,updItem)=>{
        setFeedback(feedback.map((item)=>item.id===id?{...item , ...updItem}: item))
        setFeedbackEdit.edit(false)
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback, 
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext