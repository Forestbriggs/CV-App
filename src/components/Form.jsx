import Name from "./Name";
import Contact from "./Contact";

export default function Form({ isEditing, firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber }) {
    return (
        <div className='GeneralInfo'>
            <Name
                isEditing={isEditing}
                firstName={firstName}
                lastName={lastName}
                setFirstName={setFirstName}
                setLastName={setLastName}
            />
            <Contact
                isEditing={isEditing}
                email={email}
                setEmail={setEmail}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
            />
        </div>
    )
};