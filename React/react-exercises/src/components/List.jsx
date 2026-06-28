import Contact from "./Contact";


export default function List({contacts,displayConvo}) {
  return <div>
    {contacts.map((contact)  => (
        <Contact key={contact} name={contact} displayConvo={displayConvo}/>
    ))}
  </div>;
}