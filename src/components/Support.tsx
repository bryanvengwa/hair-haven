import '@/scss/searchbar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


export default function Support(){

    return(
        <>
        <div className="support-container flex " >
            <div className="left" >
                    <div className="phone-container" >
                    <FontAwesomeIcon icon={faPhone} className="phone"  />


                    </div>
            </div>
            <div className="right flex flex-col gap-2" >
                <h2>+65 11.188.888</h2>
                <span>support 24/7 time</span>
 
            </div>

        </div>
        </>
    )
}