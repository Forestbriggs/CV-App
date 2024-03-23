import Name from "./Name";
import Contact from "./Contact";

export default function CV({ isEditing, firstName, lastName, email, phoneNumber }) {
    return (
        <div>
            <Name
                isEditing={isEditing}
                firstName={firstName}
                lastName={lastName}
            />
            <Contact
                isEditing={isEditing}
                email={email}
                phoneNumber={phoneNumber}
            />
        </div>
    )
}