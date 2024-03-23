import { Validator } from "react"

export default function Contact({ isEditing, email, setEmail, phoneNumber, setPhoneNumber }) {
    if (!isEditing) {
        return (
            <div className="ContactInfo">
                <h1>{email}</h1>
                <h1>{phoneNumber}</h1>
            </div>
        )
    }

    return (
        <div className="ContactFields">
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <label>Phone Number</label>
                <input
                    type="phone"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                />
            </div>
        </div>
    )
}