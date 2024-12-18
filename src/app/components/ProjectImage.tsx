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
    <div style={{ width, height, borderRadius: '8px', overflow: 'hidden', margin: '0 auto' }} className={className}>
      <Image 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      style={{ objectFit: 'contain' }} // You can change 'contain' to 'fill', 'none', 'scale-down', or 'cover'
      />
    </div>
  );
};

export default ProjectImage;

/* Usage Example
const MyComponent = () => {
  return (
    <div>
      <ProjectImage 
        src="/path/to/centrebyte-image.jpg" 
        alt="Centrebyte Marketplace" 
        className="mb-3 rounded" 
        width={128} 
        height={128} 
      />
      <ProjectImage 
        src="/media/headshot.jpeg" 
        alt="Davis Sneed" 
        className="w-32 h-32 rounded-full border-4 border-blue-500" 
        width={128} 
        height={128} 
      />
    </div>
  );
};

export default MyComponent;
*/