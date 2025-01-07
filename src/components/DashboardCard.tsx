import { cn } from "@/lib/utils";

interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export const DashboardCard = ({
  title,
  subtitle,
  className,
  children,
  ...props
}: DashboardCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in hover:animate-card-hover",
        className
      )}
      {...props}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {subtitle && (
          <p className="text-sm text-dashboard-neutral-400 mt-1">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
};