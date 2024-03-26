export default function Name({ isEditing, firstName, lastName,
    setFirstName, setLastName }) {
    if (!isEditing) {
        return (
            <div className="NameField">
                <h2>
                    {`${firstName} ${lastName}`}
                </h2>
            </div>
        )
    }

    return (
        <div className="NameFields">
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
            </div>
            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
            </div>
        </div>
    )
};