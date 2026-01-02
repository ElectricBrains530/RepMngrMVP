// Import the Zod schema that validates the navigation configuration.
// This ensures that your config matches exactly what the UI components expect.
import { NavigationConfigSchema } from '@kit/ui/navigation-schema';
// Import icons from Lucide to use in the menu.
import { Home, User } from 'lucide-react';
// Import Zod for type inference.
import { z } from 'zod';

// Import the central paths configuration.
// It's best practice to keep all your URL paths in one file (paths.config.ts)
// so you don't have hardcoded strings scattered everywhere.
import pathsConfig from '~/config/paths.config';

// Define a standard class for icons to ensure consistency.
const iconClasses = 'w-4';

// Define the main navigation routes.
// We cast this to satisfy the Zod schema's 'routes' type for strict type safety.
const routes = [
  {
    // A specific group of routes (e.g. "Application").
    // 'common:routes.application' is likely an i18n key for translation.
    label: 'common:routes.application',
    children: [
      {
        // The actual menu link.
        label: 'common:routes.home', // Display name (translated)
        path: pathsConfig.app.home, // The URL to link to
        Icon: <Home className={iconClasses} />, // The icon component
        end: true, // If true, matches only if the path is exactly this (e.g. "/" vs "/settings")
      },
    ],
  },
  {
    // Another group (e.g. "Settings").
    label: 'common:routes.settings',
    children: [
      {
        label: 'common:routes.profile',
        path: pathsConfig.app.profileSettings,
        Icon: <User className={iconClasses} />,
        collapsible: true, // Enable nesting
        children: [
          {
            label: 'Contact',
            path: '/contact',
          },
        ],
      },
    ],
  },
] satisfies z.infer<typeof NavigationConfigSchema>['routes'];

// Export the final parsed configuration.
// NavigationConfigSchema.parse() will throw an error if 'routes' is invalid,
// protecting your app from crashing due to bad config at runtime.
export const navigationConfig = NavigationConfigSchema.parse({
  routes,
  style: process.env.NEXT_PUBLIC_NAVIGATION_STYLE, // Read style preference from .env
  sidebarCollapsed: process.env.NEXT_PUBLIC_HOME_SIDEBAR_COLLAPSED, // Read default collapsed state
});
