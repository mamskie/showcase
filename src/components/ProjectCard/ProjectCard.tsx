import { memo, useCallback, useMemo, useState } from 'react';
import { Project } from '../../types/project';
import './ProjectCard.css';

const ProjectCard = memo(({ project }: { project: Project }) => {
  const isReverse = project.layout === 'reverse';
  const [loading] = useState(true);
  const [openImage, setOpenImage] = useState<string | null>(null);

  // Tech tags
  const techTags = useMemo(
    () => (
      <div className={`project-tech ${loading ? 'animate' : ''}`}>
        {project.tech.map((tech: string, index: number) => (
          <span key={index} className="tech-tag cursor-target">
            {tech}
          </span>
        ))}
      </div>
    ),
    [project.tech, loading],
  );

  // Info Section
  const InfoSection = useCallback(
    () => (
      <div className="project-info">
        <h2 className={`cursor-target ${loading ? 'animate' : ''}`}>
          {project.title}
        </h2>
        <p className={`project-description ${loading ? 'animate' : ''}`}>
          {project.description}
        </p>
        {techTags}
      </div>
    ),
    [project.title, project.description, techTags, loading],
  );

  const PreviewSection = useCallback(
    () => (
      <div
        className={`project-preview cursor-target ${loading ? 'animate' : ''}`}
        onClick={() => setOpenImage(project.preview)}
      >
        <img
          className="project-image"
          src={project.preview}
          alt={project.title}
          loading="lazy"
        />
      </div>
    ),
    [project.preview, project.title, loading],
  );

  return (
    <>
      <div className="project-card">
        {isReverse ? (
          <>
            <PreviewSection />
            <InfoSection />
          </>
        ) : (
          <>
            <InfoSection />
            <PreviewSection />
          </>
        )}
      </div>

      {/* Fullscreen overlay */}
      {openImage && (
        <div className="fullscreen-overlay" onClick={() => setOpenImage(null)}>
          <img
            src={openImage}
            alt={project.title}
            className="fullscreen-image"
          />
        </div>
      )}
    </>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
