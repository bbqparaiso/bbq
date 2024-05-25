import './CustomHeader.scss'
import video from './video-head-bbq.mp4'
import {useState,useEffect,useRef} from 'react';

const CustomHeader = () => {

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    const scrollToList = () => {
        if(isMobile){
            window.scrollTo({ top: 947, behavior: "smooth" })
        }else{
            window.scrollTo({ top: 673, behavior: "smooth" })
        }
    }

    return (
        <div class="customHeader">
            <video playsInline autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <header class="title">
                <h1>PARAÍSO BBQ</h1>
                <nav>
                    <a href="#">Merch</a>
                    <a href="#" onClick={scrollToList}>Guest List</a>
                </nav>
            </header>
            <div id="fashion">
                <h2>Ven a disfrutar de esta hermosa barbacoa</h2>
            </div>
        </div>
    )
}

export default CustomHeader