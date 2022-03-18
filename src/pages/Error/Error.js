import { Section } from "../../components/Section/Section"
import treasure from './treasure.png'
import './error.css'

const Error = () => {
    return(
        <Section>
            <div className="error">
                <div className="error-img-wrapper">
                    <img
                        src={treasure}
                        alt="Карта сокровищ"
                    />
                </div>
                <h1>Упс! На этой странице нет сокровищ!</h1>
            </div>
        </Section>
    )
}

export default Error