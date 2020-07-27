import React, {useRef, useState, useEffect} from 'react';
import './src/ImagePanel.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faSearchMinus, faExpand, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import Draggable from 'react-draggable'; 

function ImagePanel() {

  const [zoom, setZoom] = useState(true);
  const [hideImage, setHideImage] = useState(false);
  const [toggleMax, setMax] = useState(false)
  const imageRef = useRef()
  let [dimensions, setDimensions] = useState({ 
    height: null,
    width: null
  })
  let [containerDimensions, setContainerDimensions] = useState({
    height: 0,
    width: 0
  })
  let [contentDimensions, setContentDimensions] = useState({
    height: 0,
    width: 0
  })
  const [image, setImage] = useState("null")
  let [src, setSrc] = useState("")
  const [drags, setDrags] = useState(0)
  const [pos, setPos] = useState({x: 282, y: 282})
  const [maxRes, setMaxRes] = useState({height: null, width: null, prevHeight: null, prevWidth: null})

  const handleDrag = (e, ui) => {
    const {x, y} = pos;
      setPos({
          x: x + ui.deltaX,
          y: y + ui.deltaY,
      })
  }

  const onStart = () => {
    setDrags( drags => drags + 1)
  };
  

  const onStop = () => {
    setDrags( drags => drags - 1)
  };

  const imageLoad = () => {
    setDimensions({
      height: imageRef.current.offsetHeight || 0,
      width: imageRef.current.offsetWidth || 0
    })
    setContentDimensions({
      height: imageRef.current.offsetHeight + 50,
      width: imageRef.current.offsetWidth + 50
    })
    setContainerDimensions({
      height: imageRef.current.offsetHeight + 1000,
      width: imageRef.current.offsetWidth + 1000
    })
    setSrc(image)
    }
    
  function plusClick() {
      setZoom(zoom => zoom + .1)
      setContentDimensions({
          height: contentDimensions.height + 20,
          width: contentDimensions.width + 20
        })
  }

  function minusClick() {
      setZoom(zoom => zoom - .1)
      setContentDimensions({
          height: contentDimensions.height - 20,
          width: contentDimensions.width - 20
        })
  }

  useEffect(() => {
    if (toggleMax == true) {
      setContentDimensions({
        height: maxRes.height,
        width: maxRes.width
      })
    } else {
      setContentDimensions({
        height: maxRes.height,
        width: maxRes.width
      })
    }
    }, [maxRes])

  function maxClick() {
    setMax(!toggleMax)
    console.log(containerDimensions.height)
    console.log(contentDimensions.height)
    console.log(toggleMax)
    if (toggleMax == false) {
      setMaxRes({
        height: containerDimensions.height,
        width: containerDimensions.width,
        prevHeight: contentDimensions.height,
        prevWidth: contentDimensions.width
      })
      setPos({
        x: 0, y:0
      })
    } else {
      setMaxRes({
        height: maxRes.prevHeight,
        width: maxRes.prevHeight,
        prevHeight: maxRes.height,
        prevWidth: maxRes.width
      })
      setPos({
        x: 475, y:475
      })
    }
  }

  function hideClick() {
      return (
          setHideImage(!hideImage)
      )
  }
    
  return ( 
      <div>
          <div className="imageContainer" style={{height: '700px', width: '700px', overflow: "auto", padding: '0px'}}>
              <div className="imageSpace" style={{height: containerDimensions.height || "690px", width: containerDimensions.width || "690px", padding: "0"}}>
                  <Draggable
                      handle=".handle"
                      position={pos}
                      scale={1}
                      onStart={onStart}
                      onDrag={handleDrag}
                      onStop={onStop}
                      bounds="parent">
                          <div className="handle" style={{height: contentDimensions.height || "125px", width: contentDimensions.width || "125px", padding: "0"}}>
                          <div>
                              <button onClick={() => setImage("https://picsum.photos/200", setPos({x:475,y:475}))}>Image 200px</button> <br></br>
                              <button onClick={() => setImage("https://picsum.photos/300", setPos({x:475,y:475}))}>Image 300px</button> <br></br>
                              <button onClick={() => setImage("https://picsum.photos/400", setPos({x:475,y:475}))}>Image 400px</button> <br></br>
                              <img className="image" style={{ zoom, visibility: hideImage ? "hidden" : "visible", width: toggleMax ? "100%" : "", height: toggleMax ? "100%" : ""}} 
                              src= {image} alt="" ref={imageRef} onLoad={imageLoad}/> 
                          </div>
                          </div>
                      </Draggable>
                  </div>
              </div>
          <div className="icons">
              <button className="iconButtons" onClick={plusClick}><FontAwesomeIcon className="icon" icon={faSearchPlus} /></button>
              <button className="iconButtons" onClick={minusClick}><FontAwesomeIcon className="icon" icon={faSearchMinus} /></button>
              <button className="iconButtons" onClick={maxClick}><FontAwesomeIcon className="icon" icon={faExpand} /></button>
              <button className="iconButtons" onClick={hideClick}><FontAwesomeIcon className="icon" icon={faEyeSlash} /></button>
          </div>
      </div>
    )
}

export default ImagePanel