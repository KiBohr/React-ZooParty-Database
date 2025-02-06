import animals from "./data"
import { AnimalCard } from "./assets/components/function"

function App() {
 
  return (
    <>
    <body className="m-5 bg-beige font-[josefin] text-xl text-lime-green">
      <header>
        <h1 className="font-[passion] text-7xl">React-ZooParty-Database</h1>
        <a className="uppercase text-base" href="https://supercode.notion.site/React-ZooParty-Database-2230095d7bd74a46a7e264dee8361427">to the exercise</a>
      </header>

      {/* where the output goes: */}
      <main>
        <section className="p-5 text-peach-pink grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {animals.map((animal) => (
            <AnimalCard
            key = {animal.name}
            emoji= {animal.emoji}
            species= {animal.species}
            name = {animal.name}
            lifespan = {animal.lifespan}
            habitat = {animal.habitat}
            diet= {animal.diet}
            funFacts={animal.funFacts}
          />
            ))
            }
        </section>
      </main>
    </body>
    </>
  )
}

export default App
