import Helmet from 'react-helmet'
import PDFComponent from '../../components/PDFComponent/PDFComponent'
import { Card, Section } from '../../components/Section/Section'
import kl6 from './klass_6.pdf'
import kl7 from './klass_7.pdf'
import kl8 from './klass_8.pdf'

const VPR = () => {
    return(
        <>
            <Helmet>
                <title>Анастасия Мясина | ВПР</title>
                <meta name='description' content='Подготовка к Всероссийской проверочной работе' />
            </Helmet>
            <Section>
                <Card col={4}>
                    <h1>Всероссийская проверочная работа</h1>
                    <p>
                        ВПР - это ком&shy;плек&shy;с&shy;ная кон&shy;троль&shy;ная ра&shy;бо&shy;та, ко&shy;то&shy;рая долж&shy;на по&shy;ка&shy;зать уро&shy;вень успе&shy;ва&shy;е&shy;мос&shy;ти школь&shy;ни&shy;ков по&nbsp;раз&shy;лич&shy;ным пред&shy;ме&shy;там и со&shy;от&shy;вет&shy;ст&shy;вие их&nbsp;зна&shy;ний тре&shy;бо&shy;ва&shy;ни&shy;ям Фе&shy;де&shy;раль&shy;ных го&shy;су&shy;дар&shy;ст&shy;вен&shy;ных об&shy;ра&shy;зо&shy;ва&shy;тель&shy;ных стан&shy;дар&shy;тов (ФГОС), на&shy;це&shy;лен&shy;ная на&nbsp;вы&shy;яв&shy;ле&shy;ние и ре&shy;ше&shy;ние про&shy;блем в&nbsp;школь&shy;ном об&shy;ра&shy;зо&shy;ва&shy;нии всех уров&shy;ней.
                    </p>
                    <PDFComponent
                        name="Проверочная работа 6 класс"
                        link={kl6}
                        size="1,9Мб"
                    />
                    <PDFComponent
                        name="Проверочная работа 7 класс"
                        link={kl7}
                        size="1,1Мб"
                    />
                    <PDFComponent
                        name="Проверочная работа 8 класс"
                        link={kl8}
                        size="1,5Мб"
                    />
                </Card>
            </Section>
        </>
    )
}

export default VPR