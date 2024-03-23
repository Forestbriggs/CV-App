import Name from "./Name";
import Contact from "./Contact";
import '../styles/CV.css'

export default function CV({ isEditing, firstName, lastName, email, phoneNumber, address }) {
    return (
        <div className="CV">
            <header>
                <Name
                    isEditing={isEditing}
                    firstName={firstName}
                    lastName={lastName}
                />
                <Contact
                    isEditing={isEditing}
                    email={email}
                    phoneNumber={phoneNumber}
                    address={address}
                />
            </header>
        </div>
    )
}