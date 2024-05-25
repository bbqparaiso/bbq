import './CustomHeader.scss'
import video from './video-head.mp4'

const CustomHeader = () => {
    return (
        <div class="customHeader">
            <video playsInline autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
            <header class="title">
                <h1>PARAÍSO BBQ</h1>
                {/* <nav>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Stores</a>
                    <a href="#">Contact</a>
                </nav> */}
            </header>
            <div id="fashion">
                <h2>Ven a disfrutar de esta hermosa barbacoa</h2>
            </div>
        </div>
    )
}

export default CustomHeader