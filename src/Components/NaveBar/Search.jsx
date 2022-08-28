import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"

export const Search = ({ close }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                close()
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [close]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/category/${e.target.search_input.value}`);
        close()
    }


    return (
        <div
            className="search-form-container container "
        >
            <div className="form-container-inner">
                <form onSubmit={(e) => handleSubmit(e)} className="form">
                    <input
                        className="form-input"
                        type="text"
                        name="search_input"
                        placeholder="What are you looking for?"
                    />
                    <button className="btn form-btn" type="submit">
                        <FiSearch size="40px" color="white" />
                    </button>
                </form>
                <span className="form-note">Or press ESC to close.</span>
            </div>

            <button onClick={() => close()} className="btn form-close-btn place-items-center">
                <AiOutlineClose size="35px" color="white" />
            </button>
        </div>

    )
}
