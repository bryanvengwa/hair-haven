import Image from 'next/image'
import bannerImg from '../../public/images/banner.png'
import '@/scss/card.scss'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faRepeat} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '@/app/context/CartContext';



interface CardProps {
    image: string;
    title : string;
    price : number;
    product_id:number;
}


export default function Card({image, title, price , product_id}: CardProps){
    const {addCartItem } = useContext(CartContext);
    const handleAddToCart = (event: React.FormEvent<HTMLFormElement>) => {
        alert('clicked')
        console.log('code ran')
        event.preventDefault(); // Prevent the default form submission
        // Assuming addCartItem takes product_id and quantity as arguments
        addCartItem(product_id, 1); // Adjust the quantity as needed
    };
    return (
        <div className='card product-card' >
           <div className='img-container' >
            <Image src={image} layout='fill' className='img-fluid' alt='product' />
            <div className="icons-container">
            <form action="">
          
            <FontAwesomeIcon  className='icon' icon={faHeart} />

            </form>
            <form onSubmit={handleAddToCart}>
                <button>
                <FontAwesomeIcon  className='icon' icon={faShoppingCart}  />
                </button>
           
            <input type="hidden" name='product_id' value={product_id} />
                <input type="hidden" name='quantity' value={product_id} />

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