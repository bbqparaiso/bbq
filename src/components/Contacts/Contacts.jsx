import AddContact from '../AddContact/AddContact'
import ContactList from '../ContactList/ContactList'
import SearchBar from '../SearchBar/SearchBar'
import './Contacts.css'
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';




const Contacts = () => {

    const [contacts, setContacts] = useState([])
    const getContacts = async () => {
        setPressed(true)
        const timeoutId = setTimeout(() => setPressed(false), 2000);
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

    const [pressed, setPressed] = useState(false);



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

    const [isPaid, setIsPaid] = useState(true);
    const filterPaid = () => {
        let toShow = currentFilter ?
            doFilter(contacts, currentFilter)
            : contacts;
        if (isPaid) {
            setShownContacts(toShow.filter(contact => contact.paid === false))
        } else {
            setShownContacts(toShow)
        }
        setIsPaid(!isPaid)
    }

    const doFilter = (contacts, filterExp) =>
        contacts.filter(contact =>
            contact.name.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().includes(filterExp.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase())
            || contact.surName.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().includes(filterExp.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase())
        );

    // const [filterExp, setFilterExp] = useState('')
    const [currentFilter, setCurrentFilter] = useState('')
    const [shownContacts, setShownContacts] = useState(contacts)
    const filterContacts = (filterExp) => {
        console.log('desde el filterContacts')
        console.log(filterExp)
        console.log(contacts)
        setShownContacts(!filterExp ? contacts :
            contacts.filter(contact => contact.name.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().includes(filterExp.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase())
                || contact.surName.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().includes(filterExp.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()))
        )
    }


    return (
        <div>
            <div className="Searchwrap">
                <div class="search">
                    <SearchBar filterContacts={filterContacts} setCurrentFilter={setCurrentFilter} />
                    <IconButton aria-label="refresh" sx={{ marginLeft: '1em', position: 'relative', top: '.1em', color: pressed ? '#3f4552' : '#c1ccda' }} onClick={getContacts}>
                        <RefreshIcon fontSize="large" />
                    </IconButton>
                    <IconButton aria-label="refresh" sx={{ marginLeft: '.45em', position: 'relative', top: '.1em', color: isPaid ? '#c1ccda' : 'red' }} onClick={filterPaid}>
                        <CreditCardOffIcon fontSize="large" />
                    </IconButton>
                </div>
            </div>
            <div className="Contacts">

                <ContactList contacts={shownContacts} deleteContact={deleteContact} />
                <AddContact addContactF={addContact} />
            </div>
            <div className="ContactsFill" />
        </div>

    )
}

export default Contacts