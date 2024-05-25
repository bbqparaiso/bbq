import './ContactCard.css'
import DeleteIcon from '@mui/icons-material/Delete';
// import BorderColorIcon from '@mui/icons-material/BorderColor';
import PaidIcon from '@mui/icons-material/Paid';
import PlusOneIcon from '@mui/icons-material/PlusOne';

const ContactCard = ({ name, surName, confirmed, description, id, image, deleteContact, paid, food, plusOne }) => {

    const green = "#8CD881"
    // const grey = "#C0C5CF"
    const grey = "#F9F871"
    const getColor = () => {
        return confirmed ? green : grey;
    }
    const greenStyleBackground = {backgroundColor: getColor()}
    const greenStyleFill = {fill:getColor()}
    return (
        <li>
            <a class="card">
                <img src={image ? image : `https://robohash.org/${id}.png`} class="card__image" alt="" />
                <div class="card__overlay" style={greenStyleBackground}>
                    <div class="card__header" style={greenStyleBackground}>
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path style={greenStyleFill}/></svg>
                        {/* <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                        <div class="card__header-text">
                            <div>
                            <h3 class="card__title">{name} {surName}</h3>
                            <h3 class="card__title__icon"><PaidIcon sx={{ color: paid? 'green': "red" }}/></h3>
                            </div>
                            <span class="card__status">{paid ? 'Pagado' : 'No pagado'}</span>
                            {plusOne && <PlusOneIcon style={{"position":"absolute","right":"1em"}}/>}
                        </div>
                    </div>
                    <p class="card__description">{description}</p>
                    <div class="container">
                        {
                            confirmed ?
                        <span class="card__status" style={{"margin-left":"1.5em"}}>Confirmado</span> :
                        <span class="card__status" style={{"margin-left":"1.5em"}}>No confirmado</span>
                        }
                        
                        {/* <button className="edit">
                            <BorderColorIcon sx={{ color: '#282c34' }} />
                        </button> */}
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