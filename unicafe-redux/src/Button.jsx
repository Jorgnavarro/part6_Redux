
export function Button ({text, className, handleClick, value }){

    return(
        <button type="button" className={className} value={value} onClick={handleClick}>{text}</button>
    )
}