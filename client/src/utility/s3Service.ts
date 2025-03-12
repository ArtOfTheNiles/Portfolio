/**
 * Service to handle S3 image fetching
 */
export const S3Service = {
  /**
   * Gets a signed URL for an S3 image
   * @param imageKey - The key (path) of the image in S3
   * @returns Promise with the signed URL
   */
  getImageUrl: async (imageKey: string): Promise<string> => {
    try {
      const response = await fetch(`/api/s3/getSignedUrl?key=${encodeURIComponent(imageKey)}`);
      
      if (!response.ok) {
        throw new Error('Failed to get image URL');
      }
      
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Error fetching image URL:', error);
      throw error;
    }
  }
};
