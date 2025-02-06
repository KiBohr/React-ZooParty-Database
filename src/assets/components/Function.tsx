// ? import der Daten aus der Daten Datei, lol
import { Animal} from "../../data";

// * React-ZooParty-Database
// https://supercode.notion.site/React-ZooParty-Database-2230095d7bd74a46a7e264dee8361427
// - In dieser Übung sollst du eine Tier-Datenbank erstellen.
// - Erstelle dir die notwendigen Komponenten.
// - Nutze die vorgegebene data.ts (in data.ts).
// - Schaue dir die Ergebnisvorschau an.

export function AnimalCard(animal: Animal){
    return <article className="flex flex-col gap-1 justify-center items-center bg-white p-4 rounded-md shadow transition ease-in-out hover:shadow-2xl" >
      
        <figure className="text-9xl pt-5">{animal.emoji}</figure>
        <div className="flex gap-4 items-center justify-center">
            <h2 className="text-6xl font-[passion] font-bold">{animal.name}</h2>
            <p>({animal.species})</p>
        </div>
        <p className="text-2xl font-medium">Lifespan: {animal.lifespan}</p>
        <p className="text-2xl font-medium">Habitat: {animal.habitat}</p>
        <p className="text-2xl font-medium">Diet: {animal.diet}</p>
        <ul>
            {animal.funFacts.map((fact)=>{
                return <li className="list-disc italic text-base">{fact}</li>
            })}
        </ul>
    </article>
}

