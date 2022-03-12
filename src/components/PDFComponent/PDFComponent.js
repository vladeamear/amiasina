import './pdf.css'

function PDFComponent(props) {
    return(<>
    <div className="pdf">
        <a href={props.link} className="pdf-download" target="_blank" rel="noreferrer"> </a>
        <div className="pdf-name-info">
            <div className="pdf-name">
                {props.name}
            </div>
            <div className="pdf-info">{props.size}</div>
        </div>
    </div>
    </>)
}

export default PDFComponent