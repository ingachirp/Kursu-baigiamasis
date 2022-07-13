export default function Komponentas(props) {
    const elementai = [
        'Section 80',
        'Bookkeepers',
        'Zero'
    ];

    return (
        <div>
            {props.title && <h3>{props.title}</h3>}
            <p>Tekstas visada matomas</p>
            <article>
                {elementai.map((verte, index) => <h4 key={index}>{verte}</h4>)}
            </article>
        </div>
    );
}