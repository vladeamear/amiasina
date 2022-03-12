import LinkComponent from "../../components/LinkComponent/LinkComponent"
import PDFComponent from "../../components/PDFComponent/PDFComponent"
import { Helmet } from 'react-helmet'

import kodifoge from "./kodifikator_oge_21-22.pdf"
import kodifege from "./kodifikator_ege_21-22.pdf"

export const Exams = () => {
    return(<>
    <Helmet>
        <title>Анастасия Мясина | Подготовка к экзаменам</title>
    </Helmet>
    <section id="exams">
        <div className="screen card">
            <h1>Подготовка к экзаменам</h1>
            <p>
                На эк­за­ме­не по гео­гра­фии разрешено при­ме­не­ние непрограммируемого каль­ку­ля­то­ра (на лю­бо­го ученика), ли­ней­ки и 
                транспортира. Не­про­грам­ми­ру­е­мый калькулятор дол­жен обеспечивать ариф­ме­ти­че­ские вычисления (сложение, вычитание,
                деление, умножение, из­вле­че­ние корня) и вы­чис­ле­ние тригонометрических функ­ций (sin, cos, tg, ctg, arcsin, arcos, arctg).
            </p>
        </div>
        <div className="screen two-column">
            <div className="column card">
                <p>
                    Основной государственный экзамен (ОГЭ) представляет собой форму государственной итоговой аттестации, проводимой
                    в целях определения соответствия результатов освоения обучающимися основных образовательных программ основного общего 
                    образования требованиям федерального государственного образовательного стандарта. Для указанных целей используются
                    контрольные измерительные материалы (КИМ), представляющие собой комплексы заданий стандартизированной формы.
                </p>
                <p>
                    Структура основного государственного экзамена ОГЭ по географии включает в себя 30 заданий. На решение всех заданий
                    отводится 2,5 часа — 150 минут.
                </p>
                <br />
                <p>
                    Кодификатор – в данном документе можно ознакомиться с основным списком тем.
                </p>
                <PDFComponent
                    name="Кодификатор ОГЭ 2021-2022"
                    link={kodifoge}
                    size="108Кб"
                />
                <br />
                <p>Порталы для решения тренировочных заданий ОГЭ</p>
                <LinkComponent
                    name="СДАМ ГИА: РЕШУ ОГЭ"
                    link="https://geo-oge.sdamgia.ru/"
                />
                <LinkComponent
                    name="Открытый банк заданий ОГЭ"
                    link="https://fipi.ru/oge/otkrytyy-bank-zadaniy-oge#!/tab/173942232-8"
                />
            </div>
            <div className="column card">
                <p>
                    ЕГЭ (Единый государственный экзамен) – основная форма государственной итоговой аттестации выпускников
                    российских школ. Результаты ЕГЭ засчитываются как вступительное испытание в вузы России.
                </p>
                <br />
                <p>
                    Кодификатор – в данном документе можно ознакомиться с основным списком тем.
                </p>
                <PDFComponent
                    name="Кодификатор ЕГЭ 2021-2022"
                    link={kodifege}
                    size="770Кб"
                />
                <br />
                <p>Порталы для решения тренировочных заданий ЕГЭ</p>
                <LinkComponent
                    name="ОТКРЫТЫЙ БАНК ТЕСТОВЫХ ЗАДАНИЙ"
                    link="http://os.fipi.ru/home/1"
                />
                <LinkComponent
                    name="Открытые варианты КИМ ЕГЭ"
                    link="https://fipi.ru/ege/otkrytyy-bank-zadaniy-ege#!/tab/173765699-8"
                />
                <LinkComponent
                    name="СДАМ ГИА: РЕШУ ЕГЭ"
                    link="https://geo-ege.sdamgia.ru/"
                />
                <LinkComponent
                    name="Варианты ЕГЭ по географии"
                    link="https://neznaika.info/ege/geo/"
                />
                <LinkComponent
                    name="Демонстрационные варианты тестов ЕГЭ от ФИПИ"
                    link="https://test.tutoronline.ru/test/ege"
                />
            </div>
        </div>
    </section>
    </>)
}