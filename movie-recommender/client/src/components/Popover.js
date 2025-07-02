import { useState, useRef } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";


function OverlayFlag(props) {
    console.log(props)
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClink = (event) => {
        setShow(!show);
        setTarget(event.target);
    }

    return (
        <div ref={ref}>
            <Button onClick={handleClink} className="bg-transparent border-0">{props.name}</Button>
            <Overlay 
                show={show}
                target={target}
                placement="bottom"
                container={ref}
            >
            <Popover id="popover-contained" className="bg-black" >
               <Popover.Body className="d-flex flex-column">
                {
                   props.data && props.data.map((list, prop) =>(
                        <a key={prop} className="text-white text-decoration-none" href="#top-genres">{list}</a>
                    ))
                }
                </Popover.Body> 
            </Popover>
            </Overlay>
        </div>
    )
}

export default OverlayFlag;