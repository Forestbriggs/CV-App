import Name from "./Name";
import Contact from "./Contact";
import '../styles/Form.css'

export default function Form({ type, isEditing, firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber, address, setAddress }) {
    if (type === 'general') {
        return (
            <form
                action=""
                method="post"
            >
                <fieldset>
                    {/* <legend>Create your CV</legend> */}
                    <h2>General Info</h2>
                    <div className="GeneralInfo">
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
                            address={address}
                            setAddress={setAddress}
                        />
                    </div>
                </fieldset>
            </form >
        )
    }

    if (type === 'education') {
        return (
            <form
                action=""
                method="post"
            >
                <fieldset>
                    <h2>Education</h2>
                </fieldset>
            </form >
        )
    }
};