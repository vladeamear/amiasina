import PDFComponent from '../../components/PDFComponent/PDFComponent'
import kl6 from './klass_6.pdf'
import kl7 from './klass_7.pdf'
import kl8 from './klass_8.pdf'

export const VPR = () => {
    return(<>
    <section id="vpr">
        <div className="screen card">
            <h1>ВПР (Всероссийская проверочная работа)</h1>
            <p>
                Всероссийская проверочная работа - это комплексная контрольная работа, которая должна
                показать уровень успеваемости школьников по различным предметам и соответствие их
                знаний требованиям Федеральных государственных образовательных стандартов (ФГОС),
                нацеленная на выявление и решение проблем в школьном образовании всех уровней.
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
        </div>
    </section>
    </>)
}