export default function ToolsList({ title, items }: { title: string; items: string[] }) {
  return (
    <ul className="flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10">
      <li className="text-white text-xl font-bold border-r pr-4">{title}</li>
      {items.map((it)=> <li key={it} className="flex items-center bg-[#360300] rounded-lg font-bold text-[#da9f4c] text-xl px-4 py-2">{it}</li>)}
    </ul>
  );
}
