import './section.css'
var classNames = require('classnames');

export const Section = (props) => {
    return(
        <section>
            {props.children}
        </section>
    ) 
}

export const Card = (props) => {
    let className = classNames({
        card: true,
        [`col-${props.col}`]: props.col,
        [`row-${props.row}`]: props.row,
    })
    return(
        <div className={className}>
            {props.children}
        </div>
    )
}

export const ImgWrapper = (props) => {
    let className = classNames({
        imgWrapper: true,
        [`col-${props.col}`]: props.col,
        [`row-${props.row}`]: props.row,
    })
    return(
        <div className={className}>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export const LinkWrapper = (props) => {
    let className = classNames({
        linkWrapper: true,
        [`col-${props.col}`]: props.col,
        [`row-${props.row}`]: props.row,
    })
    return(
        <a className={className} href={props.link} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    )
}