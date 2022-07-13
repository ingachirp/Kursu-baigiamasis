import Komponentas from "./Komponentas";

export default function Puslapis() {
    const komponentoPavadinimas = 'PAVADINIMAS'

    return (
        <div>
            <h1>labas</h1>
            <Komponentas title={komponentoPavadinimas} />

            <Komponentas />
        </div>
    );
}