import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export type CopyButtonProps = {
  value: string;
  label: string;
};

export const CopyButton = ({ value, label }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      title={copied ? "Copied!" : `Copy ${label}`}
      className="flex items-center gap-1 p-1 rounded hover:bg-zinc-600 transition cursor-pointer text-xs"
    >
      {copied ? (
        <>
          <span className="text-teal-300" aria-live="polite">
            Copied
          </span>
          <Check className="size-5 text-teal-300" />
        </>
      ) : (
        <Copy className="size-5 text-zinc-400" />
      )}
    </button>
  );
};
