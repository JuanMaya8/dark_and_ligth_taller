export default function EducationList({ education }: { education: any }) {
  return (
    <section className="col-span-6 rounded-2xl bg-white dark:bg-[#1C1C1C] p-10">
      <article className="flex flex-col w-full mb-6">
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-2">High School</h2>
        <div className="flex flex-col">
          <span className="text-gray-600 dark:text-gray-400 mb-2">2020-2021</span>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Graphic Designer</p>
          <ul className="space-y-1">
            <li className="text-gray-600 dark:text-gray-400">• Collaboration: Supported lead designer on projects</li>
            <li className="text-gray-600 dark:text-gray-400">• Branding: Crafted unique brand identities</li>
            <li className="text-gray-600 dark:text-gray-400">• Tools: Used Illustrator, Photoshop & InDesign</li>
          </ul>
        </div>
      </article>

      <article className="flex items-center justify-between w-full mb-6">
        <span className="flex flex-col">
          <h2 className="text-white text-3xl font-bold">{education.diploma?.title}</h2>
          <p className="text-grey text-lg">{education.diploma?.field}</p>
          <p className="text-grey text-sm">{education.diploma?.location}</p>
        </span>
        <span className="bg-background rounded-lg text-white text-sm p-4">{education.diploma?.period}</span>
      </article>

      <article className="flex items-center justify-between w-full">
        <span className="flex flex-col">
          <h2 className="text-white text-3xl font-bold">{education.graduation?.title}</h2>
          <p className="text-grey text-lg">{education.graduation?.field}</p>
          <p className="text-grey text-sm">{education.graduation?.location}</p>
        </span>
        <span className="bg-background rounded-lg text-white text-sm p-4">{education.graduation?.period}</span>
      </article>
    </section>
  );
}
