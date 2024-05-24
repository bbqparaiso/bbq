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
                    confirmed={contact.confirmed}
                    paid={contact.paid}
                    food={contact.food}
                    plusOne={contact.plusOne}
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