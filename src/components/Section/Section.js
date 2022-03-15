import './section.css'

export const Section = (props) => {
    return(
        <section>
            {props.children}
        </section>
    ) 
}

export const ImgWrapper = (props) => {
    return(
        <div className='img-wrapper'>
            <img src={props.src} alt={props.alt}/>
        </div>
    )
}

export const Card = (props) => {
    let className = 'card'
    if (props.col) className += ` col-${props.col}`
    if (props.row) className += ` col-${props.row}`
    return(
        <div className={className}>
            {props.children}
        </div>
    )
}