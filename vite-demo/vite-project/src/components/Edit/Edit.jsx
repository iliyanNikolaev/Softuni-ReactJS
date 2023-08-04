import { useContext, useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import { MovieContext } from "../../contexts/movieContext";
import { AuthContext } from "../../contexts/authContext";

export default function Edit() {
    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        imgURL: ''
    });

    const onChange = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const { movieId } = useParams();

    const { auth } = useContext(AuthContext);

    const { editMovieHandler, getMovieById, movies } = useContext(MovieContext);

    if(movies.find(x => x.objectId == movieId) == undefined) {
        return <Navigate to='/404'/>
    }

    useEffect(() => {
        getMovieById(movieId)
            .then(data => {
                setFormValues({
                    title: data.title,
                    description: data.description,
                    imgURL: data.imgURL
                });
            });
    }, [movieId]);

    const formSubmit = (e) => {
        e.preventDefault();

        editMovieHandler(movieId, formValues, auth.objectId);
    }

    return (
        <>
            <h2>Edit movie</h2>
            <form onSubmit={formSubmit}>
                <label htmlFor="title">Movie title:
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={formValues.title}
                        onChange={onChange}
                    />
                </label>
                <label htmlFor="description">Description:
                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="5"
                        value={formValues.description}
                        onChange={onChange}
                    ></textarea>
                </label>
                <label htmlFor="imgURL">Poster URL:
                    <input
                        type="text"
                        name="imgURL"
                        id="imgURL"
                        value={formValues.imgURL}
                        onChange={onChange}
                    />
                </label>

                <button>Edit Movie</button>
            </form>
        </>
    )
}
