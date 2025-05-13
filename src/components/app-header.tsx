import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Car } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="RideEase Home">
          <Car className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl text-primary">RideEase</span>
        </Link>
        <Link href="/login">
          <Button variant="outline" className="shadow-sm">Login</Button>
        </Link>
      </div>
    </header>
  );
}
