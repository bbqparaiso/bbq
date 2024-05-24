import './AddContact.scss'
import AddContactForm from '../AddContactForm/AddContactForm'
import { useState } from 'react'

const AddContact = ({addContactF}) => {

    const [showForm, setShowForm] = useState(false)
    const showContactTemplate = () => {
        setShowForm(!showForm)
    }
    return (
        <div id="container">
            <div>
            <button class="add-contact" onClick={showContactTemplate}>
                <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                </span>
                <span class="button-text">Add contact</span>
            </button>
            </div>
            {showForm && <AddContactForm addContactF={addContactF} showTemplate={showContactTemplate}/>}
        </div>
    )
}

export default AddContact