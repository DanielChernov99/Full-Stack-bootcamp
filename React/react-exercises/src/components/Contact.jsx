export default function Contact({ name ,displayConvo}) {
  return (
    <div onClick={()=>displayConvo(name)}>
      {name}
    </div>
  );
}