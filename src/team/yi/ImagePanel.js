import React, {useRef, useState} from 'react';
import './src/ImagePanel.css'
import image from './src/image.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faSearchMinus, faExpand, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import ReactCSSTransitionGroup from 'react-transition-group';

function ImagePanel() {

    const [zoom, setZoom] = useState(1);
    const [hideImage, setImage] = useState(false);
    const [toggleMax, setMax] = useState(false)

    let maxHW = {
        height: "100%",
        width: "100%",
        borderColor: "red"
    }

    function plusClick() {
        return (
            setZoom(zoom => zoom + .1)
        )
    }

    function minusClick() {
        return (
            setZoom(zoom => zoom - .1)
        )
    }

    function maxClick() {
        return (
            setMax(!toggleMax)
        )
    }

    function hideClick() {
        return (
            setImage(!hideImage)
        )
    }

    return ( 
        <div>
            <span>
                <img className="image" style={{ zoom, visibility: hideImage ? "hidden" : "visible", width: toggleMax ? "100%" : console.log("nope"), height: toggleMax ? "100%" : console.log("nope")}} src={image} />
                <div className="icons">
                    <FontAwesomeIcon className="icon" icon={faSearchPlus} onClick={plusClick} />
                    <FontAwesomeIcon className="icon" icon={faSearchMinus} onClick={minusClick} />
                    <FontAwesomeIcon className="icon" icon={faExpand} onClick={maxClick} />
                    <FontAwesomeIcon className="icon" icon={faEyeSlash} onClick={hideClick} />
                </div>
            </span>
            {/* <div className="icons">
                    <FontAwesomeIcon className="icon" icon={faSearchPlus} onClick={plusClick} />
                    <FontAwesomeIcon className="icon" icon={faSearchMinus} onClick={minusClick} />
                    <FontAwesomeIcon className="icon" icon={faExpand} onClick={fullClick} />
                    <FontAwesomeIcon className="icon" icon={faEyeSlash} style={{display: "flex !important"}} onClick={hideClick} />
            </div> */}
        </div>
    )
}

export default ImagePanel