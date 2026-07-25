// app/projects/[slug]/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects, getProjectBySlug } from '@/lib/projects';
import GridBackground from '@/components/hero/GridBackground';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const sections = [
    { title: 'Overview', content: project.overview },
    { title: 'Challenges', content: project.challenges },
    { title: 'Lessons Learned', content: project.lessonsLearned },
    { title: 'Future Improvements', content: project.futureImprovements },
  ];

  return (
    <div className="relative bg-slate-900 min-h-screen">
      <GridBackground />

      <div className="relative z-10 pt-32 pb-24 px-6 md:px-16">
      <div className="relative z-10 max-w-4xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to Projects
        </Link>

        <span className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">
          {project.category}
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-xs text-indigo-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-slate-700 mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-16">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-sm font-medium hover:border-slate-600 transition-colors"
            >
              <FaGithub size={15} />
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-medium"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-white mb-3">
                {section.title}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}