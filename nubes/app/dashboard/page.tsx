import Link from 'next/link';
import { dashboardConfig } from '@/configs/appConfig';

export default async function DashboardPage() {
  const {
    newBookingUrl,
    dashboardTitle,
    dashboardSubtitle,
    dashboardDescription,
    dashboardCTA,
  } = dashboardConfig;

  return (
    <div className="flex justify-center items-center h-[calc(100vh-160px)] container">
      <div className="flex flex-col space-y-4 text-center text-foreground dark:text-white">
        <h1 className="mb-2 text-4xl" style={{ fontWeight: 900 }}>
          {dashboardTitle}
        </h1>
        <p className="text-foreground">{dashboardSubtitle}</p>
        <p className="text-foreground">{dashboardDescription}</p>
        <Link
          href={newBookingUrl}
          className="p-4 border border-border shadow-sm rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-transparent"
        >
          {dashboardCTA}
        </Link>
      </div>
    </div>
  );
}
