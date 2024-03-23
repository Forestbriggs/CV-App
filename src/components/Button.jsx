export default function Button({ isEditing, handleChange }) {

    if (!isEditing) {
        return (
            <button
                onClick={handleChange}
            >
                Edit Me
            </button>
        )
    }

    return (
        <button
            onClick={handleChange}
        >
            Submit
        </button>
    )
};