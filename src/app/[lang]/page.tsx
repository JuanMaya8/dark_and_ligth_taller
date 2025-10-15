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

        <div className="col-span-8 grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <ExperienceCard
              title={dict.sections.experience.freelance.title}
              role={dict.sections.experience.freelance.role}
              period={dict.sections.experience.freelance.period}
              bullets={dict.sections.experience.freelance.bullets}
            />
          </div>
          
          <div className="col-span-1">
            <MeetzedCard
              title="Meetzed"
              role="Graphic Designer"
              period="2020 - 2021"
              bullets={[
                "Collaborated/Supported Lead Designer on projects.",
                "Branding: Crafted unique brand identities.",
                "Tools: Used Illustrator, Photoshop & InDesign."
              ]}
            />
          </div>

          <ToolsList title={dict.sections.designTools} items={["Ai","Ps","Id","Xd"]} />
          <ToolsList title={dict.sections.editingTools} items={["Ae","Pr","DaVinci"]} />
          <ToolsList title={dict.sections.languages} items={["��","🇬🇧","🇺🇸"]} />
        </div>

        <div className="col-span-4 grid grid-rows-3 gap-6">
          <EducationList education={dict.sections.education} />
        </div>

        <div className="col-span-12">
          <Portfolio items={["Bento","Behance","Instagram","Youtube","Dribbble"]} />
        </div>

        <div className="col-span-12">
          <Details details={{ age: "26 years", email: "iamsunilfreelancer.com", phone: "+91 9899052055", country: "India" }} />
        </div>
      </main>
    </div>
  );
}
