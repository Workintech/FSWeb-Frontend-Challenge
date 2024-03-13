import { useState, useEffect } from 'react';
import scrollUp from "../assets/scrollUp.png";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Sayfa yüklendiğinde ve kullanıcı scroll yaptığında buton görünecek
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Sayfayı en üste kaydırmak için bir fonksiyon oluşturun
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="fixed right-4 bottom-4">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                >
                  <img src={scrollUp}  alt="" /> 
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
