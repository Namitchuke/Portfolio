import { ExternalLink } from "lucide-react";
import type { Education } from "../../lib/types";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";
import { CurrentBadge } from "../ui/CurrentBadge";

export const AnimatedEducationBox = () => {
  return (
    <AnimatedBox className="col-span-5 row-span-4 p-6 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-4">
        {myInfo.studies.map((edu: Education) => (
          <div key={edu.degreeTitle}>
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold text-zinc-100 leading-snug">
                {edu.url ? (
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-300 transition-colors"
                  >
                    {edu.degreeTitle}
                  </a>
                ) : (
                  edu.degreeTitle
                )}
              </h3>
              {edu.current ? (
                <CurrentBadge className="bg-teal-500 text-zinc-900 shrink-0" />
              ) : null}
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-zinc-300">{edu.institution}</p>
              <span className="text-zinc-400 text-xs shrink-0">
                {edu.dateRange}
              </span>
            </div>
            {edu.topics.length > 0 && (
              <ul className="mt-1 list-disc list-inside text-sm text-zinc-400">
                {edu.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="border-t border-zinc-700 pt-3">
        <p className="hidden lg:block text-xs uppercase tracking-wider text-zinc-500 mb-2">
          Also certified
        </p>
        <div className="flex flex-wrap gap-2">
          {myInfo.certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-zinc-300 border border-zinc-600 rounded px-2 py-1 hover:bg-zinc-700 transition-colors"
            >
              {cert.title} · {cert.issuer}
              <ExternalLink className="size-3 text-zinc-500" />
            </a>
          ))}
        </div>
      </div>
    </AnimatedBox>
  );
};
