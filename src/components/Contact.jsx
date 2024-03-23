import { Validator } from "react"

export default function Contact({ isEditing, email, setEmail, phoneNumber, setPhoneNumber, address, setAddress }) {
    if (!isEditing) {
        return (
            <div className="ContactInfo">
                <p>{email}</p>
                <p>{phoneNumber}</p>
                <p>{address}</p>
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
            <div>
                <label>Address</label>
                <input
                    type="text"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
            </div>
        </div>
    )
}