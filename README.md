# Namit Chuke: Portfolio

My personal portfolio, live at **[namitchuke-portfolio.vercel.app](https://namitchuke-portfolio.vercel.app/)**.

Built with **React**, **TypeScript**, **Tailwind CSS** and **Framer Motion**. Fully responsive.

Sections: Home · About · Experience · Education (with certifications) · Projects · Contact

All text lives in [`src/assets/data.tsx`](src/assets/data.tsx), so content updates don't need component changes.

## Run locally

```bash
git clone https://github.com/Namitchuke/Portfolio
cd Portfolio
npm install --legacy-peer-deps
npm run dev
```

`--legacy-peer-deps` is needed until `eslint-plugin-react-hooks` supports ESLint 10.
