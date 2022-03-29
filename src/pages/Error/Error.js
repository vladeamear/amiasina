import { Card, LinkWrapper, Section } from "../../components/Section/Section"
import Helmet from "react-helmet"

const Error = () => {
    return(
        <>
            <Helmet>
                <title>404</title>
                <meta name='description' content='Страница не найдена' />
            </Helmet>
            <Section>
                <Card col={2} row={24}>
                    <h1>Упс! На этой странице ничего нет!</h1>
                    <p>То, что Вам нужно может находиться на другой странице.</p>
                </Card>
                <LinkWrapper link="/" col={1} inner>Обо мне</LinkWrapper>
                <LinkWrapper link="/links" col={1} inner>Полезные ссылки</LinkWrapper>
                <LinkWrapper link="/exams" col={1} inner>Подготовка к экзаменам</LinkWrapper>
                <LinkWrapper link="/vpr" col={1} inner>ВПР</LinkWrapper>
            </Section>
        </>
    )
}

export default Error