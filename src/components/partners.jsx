import arche from '../assets/partners/arche-nova.png'
import unicef from '../assets/partners/unicef.png'
import care from '../assets/partners/care.png'
import deaconess from '../assets/partners/deaconess.png'
import Asset21 from '../assets/partners/Asset21.png'
import Asset26 from '../assets/partners/Asset26.png'
import ocha from '../assets/partners/ocha.png'
import usaid from '../assets/partners/usaid.png'
import zoa from '../assets/partners/zoa.png'

export default function Partners(){
    return (
        <>
                <section id="partners" className="py-1">
        <div className="container-sm">
        <h2 className="text-center py-2 my-3 fw-bold">Our Partners</h2>
            <div className="flex-container">
                <img src={arche} alt=""/>
                <img src={unicef} alt=""/>
                <img src={care} alt=""/>
                <img src={deaconess} alt=""/>
                <img src={Asset21} alt=""/>
                <img src={Asset26} alt=""/>
                <img src={ocha} alt=""/>
                <img src={usaid} alt=""/>
                <img src={zoa} alt=""/>
            </div>
        </div>
    </section>
        </>
    )
}