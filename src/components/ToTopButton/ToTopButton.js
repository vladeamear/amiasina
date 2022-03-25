import { BiArrowFromBottom } from "react-icons/bi";

const ToTopButton = () => {
    return <button onClick={() => {window.scrollTo(0, 0)}}>To Top <BiArrowFromBottom /></button>
}

export default ToTopButton