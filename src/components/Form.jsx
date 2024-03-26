import React, { useState } from 'react';
import Name from "./Name";
import Contact from "./Contact";
import Button from "./Button";
import '../styles/Form.css'

export default function Form({ type, isEditing, firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber, address, setAddress, educationHistory, setEducationHistory }) {
    const [schoolName, setSchoolName] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, SetEndDate] = useState('');
    const [stillAttending, setStillAttending] = useState(false);

    const [showForm, setShowForm] = useState(false);

    const revealForm = () => {
        setShowForm(!showForm);
    }

    const submitForm = () => {
        setEducationHistory([...educationHistory,
        {
            id: educationHistory.length + 1,
            schoolName,
            titleOfStudy,
            startDate,
            endDate,
            stillAttending
        }]);
        setSchoolName('');
        setTitleOfStudy('');
        setStartDate('');
        SetEndDate('');
        setStillAttending('');
        setShowForm(!showForm)
    }

    if (type === 'general') {
        return (
            <form
                action=""
                method="post"
            >
                <fieldset>
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
                className="education"
            >
                <fieldset>
                    {!showForm &&
                        <React.Fragment>
                            <h2>Education</h2>
                            <Button type='education' handleChange={revealForm} />
                        </React.Fragment>
                    }
                    {showForm &&
                        <React.Fragment>
                            <h2>Education</h2>
                            <div>
                                <label>School Name</label>
                                <input
                                    type='text'
                                    value={schoolName}
                                    onChange={(event) => setSchoolName(event.target.value)}
                                />
                            </div>
                            <div>
                                <label>Title of Study</label>
                                <input
                                    type='text'
                                    value={titleOfStudy}
                                    onChange={(event) => setTitleOfStudy(event.target.value)}
                                />
                            </div>
                            <div>
                                <label>Start Date</label>
                                <input
                                    type='date'
                                    value={startDate}
                                    onChange={(event) => setStartDate(event.target.value)}
                                />
                            </div>
                            <div>
                                <label>End Date</label>
                                <input
                                    type='date'
                                    value={endDate}
                                    onChange={(event) => SetEndDate(event.target.value)}
                                />
                            </div>
                            <div>
                                <label>Still Attending</label>
                                <input
                                    type='checkbox'
                                    onChange={(event) => {
                                        setStillAttending(!stillAttending)
                                    }
                                    }
                                />
                            </div>
                            <Button type='education' handleChange={() => submitForm()} />
                        </React.Fragment>
                    }
                </fieldset>
            </form >
        )
    }
};