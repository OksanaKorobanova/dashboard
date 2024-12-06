import AppSidebar from '@/components/AppSidebar';
import Navbar from '@/components/Navbar';
import { SidebarProvider } from '@/components/ui/sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className='w-full'>
        <Navbar />
        <main className='p-5'>{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
