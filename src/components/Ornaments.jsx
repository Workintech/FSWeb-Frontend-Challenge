import greyCircle from "../assets/shapes/greycircle.png"
import pinkRec from "../assets/shapes/pinkrec.png"
import greyDonut from "../assets/shapes/greydonut.png"
import greyRec from "../assets/shapes/greyrec.png"
import pinkDonut from "../assets/shapes/pinkdonut.png"

export default function Ornaments() {
    {/* 
            <img className="absolute " src={greyDonut} alt="" />
            <img className="absolute " src={greyRec} alt="" />
            <img className="absolute " src={pinkDonut} alt="" /> */}
    return(
        <>
        <div className="relative">
            <img className="absolute left-1/3 z-0 " src={greyCircle} alt="" />
            <img className="absolute right-0 -top-1/4" src={pinkRec} alt="" />

        </div>
        </>
    )
}