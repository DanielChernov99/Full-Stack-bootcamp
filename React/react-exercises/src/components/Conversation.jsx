export default function Conversation({ convo, sender, backToList }) {
  return (
    <div>
      <button className="back" onClick={backToList}>
        Back
      </button>

      {convo.map((message, index) => (
        <div key={index}>
          <span className="sender">
            {message.sender === "self" ? "Me" : sender}:
          </span>
          {" "}
          {message.text}
        </div>
      ))}
    </div>
  );
}