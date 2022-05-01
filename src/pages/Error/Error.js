import Helmet from 'react-helmet'
import { IoArrowRedoOutline } from 'react-icons/io5'
import './error.css'

const Error = () => {
    return(
        <>
            <Helmet>
                <title>404</title>
                <meta name='description' content='Страница не найдена' />
            </Helmet>
            <div className='errorPage__wrapper'>
                <div className='errorPage__arrow'><IoArrowRedoOutline /></div>
                <div className='errorPage__text'>
                    <h1>Упс! На этой странице ничего нет!</h1>
                    <p>То, что Вам нужно может находиться на другой странице.</p>
                </div>
            </div>
        </>
    )
}

export default Error