import './aboutme.css'
import avatar from './avatar.jpg'
import article2020 from './article-2020.pdf'
import article2021 from './article-2021.pdf'
import PDFComponent from '../../components/PDFComponent/PDFComponent'
import { Card, ImgWrapper, Section } from '../../components/Section/Section'
import Helmet from 'react-helmet'

const AboutMe = () => {

    return (<>
        <Helmet>
            <title>Анастасия Мясина</title>
            <meta name='description' content='Главная страница личного сайта учителя географии Мясиной Анастасии' />
        </Helmet>
        <Section>
            <ImgWrapper col={1} src={avatar} alt="Моя фотография" />
            <Card col={3}>
                <p>
                    Ра&shy;да при&shy;вет&shy;ст&shy;во&shy;вать Вас на&nbsp;лич&shy;ном сай&shy;те! Ме&shy;ня зо&shy;вут <span className="highlight">Мя&shy;си&shy;на Ана&shy;ста&shy;сия Алек&shy;сан&shy;дров&shy;на</span>, я пре&shy;по&shy;даю гео&shy;гра&shy;фию в шко&shy;ле <span className="nowrap">г. Санкт-Петербург.</span>
                </p>
                <p>Профессиональные интересы:</p>
                <ul>
                    <li>мотивация учащихся,</li>
                    <li>страноведение,</li>
                    <li>экология России,</li>
                    <li>РСО.</li>
                </ul>
                <p>Увлечения:</p>
                <ul>
                    <li>фотография,</li>
                    <li>вышивка,</li>
                    <li>рукоделие.</li>
                </ul>
                <blockquote>«Учитель прикасается к&nbsp;вечности: никто не&nbsp;может сказать, где кончается его влияние»</blockquote>
                <figcaption>Генри Адамс</figcaption>
            </Card>
            <Card col={4}>
                <h1>Образование</h1>
                <p>
                    На&shy;цио&shy;наль&shy;ный ис&shy;сле&shy;до&shy;ва&shy;тель&shy;ский Мор&shy;дов&shy;ский го&shy;су&shy;дар&shy;ст&shy;вен&shy;ный уни&shy;вер&shy;си&shy;тет име&shy;ни <span className="nowrap">Н.П. Огарёва,</span> гео&shy;гра&shy;фи&shy;чес&shy;кий фа&shy;куль&shy;тет, эко&shy;ло&shy;гия и при&shy;ро&shy;до&shy;поль&shy;зо&shy;ва&shy;ние, ба&shy;ка&shy;лавр, <span className="nowrap">2015–2019 гг.</span>
                </p>
                <p>
                    На&shy;цио&shy;наль&shy;ный ис&shy;сле&shy;до&shy;ва&shy;тель&shy;ский Мор&shy;дов&shy;ский го&shy;су&shy;дар&shy;ст&shy;вен&shy;ный уни&shy;вер&shy;си&shy;тет име&shy;ни <span className="nowrap">Н.П. Огарёва,</span> про&shy;фес&shy;си&shy;о&shy;наль&shy;ная пе&shy;ре&shy;под&shy;го&shy;тов&shy;ка, пе&shy;да&shy;гог, <span className="nowrap">2018–2019 гг.</span>
                </p>
                <p>
                    На&shy;цио&shy;наль&shy;ный ис&shy;сле&shy;до&shy;ва&shy;тель&shy;ский Мор&shy;дов&shy;ский го&shy;су&shy;дар&shy;ст&shy;вен&shy;ный уни&shy;вер&shy;си&shy;тет име&shy;ни <span className="nowrap">Н.П. Огарёва,</span> гео&shy;гра&shy;фи&shy;чес&shy;кий фа&shy;куль&shy;тет, эко&shy;ло&shy;гия и при&shy;ро&shy;до&shy;поль&shy;зо&shy;ва&shy;ние, ма&shy;гистр, <span className="nowrap">2019–2021 гг.</span>
                </p>
            </Card>
            <Card col={4}>
                <h3>Повышение квалификации</h3>
                <p>
                    ФГБОУ&nbsp;ВО «НИ Мор&shy;дов&shy;ский го&shy;су&shy;дар&shy;ст&shy;вен&shy;ный уни&shy;вер&shy;си&shy;тет им. <span className="nowrap">Н.П. Огарева»,</span> до&shy;пол&shy;ни&shy;тель&shy;ная об&shy;ра&shy;зо&shy;ва&shy;тель&shy;ная про&shy;грам&shy;ма «Шко&shy;ла во&shy;жа&shy;то&shy;го», <span className="nowrap">2016 г.</span>
                </p>
                <p>
                    ФГБОУ&nbsp;ВО «НИ Мор&shy;дов&shy;ский го&shy;су&shy;дар&shy;ст&shy;вен&shy;ный уни&shy;вер&shy;си&shy;тет им. <span className="nowrap">Н.П. Огарева»,</span> до&shy;пол&shy;ни&shy;тель&shy;ная об&shy;ра&shy;зо&shy;ва&shy;тель&shy;ная про&shy;грам&shy;ма «Тех&shy;но&shy;ло&shy;гия ор&shy;га&shy;ни&shy;за&shy;ции до&shy;су&shy;го&shy;вой де&shy;я&shy;тель&shy;нос&shy;ти де&shy;тей и мо&shy;ло&shy;дёжи», <span className="nowrap">2017 г.</span>
                </p>
                <p>
                    ФГБОУ&nbsp;ВО «НИ Мор&shy;дов&shy;ский го&shy;су&shy;дар&shy;ст&shy;вен&shy;ный уни&shy;вер&shy;си&shy;тет им. <span className="nowrap">Н.П. Ога&shy;ре&shy;ва»,</span> по&shy;вы&shy;ше&shy;ние ква&shy;ли&shy;фи&shy;ка&shy;ции по про&shy;грам&shy;ме «Agile-тех&shy;но&shy;ло&shy;гии в про&shy;фес&shy;си&shy;о&shy;наль&shy;ной де&shy;я&shy;тель&shy;нос&shy;ти», <span className="nowrap">2021 г.</span>
                </p>
                <p>
                    АНО «Плат&shy;фор&shy;ма но&shy;вой шко&shy;лы», по&shy;вы&shy;ше&shy;ние ква&shy;ли&shy;фи&shy;ка&shy;ции по про&shy;грам&shy;ме «Пер&shy;со&shy;на&shy;ли&shy;за&shy;ция об&shy;ра&shy;зо&shy;ва&shy;ния в усло&shy;ви&shy;ях циф&shy;ро&shy;вой транс&shy;фор&shy;ма&shy;ции в об&shy;щест&shy;ве», <span className="nowrap">2021 г.</span>
                </p>
                <p>
                    ООО «Центр ин&shy;но&shy;ва&shy;ци&shy;он&shy;но&shy;го об&shy;ра&shy;зо&shy;ва&shy;ния и вос&shy;пи&shy;та&shy;ния», «Ор&shy;га&shy;ни&shy;за&shy;ция ра&shy;бо&shy;ты клас&shy;сно&shy;го ру&shy;ко&shy;во&shy;ди&shy;те&shy;ляв об&shy;ра&shy;зо&shy;ва&shy;тель&shy;ной ор&shy;га&shy;ни&shy;за&shy;ции» в объ&shy;еме 250 ча&shy;сов для осу&shy;щест&shy;вле&shy;ния про&shy;фес&shy;си&shy;о&shy;наль&shy;ной де&shy;я&shy;тель&shy;нос&shy;ти в сфе&shy;ре об&shy;ра&shy;зо&shy;ва&shy;ния по про&shy;фи&shy;лю «Клас&shy;сный ру&shy;ко&shy;во&shy;ди&shy;тель», <span className="nowrap">2021 г.</span>
                </p>
                <p>
                    ГБУ ДПО «Санкт-Пе&shy;тер&shy;бург&shy;ская ака&shy;де&shy;мия по&shy;ст&shy;дип&shy;лом&shy;но&shy;го пе&shy;да&shy;го&shy;ги&shy;чес&shy;ко&shy;го об&shy;ра&shy;зо&shy;ва&shy;ния», ак&shy;ту&shy;аль&shy;ные про&shy;бле&shy;мы со&shy;вре&shy;мен&shy;но&shy;го об&shy;ра&shy;зо&shy;ва&shy;ния: обоб&shy;ще&shy;ние и дис&shy;се&shy;ми&shy;на&shy;ция эф&shy;фек&shy;тив&shy;но&shy;го ин&shy;ди&shy;ви&shy;ду&shy;аль&shy;но&shy;го пе&shy;да&shy;го&shy;ги&shy;чес&shy;ко&shy;го опы&shy;та (ста&shy;жи&shy;ров&shy;ка), <span className="nowrap">2021 г.</span>
                </p>
            </Card>
            <Card col={4}>
            <h3>Мои публикации</h3>
                <PDFComponent
                    link={article2020}
                    name="СОВРЕМЕННОЕ СОСТОЯНИЕ ПРИРОДНО-РЕСУРСНОГО ПОТЕНЦИАЛА КАДОШКИНСКОГО РАЙОНА РЕСПУБЛИКИ МОРДОВИЯ"
                    size="492Кб"
                />
                <PDFComponent
                    link={article2021}
                    name="ПРАКТИЧЕСКИЙ АСПЕКТ ИСПОЛЬЗОВАНИЯ СУБЪЕКТНО-ОРИЕНТИРОВАННЫХ ТЕХНОЛОГИЙ В ОБРАЗОВАТЕЛЬНОМ ПРОЦЕССЕ ШКОЛЬНИКОВ"
                    size="808Кб"
                />
            </Card>
        </Section>
    </>)
}

export default AboutMe