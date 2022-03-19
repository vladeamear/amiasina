import LinkComponent from "../../components/LinkComponent/LinkComponent"
import PDFComponent from "../../components/PDFComponent/PDFComponent"

import kodifoge from "./kodifikator_oge_21-22.pdf"
import kodifege from "./kodifikator_ege_21-22.pdf"
import { Card, Section } from "../../components/Section/Section"
import Helmet from "react-helmet"

const Exams = () => {
    return(
        <>
            <Helmet>
                <title>Анастасия Мясина | Подготовка к экзаменам</title>
                <meta name="description" content="На странице расположена полезная информация и ссылки, которые будут полезны при подготовке к экзаменам"/>
            </Helmet>
            <Section>
                <Card col={4}>
                    <h1>Подготовка к экзаменам</h1>
                    <p>
                        На&nbsp;эк­за­ме­не по&nbsp;гео­гра­фии раз&shy;ре&shy;ше&shy;но при­ме­не­ние не&shy;про&shy;грам&shy;ми&shy;ру&shy;е&shy;мо&shy;го каль­ку­ля­то­ра (на&nbsp;лю­бо­го уче&shy;ни&shy;ка), ли­ней­ки и транс&shy;пор&shy;ти&shy;ра. Не­про­грам­ми­ру­е­мый каль&shy;ку&shy;ля&shy;тор дол­жен обес&shy;пе&shy;чи&shy;вать ариф­ме­ти­че­ские вы&shy;чис&shy;ле&shy;ния (сло&shy;же&shy;ние, вы&shy;чи&shy;та&shy;ние, де&shy;ле&shy;ние, ум&shy;но&shy;же&shy;ние, из­вле­че­ние кор&shy;ня) и вы­чис­ле­ние три&shy;го&shy;но&shy;мет&shy;ри&shy;чес&shy;ких функ­ций (sin, cos, tg, ctg, arcsin, arcos, arctg).
                    </p>
                </Card>
                <Card col={2}>
                    <h2>Основной государственный экзамен</h2>
                    <p>
                        ОГЭ пред&shy;став&shy;ля&shy;ет со&shy;бой фор&shy;му го&shy;су&shy;дар&shy;ст&shy;вен&shy;ной ито&shy;го&shy;вой ат&shy;тес&shy;та&shy;ции, про&shy;во&shy;ди&shy;мой в&nbsp;це&shy;лях опре&shy;де&shy;ле&shy;ния со&shy;от&shy;вет&shy;ст&shy;вия ре&shy;зуль&shy;та&shy;тов осво&shy;е&shy;ния обу&shy;ча&shy;ю&shy;щи&shy;ми&shy;ся ос&shy;нов&shy;ных об&shy;раз&shy;ова&shy;тель&shy;ных про&shy;грамм ос&shy;нов&shy;но&shy;го об&shy;ще&shy;го об&shy;ра&shy;зо&shy;ва&shy;ния тре&shy;бо&shy;ва&shy;ни&shy;ям фе&shy;де&shy;раль&shy;но&shy;го го&shy;су&shy;дар&shy;ст&shy;вен&shy;но&shy;го об&shy;ра&shy;зо&shy;ва&shy;тель&shy;но&shy;го стан&shy;дар&shy;та. Для&nbsp;ука&shy;зан&shy;ных це&shy;лей ис&shy;поль&shy;зу&shy;ют&shy;ся кон&shy;троль&shy;ные из&shy;ме&shy;ри&shy;тель&shy;ные ма&shy;те&shy;ри&shy;а&shy;лы (КИМ), пред&shy;став&shy;ля&shy;ю&shy;щие со&shy;бой ком&shy;плек&shy;сы за&shy;да&shy;ний стан&shy;дар&shy;ти&shy;зи&shy;ро&shy;ван&shy;ной фор&shy;мы.
                    </p>
                    <p>
                        Струк&shy;ту&shy;ра ос&shy;нов&shy;но&shy;го го&shy;су&shy;дар&shy;ст&shy;вен&shy;но&shy;го эк&shy;за&shy;ме&shy;на ОГЭ по&nbsp;гео&shy;гра&shy;фии вклю&shy;ча&shy;ет в&nbsp;се&shy;бя 30 за&shy;да&shy;ний. На&nbsp;ре&shy;ше&shy;ние всех за&shy;да&shy;ний отво&shy;дит&shy;ся <span className="nowrap">2,5 ча&shy;са</span> <span className="nowrap">(150 ми&shy;нут).</span>
                    </p>
                    <h3>Кодификатор</h3>
                    <p>
                        В&nbsp;дан&shy;ном до&shy;ку&shy;мен&shy;те мож&shy;но озна&shy;ко&shy;мить&shy;ся с&nbsp;ос&shy;нов&shy;ным спис&shy;ком тем.
                    </p>
                    <PDFComponent
                        name="Кодификатор ОГЭ 2021-2022"
                        link={kodifoge}
                        size="108Кб"
                    />
                    <h3>Порталы для&nbsp;решения тренировочных заданий ОГЭ</h3>
                    <LinkComponent
                        name="СДАМ ГИА: РЕШУ ОГЭ"
                        link="https://geo-oge.sdamgia.ru/"
                    />
                    <LinkComponent
                        name="Открытый банк заданий ОГЭ"
                        link="https://fipi.ru/oge/otkrytyy-bank-zadaniy-oge#!/tab/173942232-8"
                    />
                </Card>
                <Card col={2}>
                    <h2>Единый государственный экзамен</h2>
                    <p>
                        ЕГЭ – ос&shy;нов&shy;ная фор&shy;ма го&shy;су&shy;дар&shy;ст&shy;вен&shy;ной ито&shy;го&shy;вой ат&shy;тес&shy;та&shy;ции вы&shy;пуск&shy;ни&shy;ков рос&shy;сий&shy;ских школ. Ре&shy;зуль&shy;та&shy;ты ЕГЭ за&shy;счи&shy;ты&shy;ва&shy;ют&shy;ся как всту&shy;пи&shy;тель&shy;ное ис&shy;пы&shy;та&shy;ние в&nbsp;ву&shy;зы Рос&shy;сии.
                    </p>
                    <h3>Кодификатор</h3>
                    <p>
                        В&nbsp;дан&shy;ном до&shy;ку&shy;мен&shy;те мож&shy;но озна&shy;ко&shy;мить&shy;ся с&nbsp;ос&shy;нов&shy;ным спис&shy;ком тем.
                    </p>
                    <PDFComponent
                        name="Кодификатор ЕГЭ 2021-2022"
                        link={kodifege}
                        size="770Кб"
                    />
                    <h3>Порталы для&nbsp;решения тренировочных заданий ЕГЭ</h3>
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
                </Card>
            </Section>
        </>
    )
}

export default Exams