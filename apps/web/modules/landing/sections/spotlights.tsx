// Hooks
import { useTranslations } from "next-intl";

// Components
import { SpotlightCard } from "../ui/spotlight-card";

// Icons

interface Spotlight {
  title: string;
  description: string;
}

export const Spotlights = () => {
  const t = useTranslations();
  const spotlights = t.raw("spotlights");

  return (
    <div>
      <ul className="grid grid-cols-2 lg:grid-cols-12 gap-3">
        {spotlights.map((spotlight: Spotlight, index: number) => (
          <li
            className={
              index === 0 || index === 1
                ? "col-span-6"
                : "col-span-6 lg:col-span-4 "
            }
            key={index}
          >
            <SpotlightCard
              title={spotlight.title}
              description={spotlight.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
