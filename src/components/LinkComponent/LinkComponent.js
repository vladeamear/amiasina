import './link.css'

function LinkComponent(props) {

    function shortenlink(link) {
        if (link.length > 50) {
            return link.substring(0, 50) + '...'
        } else {
            return link
        }
    }

    return(
        <div className="links-link">
            <a href={props.link} className="" target="_blank" rel="noreferrer">
                <span>{props.name}</span>
                <span>{shortenlink(props.link)}</span>
            </a>
        </div>
    )
}

export default LinkComponent