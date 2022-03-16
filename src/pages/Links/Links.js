import LinkComponent from "../../components/LinkComponent/LinkComponent"
import { Card, Section } from "../../components/Section/Section"

const Links = () => {
    return(<>
        <Section>
            <Card col={4}>
                <h1>Полезные ссылки</h1>
                <p>
                    На&nbsp;этой стра&shy;ни&shy;це мож&shy;но най&shy;ти по&shy;лез&shy;ные ссыл&shy;ки, ко&shy;то&shy;рые по&shy;мо&shy;гут Вам углу&shy;бить зна&shy;ния по&nbsp;не&shy;ко&shy;то&shy;рым те&shy;мам или узнать <span className="nowrap">что-то</span> но&shy;вое.
                </p>
                <LinkComponent name="Google Планета Земля" link="https://www.google.ru/intl/ru/earth/" />
                <LinkComponent name="Географический справочник" link="http://www.geo.historic.ru/" />
                <LinkComponent name="Geogsite - Все о географии" link="http://www.geogsite.com/" />
                <LinkComponent name="Seterra - Географические онлайн игры" link="https://online.seterra.com/ru" />
                <LinkComponent name="Карта мира со странами и столицами на русском языке" link="http://bigkarta.ru/" />
                <LinkComponent name="Рельеф" link="http://www.geo-site.ru/index.php/2011-01-10-19-57-27/81-2011-01-10-19-45-07.html" />
                <LinkComponent name="Словарь географических названий" link="https://gufo.me/dict/geographical_names" />
                <LinkComponent name="Контурные карты по географии" link="http://kontur-map.ru/" />
            </Card>
        </Section>
    </>)
}

export default Links