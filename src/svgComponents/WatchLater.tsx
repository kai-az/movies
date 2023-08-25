import { IsvgProps } from "../interfaces/SvgProps"


function WatchLater({  className, width, height, id, handleClick}:IsvgProps ) {

return (
    <svg
        className={className}
        id={id}
        onClick={handleClick}
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
    >
        <path d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17.5L5 21V5Z"
           />
    </svg>
    )
}

export default WatchLater
