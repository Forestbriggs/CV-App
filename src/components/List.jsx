import Card from "./Card"
import '../styles/List.css'

export default function List({ education, workHistory }) {
    if (education) {
        return (
            <ul>
                {education.map((ed) => {
                    return <li
                        key={ed.id}>
                        <Card
                            title={ed.schoolName}
                            subtitle={ed.titleOfStudy}
                            content1={"Started: " + ed.startDate}
                            content2={ed.stillAttending ? 'Currently Attending' : "Ended: " + ed.endDate}
                        />
                    </li>
                })}
            </ul>
        )
    }
}