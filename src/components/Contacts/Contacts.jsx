import AddContact from '../AddContact/AddContact'
import ContactList from '../ContactList/ContactList'
import SearchBar from '../SearchBar/SearchBar'
import './Contacts.css'
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';




const Contacts = () => {

    const [contacts, setContacts] = useState([])
    const getContacts = async () => {
        console.log('Fetch contacts')
        
        const repo = await fetch('https://api.github.com/repos/alvaroirimia/bbq-data/branches/main')
        const resp = await repo.json();
        const commit = resp.commit.sha;

        console.log(commit)
        // const data = await fetch('https://raw.githubusercontent.com/alvaroirimia/bbq-data/main/guests.json')
        const data = await fetch(`https://raw.githubusercontent.com/alvaroirimia/bbq-data/${commit}/guests.json?v=1`)
        const response = await data.json()
        console.log('recuperados')
        console.log(response)

        const newContacts = response

        setContacts(newContacts)
    }

    // const refresh = async () => {
    //     await getContacts();
    //     filterContacts(currentFilter);
    // }

    useEffect(() => {
        getContacts()
    }, [])


    // const [contacts, setContacts] = useState([
    //     { id: 'JuanMartinez', name: 'Juan', surName: 'Martinez', phone: '123456789', description: 'Mi médico de cabecera' },
    //     { id: 'PedroFernandez', name: 'Pedro', surName: 'Fernandez', phone: '987654321', description: 'Mi dentista' }
    // ])
    // const [contactInput, setContactInput] = useState('')
    const addContact = (contactInput) => {
        console.log('añado contacto')
        setContacts([...contacts, contactInput])
        console.log('empiezo a filtrar')
        filterContacts(currentFilter)
    }

    const deleteContact = (id) => {
        console.log('borro contacto')
        setContacts(contacts.filter(contact => contact.id !== id))
        filterContacts(currentFilter)
    }

    useEffect(() => {
        console.log('Cambio contacts, se filtra')
        filterContacts(currentFilter)
    }, [contacts]);

    // const [filterExp, setFilterExp] = useState('')
    const [currentFilter, setCurrentFilter] = useState('')
    const [shownContacts, setShownContacts] = useState(contacts)
    const filterContacts = (filterExp) => {
        console.log('desde el filterContacts')
        console.log(filterExp)
        console.log(contacts)
        setShownContacts(!filterExp ? contacts :
            contacts.filter(contact => contact.name.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().includes(filterExp.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase())
                || contact.surName.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().includes(filterExp.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase())
                ))
    }

    // const addContact = () => {
    //     if (validateInput()) {
    //         setContacts([...contacts, contactInput])
    //     } else {
    //         alert('El contacto debe tener menos de 10 caracteres')
    //     }
    // }

    // const getInputStyle = () => {
    //     return validateInput() ? { border: '1px solid black' } : { border: '3px solid red' }
    // }

    // const validateInput = () => {
    //     return contactInput.length < 10
    // }

    return (
        <div className="Contacts">
            {/* <div>
                <p>Contacto nuevo:</p>
                <input
                    type="text"
                    placeholder="Type your name..."
                    style={getInputStyle()}
                    onChange={e => setContactInput(e.target.value)} />
                <button
                    onClick={addContact}
                    disabled={!validateInput()}
                >Add contact</button>
                {!validateInput() && <p className="ErrorMessage">El contacto debe tener menos de 10 caracteres</p>}
            </div> */}
            {/* {contacts.map(el => <p>{el}</p>)} */}
        
            <div class="search">
                <SearchBar filterContacts={filterContacts} setCurrentFilter={setCurrentFilter} />
                <IconButton aria-label="refresh" sx={{ marginLeft: '1em', position: 'relative', top: '.1em'}} onClick={getContacts}>
                    <RefreshIcon fontSize="large" sx={{ color: '#c1ccda'}} />
                </IconButton>
            </div>
            
            <ContactList contacts={shownContacts} deleteContact={deleteContact} />
            <AddContact addContactF={addContact} />



        </div>
    )
}

export default Contacts