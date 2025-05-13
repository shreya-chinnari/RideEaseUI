'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CarFront, Calculator, History, MessageSquareText, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Ride Booking', icon: CarFront },
  { href: '/fare-estimate', label: 'Fare Estimate', icon: Calculator },
  { href: '/ride-history', label: 'Ride History', icon: History },
  { href: '/whatsapp-bot', label: 'WhatsApp', icon: MessageSquareText },
  { href: '/sms-gateway', label: 'SMS', icon: Smartphone },
];

export function MainNav() {
  const pathname = usePathname();
  const activeTab = pathname;

  return (
    <nav className="sticky top-16 z-30 w-full border-b bg-background shadow-sm">
      <Tabs value={activeTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 rounded-none h-auto p-0">
          {navItems.map((item) => (
            <TabsTrigger
              key={item.href}
              value={item.href}
              asChild
              className={cn(
                "data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none py-3 px-1 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
                "text-muted-foreground hover:text-primary transition-colors duration-150 ease-in-out"
              )}
              aria-label={item.label}
            >
              <Link href={item.href} className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 h-full w-full">
                <item.icon className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-medium truncate">{item.label}</span>
              </Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  );
}
