import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

type Params = Promise<{ slug: string }>;

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/#work" 
          className="inline-flex items-center text-white/50 hover:text-white transition-colors mb-12 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Work
        </Link>

        {/* Header Section matching screenshot layout */}
        <div className="mb-16">
          <p className="text-white/50 text-lg mb-4 font-medium">
            From: {project.date}
          </p>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
            {project.title}
          </h1>
          
          <p className="text-lg text-white/80 leading-relaxed mb-8 font-light">
            {project.detailedDescription || project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-16">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="px-5 py-2 rounded-full border border-white/20 text-white/80 text-sm tracking-wide font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:flex md:gap-24 border-t border-white/10 pt-10">
            {project.cost && (
              <div>
                <p className="text-white/50 text-sm mb-2 font-medium">Project cost</p>
                <p className="text-xl font-bold text-white">{project.cost}</p>
              </div>
            )}
            {project.duration && (
              <div>
                <p className="text-white/50 text-sm mb-2 font-medium">Project duration</p>
                <p className="text-xl font-bold text-white">{project.duration}</p>
              </div>
            )}
          </div>

          {project.link && (
            <div className="mt-10">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 w-fit"
              >
                Visit Live Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Image Gallery */}
        <div className="space-y-24">
          {project.categories.map((category) => (
            <div key={category.name}>
              <h3 className="text-2xl font-medium tracking-tight text-white mb-8 inline-block border-b border-white/20 pb-2">
                {category.name}
              </h3>
              <div className="flex flex-col gap-8">
                {category.images.map((imgSrc, idx) => (
                  <div key={idx} className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={imgSrc} 
                      alt={`${project.title} - ${category.name} ${idx + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </main>
  );
}
