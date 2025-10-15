interface PortfolioDict {
  portfolio: string;
}

export default function Portfolio({ items, dict }: { items: string[], dict: PortfolioDict }) {
  return (
    <article className="col-span-12 rounded-2xl bg-foreground p-6">
      <div className="flex gap-4 items-center">
        <h3 className="text-xl font-bold text-white border-r border-gray-700 pr-4">{dict.portfolio}</h3>
        <div className="flex gap-4 flex-wrap">
          {items.map((it)=> (
            <a key={it} className="px-4 py-2 bg-background rounded-lg text-white hover:text-gray-300 transition-colors" href="#">{it}</a>
          ))}
        </div>
      </div>
    </article>
  );
}
