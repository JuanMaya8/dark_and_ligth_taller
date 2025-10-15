export default function Portfolio({ items }: { items: string[] }) {
  return (
    <div className="col-span-12 rounded-2xl bg-white dark:bg-[#1C1C1C] p-6">
      <h3 className="text-black dark:text-white text-2xl font-bold mb-4">Portfolio</h3>
      <div className="flex gap-4 justify-center items-center">
        {items.map((it)=> (
          <a key={it} className="px-4 py-2 bg-gray-100 dark:bg-[#2C2C2C] rounded-lg text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" href="#">{it}</a>
        ))}
      </div>
    </div>
  );
}
