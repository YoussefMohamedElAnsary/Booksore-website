import './Genre_text.css';

const AddGenre = ({genre}) => {
    return (
            <div className="genre">
            <h3 className="nameOfGenre">{genre.name}</h3>
            </div>
    )
}
export default AddGenre