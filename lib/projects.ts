// lib/projects.ts

export type Project = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  overview: string;
  challenges: string;
  lessonsLearned: string;
  futureImprovements: string;
};

export const projects: Project[] = [
  {
    slug: 'lumio',
    title: 'Lumio',
    category: 'Agentic AI Study Platform',
    tagline: 'Agentic AI study assistant',
    description:
      'A full-stack agentic AI learning platform. Upload study materials to get instant AI summaries, flashcards, and quizzes, chat with your notes, and generate personalized study plans powered by Gemini.',
    image: '/images/projects/lumio-cover.jpg',
    tags: ['Next.js', 'TypeScript', 'HeroUI', 'Express', 'MongoDB', 'Gemini API'],
    githubUrl: 'https://github.com/fariaesha-prog/StudyMateAi-client',
    liveUrl: 'https://study-mate-ai-client.vercel.app/',
    overview:
      'Lumio helps students study smarter by turning uploaded PDFs, DOCX, and TXT files into AI-generated summaries, flashcards, quizzes, and study notes. A context-aware chat assistant lets users ask questions directly about their own material, and an AI study planner builds a personalized schedule from subjects, goals, and deadlines.',
    challenges:
      "Integrating the Google Gemini API for document understanding meant handling multi-format uploads (PDF, DOCX, TXT) reliably before they ever reach the model, plus keeping AI chat responses grounded in the correct uploaded document rather than drifting into generic answers. Managing auth across JWT, Google Sign-In, and a demo account, all behind secure HttpOnly cookies, also took careful session handling on both frontend and backend.",
    lessonsLearned:
      'Working with an LLM API in production taught me to design prompts and context windows deliberately rather than treating the model as a black box, and to build UI states (typing indicators, suggested prompts, graceful fallbacks) around the inherent latency and unpredictability of AI responses.',
    futureImprovements:
      'Planned additions include AI flashcard export, PDF annotation, a voice assistant, study reminders, collaborative study rooms, and AI-driven performance insights.',
  },
  {
    slug: 'cineledger',
    title: 'CineLedger',
    category: 'Personal Film Tracking App',
    tagline: 'Personal film tracking app',
    description:
      'A sleek film diary and watchlist manager. Browse a catalog of 500K+ movies via TMDB, track watched films, write reviews, and get personalized recommendations.',
    image: '/images/projects/cineledger-cover.jpg',
    tags: ['Next.js', 'TypeScript', 'HeroUI', 'Express', 'MongoDB', 'TMDB API'],
    githubUrl: 'https://github.com/fariaesha-prog/cineledger-client',
    liveUrl: 'https://cineledger-client.vercel.app/',
    overview:
      "CineLedger is a cinephile journal built on top of the TMDB catalog, letting users track what they've watched, maintain a watchlist, write reviews, and see a personality-style breakdown of their taste based on viewing history.",
    challenges:
      "Upgrading through HeroUI v2 to v3 broke renamed and removed props across nearly every component in the app, requiring a systematic pass through the whole UI layer. A cross-origin auth bug also surfaced in production, fixed by switching cookies to sameSite: 'none' with secure: true and building a dynamic multi-origin CORS setup for the separately deployed frontend and backend.",
    lessonsLearned:
      'This project reinforced the value of full project-wide type checking (adopting npx tsc --noEmit) to catch issues the linter alone would miss, and gave hands-on experience with the real-world subtleties of cross-origin cookie-based auth when frontend and backend live on different domains.',
    futureImprovements:
      "Next up: deeper personalized recommendations, social features for sharing reviews with friends, and expanding the personality-card system with more nuanced taste categories.",
  },
  {
    slug: 'arthub',
    title: 'ArtHub',
    category: 'Digital Art Marketplace',
    tagline: 'Digital art marketplace',
    description:
      'A two-sided marketplace connecting independent digital artists with collectors. Features artist profiles, a curated gallery, and secure auth-backed purchasing flow.',
    image: '/images/projects/arthub-cover.jpg',
    tags: ['Next.js', 'Tailwind', 'HeroUI', 'Express', 'MongoDB', 'Better Auth'],
    githubUrl: 'https://github.com/fariaesha-prog/arthub-client-B13-A10',
    liveUrl: 'https://arthub-client-b13-a10.vercel.app/',
    overview:
      "ArtHub connects independent digital artists with collectors through artist profiles, a curated gallery, and a full purchase flow, built with Better Auth handling authentication across the marketplace.",
    challenges:
      "Debugging spanned a double-protocol URL bug that was breaking image and asset links, state management issues in HeroUI's Select component, and JWT verification failures that needed tracing through the Better Auth integration on the backend.",
    lessonsLearned:
      "Building a two-sided marketplace clarified how much of the real complexity lives in auth and state edge cases rather than the visible UI, a working Select dropdown or a correctly verified JWT often mattered more to the user experience than any visual polish.",
    futureImprovements:
      'Planned next: artist commission requests, a review/rating system for collectors, and expanding payment flow options.',
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}