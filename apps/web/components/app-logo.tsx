// Import the 'cn' utility function, which is a helper for merging Tailwind CSS classes conditionally.
import { cn } from '@kit/ui/utils';
// Import the Image component from Next.js for optimized image rendering.
// This component handles lazy loading and image optimization automatically.
import Image from 'next/image';
// Import Link from Next.js to enable client-side navigation between pages.
import Link from 'next/link';

// Define a private helper component 'LogoImage'.
// This component renders the actual image elements for the logo.
// It is not exported because it's only used internally by 'AppLogo'.
function LogoImage({
  className,
  collapsed,
  width = 210, // Default width if not provided
  height = 80, // Default height if not provided
}: {
  className?: string; // Optional custom CSS classes
  collapsed?: boolean;
  width?: number; // Optional custom width
  height?: number; // Optional custom height
}) {
  if (collapsed) {
    return (
      <Image
        src="/images/favicon/IoV-logo-icon.svg"
        alt="App Logo"
        width={32}
        height={32}
        className={cn('size-8', className)}
      />
    );
  }

  return (
    <>
      {/* 
        Render the LIGHT mode logo.
        - 'src': The path to the SVG image for light backgrounds.
        - 'dark:hidden': Tailwind class that hides this image when dark mode is active.
        - 'w-[...px]': Sets specific widths for different screen sizes (responsive design).
      */}
      <Image
        src="/images/IsleofView_logoblack.svg"
        alt="App Logo"
        width={width}
        height={height}
        className={cn('w-[160px] lg:w-[190px] dark:hidden', className)}
      />
      {/* 
        Render the DARK mode logo.
        - 'src': The path to the SVG image for dark backgrounds (usually white text).
        - 'hidden': Hidden by default (for light mode).
        - 'dark:block': Visible only when dark mode is active.
      */}
      <Image
        src="/images/IsleofView_logowhite.svg"
        alt="App Logo"
        width={width}
        height={height}
        className={cn('hidden w-[160px] lg:w-[190px] dark:block', className)}
      />
    </>
  );
}

// Export the main 'AppLogo' component.
// This is the component used throughout the application to display the logo.
export function AppLogo({
  href,
  label,
  className,
  collapsed,
}: {
  href?: string | null; // Optional URL to link to. If null, it won't be a link.
  className?: string; // Optional custom CSS classes to pass down to the image.
  label?: string; // Optional aria-label for accessibility (screen readers).
  collapsed?: boolean;
}) {
  // If 'href' is explicitly null, render just the image without a link wrapper.
  // This is useful for pages where the logo shouldn't be clickable (e.g., auth pages).
  if (href === null) {
    return <LogoImage collapsed={collapsed} className={className} />;
  }

  // Otherwise, wrap the logo in a Next.js Link.
  // - 'href': Defaults to '/' (Home) if not specified.
  // - 'aria-label': Improves accessibility by describing the link.
  return (
    <Link aria-label={label ?? 'Home Page'} href={href ?? '/'}>
      <LogoImage collapsed={collapsed} className={className} />
    </Link>
  );
}
