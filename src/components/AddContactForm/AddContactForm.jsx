import './AddContactForm.css'
import { useState, useEffect } from 'react'
import SaveIcon from '@mui/icons-material/Save';

const AddContactForm = ({ addContactF, showTemplate }) => {
    const [contactName, setContactName] = useState('')
    const [contactSurname, setContactSurname] = useState('')
    const [contactPhone, setContactPhone] = useState('')
    const [contactDescription, setDescription] = useState('')
    const [contactImage, setImage] = useState('')
    const [imageRender, setImageRender] = useState('')
    const saveContact = () => {
        addContactF({ id: `${contactName}/${contactSurname}`, name: contactName, surName: contactSurname, phone: contactPhone, description: contactDescription, image: imageRender})
        showTemplate()
    }

    useEffect(() => {
            if(contactImage === '') setImageRender('')
             let img = new Image();
             img.src = contactImage;
            img.onload = () => {
                if (img.width >= 100 && img.height >= 100) {
                    setImageRender(contactImage);
                } else {
                    setImageRender('');
                }
            };
    }, [contactImage]);

    return (
        <div className="wrapper">
            <a class="card">
                <img src={imageRender ? imageRender : "https://i.imgur.com/oYiTqum.jpg"} class="card__image form" alt="" />
                <div class="card__overlay">
                    <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                        <div class="card__header-text">
                            <input type="text" autocomplete="off" name="text" class="input" placeholder="Name" onChangeCapture={e => setContactName(e.target.value)} />
                            <input type="text" autocomplete="off" name="text" class="input" placeholder="Surname" onChangeCapture={e => setContactSurname(e.target.value)} />
                            <input type="text" autocomplete="off" name="text" class="input" placeholder="Phone" onChangeCapture={e => setContactPhone(e.target.value)} />
                            <input type="text" autocomplete="off" name="text" class="input" placeholder="Description" onChangeCapture={e => setDescription(e.target.value)} />
                        </div>
                    </div>
                    <p class="card__description">
                        <div class="container">
                            <input type="text" autocomplete="off" name="text" class="input" placeholder="Image link" onChangeCapture={e => setImage(e.target.value)} />
                            <button className="save" onClick={saveContact}>
                                <SaveIcon fontSize="large" sx={{ color: '#282c34' }} />
                            </button>
                        </div>
                    </p>
                </div>
            </a>
        </div>
    )
}

export default AddContactForm