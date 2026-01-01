// Import necessary Sidebar components from the shared UI library.
// These are reusable components designed to build a standard sidebar layout.
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarNavigation,
} from '@kit/ui/shadcn-sidebar';
// Import the JwtPayload type from Supabase to strictly type the user object.
import type { JwtPayload } from '@supabase/supabase-js';

// Import the application logo component.
import { AppLogo } from '~/components/app-logo';
// Import the dropdown container that displays user profile and account settings.
import { ProfileAccountDropdownContainer } from '~/components/personal-account-dropdown-container';
// Import the central navigation configuration which defines the links and structure.
import { navigationConfig } from '~/config/navigation.config';
// Import database types to ensure the 'account' prop matches your database schema.
import { Tables } from '~/lib/database.types';

// Define the HomeSidebar component.
// It accepts 'props' containing:
// 1. account: The current user's account details (optional).
// 2. user: The authenticated user's JWT payload (required).
export function HomeSidebar(props: {
  account?: Tables<'accounts'>;
  user: JwtPayload;
}) {
  return (
    // The main Sidebar container.
    // 'collapsible="icon"' means the sidebar can shrink to just show icons,
    // usually triggered by a toggle button or screen size.
    <Sidebar collapsible={'icon'}>
      {/* 
        SidebarHeader: The top section of the sidebar.
        'h-16' sets a fixed height. 'justify-center' vertically centers the content.
      */}
      <SidebarHeader className={'h-16 justify-center'}>
        <div className={'flex items-center justify-between space-x-2'}>
          <div>
            {/* The AppLogo component displays your branding/logo. */}
            <AppLogo className={'max-w-full'} />
          </div>
        </div>
      </SidebarHeader>

      {/* 
        SidebarContent: The middle, scrollable area of the sidebar.
        This is where the main navigation links live.
      */}
      <SidebarContent>
        {/* 
          SidebarNavigation: A smart component that renders the menu items.
          It reads 'navigationConfig' to know what links (Home, Settings, etc.) to show.
        */}
        <SidebarNavigation config={navigationConfig} />
      </SidebarContent>

      {/* 
        SidebarFooter: The bottom pinned section of the sidebar.
        Useful for user profiles or settings that should always be visible.
      */}
      <SidebarFooter>
        {/* 
          Renders the user profile dropdown (avatar, name, logout, etc.).
          We pass the 'user' and 'account' data down so it can display the correct info.
        */}
        <ProfileAccountDropdownContainer
          user={props.user}
          account={props.account}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
