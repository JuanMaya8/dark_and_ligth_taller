import Image from 'next/image';

interface ToolItem {
  id: string;
  text?: string;
  icon?: string;
}

export default function ToolsList({ title, items }: { title: string; items: ToolItem[] }) {
  return (
    <ul className="flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-6">
      <li className="text-white text-xl font-bold border-r border-gray-700 pr-4">{title}</li>
      {items.map((item)=> (
        <li key={item.id} className="relative flex items-center bg-background rounded-lg font-semibold text-white text-lg px-4 py-2">
          {item.icon ? (
            <img 
              src={item.icon} 
              alt={item.text || item.id} 
              className="w-8 h-6 hover:scale-110 transition-transform"
            />
          ) : (
            <span>{item.text}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
