import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import CV from './components/CV'
import Button from './components/Button'

function App() {
    const [isEditing, setIsEditing] = useState(true);
    const [firstName, setFirstName] = useState("Your");
    const [lastName, setLastName] = useState("Name");
    const [email, setEmail] = useState("your@email.com")
    const [phoneNumber, setPhoneNumber] = useState("111-111-1111");
    const [address, setAddress] = useState("Your Address")

    function handleChange() {
        setIsEditing(!isEditing)
    }

    if (isEditing) {

        return (
            <>
                <Form
                    isEditing={isEditing}
                    firstName={firstName}
                    lastName={lastName}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    email={email}
                    setEmail={setEmail}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    address={address}
                    setAddress={setAddress}
                />
                <div className='Education'>

                </div>
                <div className='Experience'>

                </div>
                <div className='ButtonContainer'>
                    <Button isEditing={isEditing} handleChange={handleChange} />
                </div>
            </>
        )
    }

    return (
        <>
            <CV
                isEditing={isEditing}
                firstName={firstName}
                lastName={lastName}
                email={email}
                phoneNumber={phoneNumber}
                address={address}
            />
            <div className='ButtonContainer'>
                <Button isEditing={isEditing} handleChange={handleChange} />
            </div>
        </>
    )
}

export default App
