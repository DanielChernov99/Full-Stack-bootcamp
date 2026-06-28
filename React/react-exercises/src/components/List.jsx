export default function List({contacts}) {
  return <div>{contacts.join(" ")}</div>;
}