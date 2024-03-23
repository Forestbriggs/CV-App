export default function Name({ isEditing, firstName, lastName,
    setFirstName, setLastName }) {
    if (!isEditing) {
        return (
            <h1>
                {`${firstName} ${lastName}`}
            </h1>
        )
    }

    return (
        <div className="NameFields">
            <input
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
            />
            <input
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
            />
        </div>
    )
};