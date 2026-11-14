// Highlights the numbers in a sentence (₹47L, 58%, 12% → 37%, 7.2 → 8.4)
// so a reader skimming the page sees the results first.
const NUM = String.raw`\d+(?:[.,]\d+)*`;
const VALUE = String.raw`(?:₹${NUM}[LK]?\+?|[−-]?${NUM}%\+?)`;
const METRIC = new RegExp(
  String.raw`(${VALUE}(?:\s→\s${VALUE})?|${NUM}\s→\s${NUM})`
);

export const Metrics = ({ text }: { text: string }) => (
  <>
    {text.split(METRIC).map((part, index) =>
      index % 2 === 1 ? (
        <span
          key={index}
          className="font-semibold text-teal-300 whitespace-nowrap"
        >
          {part}
        </span>
      ) : (
        part
      )
    )}
  </>
);
