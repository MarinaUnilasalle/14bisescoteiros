'use client'
import './style.css';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";

const CustomFooter = () => {
    const handleClick = (url: string) => {
        window.open(url);
    }
    
    return (
        <div className="w-full flex footer-style h-32 items-center justify-around">
            <div className="flex flex-col items-center">
                <span>Grupo de Escoteiros do AR 14bis</span>
                <span>R. Tobias Barreto - Nossa Sra. das Gracas</span>  
                <span>Canoas - RS, 92110-310, Brasil</span>
            </div>
            <div className="flex flex-row">
                <FaInstagramSquare onClick={() => handleClick('https://www.instagram.com/grupodeescoteiros14bis/')} className='mr-3' size={30}/>
                <FaFacebookSquare onClick={() => handleClick('https://www.facebook.com/grupodeescoteiros14bis/')} className='mr-3' size={30}/>
                <FaWhatsappSquare size={30}/>
            </div>
        </div>
    );
};
export default CustomFooter;