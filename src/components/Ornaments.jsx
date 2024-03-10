import greyCircle from "../assets/shapes/greycircle.png"
import pinkRec from "../assets/shapes/pinkrec.png"
import greyDonut from "../assets/shapes/greydonut.png"
import greyRec from "../assets/shapes/greyrec.png"
import pinkDonut from "../assets/shapes/pinkdonut.png"

export default function Ornaments() {
    return(
        <>
        <div className="relative">
            <img className="absolute top-0 left-1/4 -translate-x-1/2" src={greyCircle} alt="" />
            <img className="absolute left-0 translate-y-96" src={greyRec} alt="" />
            <img className="absolute left-3/4 translate-y-96" src={greyDonut} alt="" />
        </div>
        <div dir="rtl">
            <div className="relative">
                <img className="absolute start-0 translate-y-96" src={pinkRec} alt="" />
                <img className="absolute start-0 translate-y-96" src={pinkDonut} alt="" />
            </div>
        </div>
        
        </>
    )
}