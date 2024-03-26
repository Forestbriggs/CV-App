export default function Button({ type, isEditing, handleChange }) {

    if (type === 'standard') {
        if (!isEditing) {
            return (
                <button
                    onClick={handleChange}
                >
                    Edit Me
                </button>
            )
        }

        if (isEditing) {
            return (
                <button
                    onClick={handleChange}
                >
                    Submit
                </button>
            )
        }
    }

    if (type === 'education') {
        return (
            <button
                onClick={handleChange}
            >
                Add Education
            </button>

        )
    }

    if (type === 'work') {
        return (
            <button>Add Work Experience</button>
        )
    }
};