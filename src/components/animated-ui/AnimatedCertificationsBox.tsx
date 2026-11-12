import { Award, ExternalLink } from "lucide-react";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";

export const AnimatedCertificationsBox = () => {
  return (
    <AnimatedBox className="col-span-4 row-span-4 p-6">
      <h3 className="text-2xl font-medium flex items-center gap-3 text-zinc-100 mb-4">
        <Award className="size-6 text-zinc-400" /> Certifications
      </h3>
      <ul className="flex flex-col gap-2">
        {myInfo.certifications.map((cert) => (
          <li key={cert.title}>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-3 rounded-md p-3 hover:bg-zinc-700 transition-colors"
            >
              <div>
                <p className="text-zinc-100 font-semibold">{cert.title}</p>
                <p className="text-sm text-zinc-400">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              <ExternalLink className="size-4 mt-1 shrink-0 text-zinc-500 group-hover:text-teal-300" />
            </a>
          </li>
        ))}
      </ul>
    </AnimatedBox>
  );
};
