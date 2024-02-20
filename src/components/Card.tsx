import Image from 'next/image'
import bannerImg from '../../public/images/banner.png'
import '@/scss/card.scss'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faRepeat} from '@fortawesome/free-solid-svg-icons';




export default function Card(){
    return (
        <div className='card product-card' >
           <div className='img-container' >
            <Image src={bannerImg} alt='product' />
            <div className="icons-container">
            <form action="">

            <FontAwesomeIcon  className='icon' icon={faHeart} />

            </form>
            <form action="">
            <FontAwesomeIcon className='icon' icon={faShoppingCart}  />

            </form>
            <form action="">
            <FontAwesomeIcon className='icon' icon={faRepeat}  />
            </form>
           </div>
           </div>
           <div className="body flex flex-col gap-3 p-1 pt-2">
                <h3>Vaida dye</h3>
                <h4>$ 30.00</h4>
           </div>

        </div>
    )
}