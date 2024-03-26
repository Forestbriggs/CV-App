import '../styles/Card.css'

export default function Card({ title, subtitle, content1, content2 }) {
    return (
        <div
            className="card"
        >
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <p>{content1}</p>
            <p>{content2}</p>
        </div>
    )
};