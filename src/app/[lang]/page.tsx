import { getDictionary } from "../i18n/dictionaries";
import { Lang, languages } from "../i18n/config";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeToggle from "../components/ThemeToggle";
import ProfileCard from "../components/ProfileCard";
import Interests from "../components/Interests";
import ExperienceCard from "../components/ExperienceCard";
import MeetzedCard from "../components/MeetzedCard";
import ToolsList from "../components/ToolsList";
import EducationList from "../components/EducationList";
import Portfolio from "../components/Portfolio";
import Details from "../components/Details";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="font-sans flex justify-center">
      <ThemeToggle />
      <LanguageSwitcher currentLang={lang} />
      <main className="grid grid-cols-12 container mt-20 gap-6">
        <ProfileCard intro={dict.intro} />
        <Interests interests={dict.sections.interests.items} />

        {/* Top row: experience cards (shared columns) */}
        <div className="col-span-12 grid grid-cols-12 gap-6">
          <div className="col-span-6">
            <ExperienceCard
              title={dict.sections.experience.freelance.title}
              role={dict.sections.experience.freelance.role}
              period={dict.sections.experience.freelance.period}
              bullets={dict.sections.experience.freelance.bullets}
            />
          </div>

          <div className="col-span-6">
            <ExperienceCard
              title={dict.sections.experience.meetzed.title}
              role={dict.sections.experience.meetzed.role}
              period={dict.sections.experience.meetzed.period}
              bullets={dict.sections.experience.meetzed.bullets}
            />
          </div>
        </div>

        {/* Second row: left column tools (50%), right column education (50%) */}
        <div className="col-span-6 grid grid-rows-3 gap-6">
          <ToolsList title={dict.sections.designTools} items={[
            { id: "ai", icon: "https://www.svgrepo.com/show/452147/adobe-illustrator.svg" },
            { id: "ps", icon: "https://www.svgrepo.com/show/452149/adobe-photoshop.svg" },
            { id: "id", icon: "https://logodix.com/logo/1025755.png" },
            { id: "xd", icon: "https://www.svgrepo.com/show/452151/adobe-xd.svg" }
          ]} />
          <ToolsList title={dict.sections.editingTools} items={[
            { id: "ae", text: "Ae" },
            { id: "pr", text: "Pr" },
            { id: "davinci", text: "DaVinci" }
          ]} />
          <ToolsList title={dict.sections.languages} items={[
            { id: "in", text: "🇮🇳" },
            { id: "gb", text: "🇬🇧" },
            { id: "us", text: "🇺🇸" }
          ]} />
        </div>

        <div className="col-span-6">
          <EducationList education={dict.sections.education} />
        </div>

        <div className="col-span-12">
          <Portfolio items={["Bento","Behance","Instagram","Youtube","Dribbble"]} dict={dict} />
        </div>

        <div className="col-span-12">
          <Details details={{ age: "26 years", email: "iamsunilfreelancer.com", phone: "+91 9899052055", country: "India" }} dict={dict} />
        </div>
      </main>
    </div>
  );
}
