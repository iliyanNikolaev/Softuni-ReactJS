import { useContext } from "react"
import { MovieContext } from "../../contexts/movieContext"

import { useForm } from "../../hooks/useForm"

export default function Create() {
    
    const { createMovieHandler } = useContext(MovieContext);

    const { formValues, onChange } = useForm({ title: '', description: '', imgURL: '' });

    const formSubmit = (e) => {
        e.preventDefault();

        createMovieHandler(formValues);
    }

    return (
        <>
            <h2>Add new movie</h2>
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

            <button>Create Movie</button>
        </form>
        </>
    )
}
