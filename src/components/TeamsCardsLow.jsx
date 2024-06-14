export default function TeamsCardsLow(props) {
  const desc = props.desc;
  return (
    <div>
      {desc.map((d) => (
        <div>
          <p className="font-semibold text-center py-2 mx-8">{d.title}</p>
          <p className="text-center py-4 mx-8">{d.desc}</p>
        </div>
      ))}
    </div>
  );
}
