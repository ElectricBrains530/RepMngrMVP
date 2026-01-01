import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@kit/ui/utils';

function LogoImage({
  className,
  width = 210,
  height = 80,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src="/images/IsleofView_logo_primary_dark.svg"
      alt="App Logo"
      width={width}
      height={height}
      className={cn('w-[160px] lg:w-[190px]', className)}
    />
  );
}

export function AppLogo({
  href,
  label,
  className,
}: {
  href?: string | null;
  className?: string;
  label?: string;
}) {
  if (href === null) {
    return <LogoImage className={className} />;
  }

  return (
    <Link aria-label={label ?? 'Home Page'} href={href ?? '/'}>
      <LogoImage className={className} />
    </Link>
  );
}
