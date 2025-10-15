interface EducationItem {
  title: string;
  field: string;
  location: string;
  period: string;
}

interface Education {
  highSchool: EducationItem;
  diploma: EducationItem;
  graduation: EducationItem;
}

export default function EducationList({ education }: { education: Education }) {
  return (
    <section className="col-span-6 rounded-2xl bg-foreground p-10">

      <article className="flex items-center justify-between w-full mb-6">
        <span className="flex flex-col">
          <h2 className="text-white text-2xl font-semibold">{education.highSchool?.title}</h2>
          <p className="text-gray-400">{education.highSchool?.field}</p>
          <p className="text-gray-400 text-sm">{education.highSchool?.location}</p>
        </span>
        <span className="bg-background rounded-lg text-white text-sm p-3">{education.diploma?.period}</span>
      </article>

      <article className="flex items-center justify-between w-full mb-6">
        <span className="flex flex-col">
          <h2 className="text-white text-2xl font-semibold">{education.diploma?.title}</h2>
          <p className="text-gray-400">{education.diploma?.field}</p>
          <p className="text-gray-400 text-sm">{education.diploma?.location}</p>
        </span>
        <span className="bg-background rounded-lg text-white text-sm p-3">{education.diploma?.period}</span>
      </article>

      <article className="flex items-center justify-between w-full">
        <span className="flex flex-col">
          <h2 className="text-white text-2xl font-semibold">{education.graduation?.title}</h2>
          <p className="text-gray-400">{education.graduation?.field}</p>
          <p className="text-gray-400 text-sm">{education.graduation?.location}</p>
        </span>
        <span className="bg-background rounded-lg text-white text-sm p-3">{education.graduation?.period}</span>
      </article>
    </section>
  );
}
