import Image from 'next/image';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, className, width, height }) => {
  return (
    <div 
      style={{ 
        width, 
        height, 
        borderRadius: '6px', 
        overflow: 'hidden', 
        margin: '0 auto'
      }} 
      className={`${className} border border-gray-200 bg-white`}
    >
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        style={{ 
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }}
        className="transition-opacity hover:opacity-95"
      />
    </div>
  );
};

export default ProjectImage;

/* Clean Professional Usage
const ExampleComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      <ProjectImage 
        src="/media/project-image.png" 
        alt="Project Screenshot" 
        className="mb-4" 
        width={300} 
        height={200} 
      />
      <ProjectImage 
        src="/media/headshot.png" 
        alt="Professional Headshot" 
        className="rounded-full border-2 border-gray-300" 
        width={120} 
        height={120} 
      />
    </div>
  );
};
*/