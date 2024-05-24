import './ContactCard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const ContactCard = ({ name, surName, phone, description, id, image, deleteContact }) => {
    return (
        <li>
            <a class="card">
                <img src={image ? image : "https://i.imgur.com/oYiTqum.jpg"} class="card__image" alt="" />
                <div class="card__overlay">
                    <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                        <div class="card__header-text">
                            <h3 class="card__title">{name} {surName}</h3>
                            <span class="card__status">{phone}</span>
                        </div>
                    </div>
                    <p class="card__description">{description}</p>
                    <div class="container">
                        <button className="edit">
                            <BorderColorIcon sx={{ color: '#282c34' }} />
                        </button>
                        <button className="delete" onClick={() => deleteContact(id)}>
                            <DeleteIcon sx={{ color: '#282c34' }} />
                        </button>
                    </div>
                </div>
            </a>
        </li>

    )
}

export default ContactCard