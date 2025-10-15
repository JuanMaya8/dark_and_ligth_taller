export default function ExperienceCard({ title, role, period, bullets }: { title:string; role:string; period:string; bullets:string[] }) {
  return (
    <article className="col-span-6 rounded-2xl bg-foreground p-10">
      <section className="flex items-center justify-between border-b border-gray-700 pb-6">
        <header className="flex flex-col">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-400 text-sm">{role}</p>
        </header>
        <span className="bg-background rounded-lg text-white text-sm p-3">{period}</span>
      </section>
      <ul className="list-disc list-inside bg-foreground text-white dark:text-gray-300 text-sm mt-6 space-y-2">
        {bullets.map((b)=> <li key={b}>{b}</li>)}
      </ul>
    </article>
  );
}
