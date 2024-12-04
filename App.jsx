import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {

    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}

                //passing data as properties 
                // img={entry.img}
                // title={entry.title}
                // country={entry.country}
                // googleMapsLink={entry.googleMapsLink}
                // dates={entry.dates}
                // text={entry.text}

                //passing data as Object 
                //entry={entry}
                //also need to change on Entry.jsx

                //Spread object as props
                {...entry}

            />
        )
    })

    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}