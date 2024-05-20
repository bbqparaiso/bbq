import AddContact from '../AddContact/AddContact'
import ContactList from '../ContactList/ContactList'
import SearchBar from '../SearchBar/SearchBar'
import './Contacts.css'


const Contacts = () => {
    return (
        <div className="Contacts">
            <h1>Contacts</h1>
            <SearchBar />
            <ContactList />
            <AddContact />
        </div>
    )
}

export default Contacts