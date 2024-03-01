import Image from 'next/image'
import bannerImg from '../../public/images/banner.png'
import '@/scss/card.scss'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faRepeat} from '@fortawesome/free-solid-svg-icons';



interface CardProps {
    image: string;
    title : string;
    price : number;
}


export default function Card({image, title, price}: CardProps){
    return (
        <div className='card product-card' >
           <div className='img-container' >
            <Image src={image} alt='product' />
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
           <div className="body flex flex-col gap-2 p-1 pt-2">
                <h3 style={{textTransform:'capitalize'}} > {title} </h3>
                <h4>$ {price}</h4>
           </div>

        </div>
    )
}