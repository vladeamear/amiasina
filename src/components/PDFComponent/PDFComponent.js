import './pdf.css'

function PDFComponent(props) {
    return(<>
    <div className="pdf">
        <a href={props.link} className="pdf-download" target="_blank" rel="noreferrer"> </a>
        <div className="pdf-info">
            <span>{props.name}</span>
            <span>{props.size}</span>
        </div>
    </div>
    </>)
}

export default PDFComponent