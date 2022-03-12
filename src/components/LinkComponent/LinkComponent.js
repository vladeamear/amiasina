import './link.css'

function LinkComponent(props) {

    function shortenlink(link) {
        if (link.length > 50) {
            return link.substring(0, 50) + '...'
        } else {
            return link
        }
    }

    return(<>
    <p><a href={props.link} className="links-link" target="_blank" rel="noreferrer">
        <span>{props.name}</span>
        <br />
        <span>{shortenlink(props.link)}</span>
    </a></p>
    </>)
}

export default LinkComponent