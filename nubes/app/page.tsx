import { AuthComponent } from '@/src/components/AuthComponent';
import { WiCloudy } from 'react-icons/wi';

export default async function Home() {
  return (
    <main className="relative flex items-center justify-center h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        controls={false}
        muted
      >
        <source
          src={
            'https://hzhzygtsfqxksectlxme.supabase.co/storage/v1/object/public/app-assets/desktop-clouds.mp4?t=2024-06-13T17%3A15%3A36.494Z'
          }
          type="video/mp4"
        />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex flex-col gap-1 text-white">
          <div className="flex justify-center align-middle">
            <WiCloudy size={120} />
          </div>
          <h1 className="font-bold text-6xl">Las Nubes</h1>
        </div>
        <AuthComponent />
      </div>
    </main>
  );
}
