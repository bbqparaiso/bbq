import './ContactList.css'
import ContactCard from '../ContactCard/ContactCard'

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <div className="ContactList">
            {/* List of contact cards */}
            <ul class="cards">
                {typeof contacts !== 'undefined' && contacts.length > 0 ? contacts.map(contact => <ContactCard
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
                />) :
                <ContactCard
                    key={'default'}
                    name={'Nobody :('}
                    surName={''}
                    confirmed={false}
                    paid={false}
                    food={true}
                    plusOne={false}
                    image={''}
                    deleteContact={deleteContact}
                    id={'default'}
                />
                }
            </ul>
        </div>
    )
}

export default ContactList