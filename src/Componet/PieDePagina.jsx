import facebook from '../assets/social/facebook-white.svg'
import twitter from '../assets/social/twitter-white.svg'
import ing from '../assets/social/instagram-white.svg'
function PieDePagina() {
    return ( 
        <div className="bg-black h-40">
            <div className="ml-20 pt-6">
                <a href="#" className="text-white  mr-5">Home</a>
                <a href="#" className="text-white  mr-5">Terms and Conditions</a>
                <a href="#" className="text-white  mr-5">Privacy Policy</a>
                <a href="#" className="text-white  mr-5">Collection Statement</a>
                <a href="#" className="text-white  mr-5">Help</a>
                <a href="#" className="text-white  mr-5">Manage Account</a>
            </div>
            <div>
                <p className="text-white ml-20 text-sm mt-2">Copyrigth c 2016 Demo Streaming.All Rigth Reserved.</p>
            </div>
            <div>
                <div className='flex ml-20 mt-3 border-white'>
                    <img src={facebook} alt="Facebook" className='w-4 h-auto mr-5'/>
                    <img src={twitter} alt="Twitter" className='w-6 h-auto mr-5'/>
                    <img src={ing} alt="instagram" className='w-6 h-auto mr-5'/>
                </div>
            </div>
        </div>
     );
}

export default PieDePagina;