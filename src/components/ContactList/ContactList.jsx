import './ContactList.css'
import ContactCard from '../ContactCard/ContactCard'

const ContactList = () => {
    return (
        <div className="ContactList">
            {/* List of contact cards */}
            <ContactCard />
            <ContactCard />
            <ContactCard />
        </div>
    )
}

export default ContactList