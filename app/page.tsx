// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
      <div className="space-y-14 pb-6">
          {/* Title + Desc */}
          <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-medium text-center">Free Unlimited File Converter</h1>
              <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
                  Unlock your creativity with Flexr – The ultimate online tool for limitless and free multimedia conversion. Effortlessly transform images, audio, and videos without any constraints. Begin converting now and take your content to new heights!
              </p>
          </div>

          {/* Upload Box */}
          <Dropzone />
      </div>
  );
}
