import Link from "next/link";
import { buttonVariants } from '@/components/ui/button';

function Homepage() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-8">
      {}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/1502818.jpg)' }}></div>


      {}
      <h1 className="text-6xl font-extrabold tracking-tight z-10">Welcome to Flow Factory</h1>
      <p className="text-xl z-10">Your platform for managing albums, artists, and songs</p>
      
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 z-10">
        <Link href="/albums/new" className={buttonVariants()}>
          Create Album
        </Link>

        <Link href="/songs/new" className={buttonVariants()}>
          Create Song
        </Link>

        <Link href="/artists/new" className={buttonVariants()}>
          Create Artist
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 z-10">
        <Link href="/song" className={buttonVariants()}>
          View Songs
        </Link>

        <Link href="/album" className={buttonVariants()}>
          View Albums
        </Link>

        <Link href="/artist" className={buttonVariants()}>
          View Artists
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
