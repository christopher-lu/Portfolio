
type Props = {
  highlights: string[];
};

export default function ProjectHighlights({
  highlights,
}: Props) {
  return (
    <ul className="space-y-1">
      {highlights.map((item) => (
        <li key={item}>• {item}</li>
      ))}
    </ul>
  );
}