'use client';
import '@/scss/heading.scss'
import{ useState} from 'react'



export default function Tabbed(){
    'use client';

const [isActive , setIsActive ] = useState(1);
function toggler (number: number):void{
    setIsActive(number)
}

    return (
        <div className="tabbed flex align-center justify-center" >
            <ul className=' flex gap-3'>
                <li onClick={()=>{toggler(1)}}  className={`${ isActive == 1 ? 'active': " " }`} >All</li>
                <li onClick={()=>{toggler(2)}}  className={`${ isActive == 2 ? 'active': " " }`}  >Dye</li>
                <li onClick={()=>{toggler(3)}}  className={`${ isActive == 3 ? 'active': " " }`}  >Shampoo</li>
                <li onClick={()=>{toggler(4)}}  className={`${ isActive == 4 ? 'active': " " }`}  >Conditioner</li>
                <li onClick={()=>{toggler(5)}}  className={`${ isActive == 5  ? 'active': " " }`}  >Treaters</li>
            </ul>
        </div>
    )

}