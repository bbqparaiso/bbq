import './ContactList.css'
import ContactCard from '../ContactCard/ContactCard'

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <div className="ContactList">
            {/* List of contact cards */}
            <ul class="cards">
                {contacts.map(contact => <ContactCard
                    key={contact.id}
                    name={contact.name}
                    surName={contact.surName}
                    phone={contact.phone}
                    description={contact.description}
                    image={contact.image}
                    deleteContact={deleteContact}
                    id={contact.id}
                />)}
            </ul>
        </div>
    )
}

export default ContactList