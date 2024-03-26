import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import CV from './components/CV'
import Button from './components/Button'
import List from './components/List';

function App() {
    const [isEditing, setIsEditing] = useState(true);
    const [firstName, setFirstName] = useState("Your");
    const [lastName, setLastName] = useState("Name");
    const [email, setEmail] = useState("your@email.com");
    const [phoneNumber, setPhoneNumber] = useState("111-111-1111");
    const [address, setAddress] = useState("Your Address");
    const [educationHistory, setEducationHistory] = useState([/*{ id: 1, schoolName: 'U of O', titleOfStudy: 'CS', startDate: '01/20/2023', endDate: null, stillAttending: true }*/]);

    function handleChange() {
        setIsEditing(!isEditing)
    }

    if (isEditing) {

        return (
            <>
                <div className='InfoContainer'>
                    <div className='FormContainer'>

                        <Form
                            type="general"
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
                        <Form
                            type="education"
                            educationHistory={educationHistory}
                            setEducationHistory={setEducationHistory}
                        />
                    </div>
                    <div className='ListContainer'>
                        <h2>Education</h2>
                        <List education={educationHistory} />
                    </div>
                    <div className='ListContainer'>
                        <h2>Work Experience</h2>
                        <List education={educationHistory} />
                    </div>
                </div>
                <div className='ButtonContainer'>
                    <Button type="standard" isEditing={isEditing} handleChange={handleChange} />
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
                <Button type="standard" isEditing={isEditing} handleChange={handleChange} />
            </div>
        </>
    )
}

export default App
