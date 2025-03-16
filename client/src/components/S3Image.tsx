import { useState, useEffect } from 'react';
import { S3Service } from '../utility/s3Service';

interface S3ImageProps {
  imageKey: string;
  alt: string;
  className?: string;
  thumbAlignment?: string;
}


const S3Image = ({ imageKey, alt, className, thumbAlignment = '' }: S3ImageProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const imgStyle = {
    objectPosition: thumbAlignment ? thumbAlignment : '',
  };

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        setLoading(true);
        const url = await S3Service.getImageUrl(imageKey);
        setImageUrl(url);
        setError(null);
      } catch (err) {
        setError('Failed to load image');
        console.error('Error loading S3 image:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImageUrl();
  }, [imageKey]);

  if (loading) {
    return <div className="image-placeholder">Loading...</div>;
  }

  if (error) {
    return <div className="image-error">{error}</div>;
  }

  return <img src={imageUrl || ''} alt={alt} className={className} style={imgStyle}/>;
};

export default S3Image;