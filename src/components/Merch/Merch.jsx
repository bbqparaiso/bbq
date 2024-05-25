import './Merch.css'
import RecipeReviewCard from './RecipeCard'
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import tshirt from './tshirt.png'
import alex from './disco-alex.png'
import roi from './disco-roi.jpg'
import banana from './Banana.png'
import ticket from './ticket.jpg'
import bbq from './bbqa.png'

const Merch = ({ }) => {

    const [spacing, setSpacing] = useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };


    // const [showForm, setShowForm] = useState(false)
    // const showContactTemplate = () => {
    //     setShowForm(!showForm)
    // }
    return (
        <div id="container" class="Merch" styñe={{marginBottom:'-5px'}}>
            <h1 class="title">MERCHANDISING</h1>
            <br />
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        
                            <Grid key='1' item>
                                <RecipeReviewCard name="Paraíso Staff BBQ T-Shirt" sub="25€"
                                    detail="Paraíso BBQ, where the dreams come true! Just stop dreaming and buy this paraíso BBQ Staff T-Shirt. With it you can feel as if you were also part of the staff."
                                    moreDetail="Contact with the Paraíso BBQ Staff if you want to buy this product."
                                    image={tshirt}
                                />
                            </Grid>
                            <Grid key='2' item>
                                <RecipeReviewCard name="X - Alex Perea" sub="30€"
                                    detail="Get Alex Perea's new album now! Don't let this opportunity pass you by. If you buy it today, he can sign it for you! And if you haven't listened to it yet, this is the best time to do it."
                                    moreDetail="Contact with the Paraíso BBQ Staff if you want to buy this product."
                                    image={alex}
                                />
                            </Grid>
                            <Grid key='3' item>
                                <RecipeReviewCard name="Mi lógico desorden" sub="10€"
                                    detail="An old relic is always valuable. Don't miss the opportunity to buy Roi Mendez's first album, it's the only one so far. A great souvenir of this fantastic barbecue!"
                                    moreDetail="Contact with the Paraíso BBQ Staff if you want to buy this product."
                                    image={roi}
                                />
                            </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        
                            <Grid key='4' item>
                                <RecipeReviewCard name="M. Virtual" sub="Priceless"
                                    detail="
                                    If you know, you know.
                                    It is not M.Rajoy, it is the virtual M****da. One of roi's specialties. Show how long you can hold out and win fantastic prizes."
                                    moreDetail="Contact with the Paraíso BBQ Staff if you want to buy this product."
                                    image={banana}
                                />
                            </Grid>
                            <Grid key='5' item>
                                <RecipeReviewCard name="Surprise Concert" sub="20€"
                                    detail="Get a ticket for a surprise concert of any of the people present at the barbecue! You can get a great concert or a not so interesting one... But the risk is the thrill. Don't let it pass you by!"
                                    moreDetail="Contact with the Paraíso BBQ Staff if you want to buy this product."
                                    image={ticket}
                                />
                            </Grid>
                            <Grid key='6' item>
                                <RecipeReviewCard name="BBQ general ticket" sub="15€"
                                    detail="If you haven't paid for the barbecue yet, don't forget to do it! It seems a small amount, but there are many of us. Paraiso BBQ organization will give you the best service. "
                                    moreDetail="Contact with the Paraíso BBQ Staff if you want to buy this product."
                                    image={bbq}
                                />
                            </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Merch