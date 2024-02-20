import Image from 'next/image'
import bannerImg from '../../public/images/banner.png'
import '@/scss/card.scss'




export default function Card(){
    return (
        <div className='card product-card' >
           <div className='img-container' >
            <Image src={bannerImg} alt='product' />
            
           </div>
           <div className="body flex flex-col gap-3 p-1">
                <h3>Vaida dye</h3>
                <h4>$ 30.00</h4>
           </div>
        </div>
    )
}