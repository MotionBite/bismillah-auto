"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Package, PlusSquare, Store, Bell, User, Menu, ChevronLeft, LogOut } from 'lucide-react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      toast.info("লগআউট সফল হয়েছে!");
      router.push('/admin/login');
      router.refresh();
    } catch (e) {
      toast.error("লগআউট ব্যর্থ হয়েছে!");
    }
  };

  const navItems = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Products', href: '/admin/products', icon: Package },
    { name: 'Add Product', href: '/admin/products/new', icon: PlusSquare },
  ];

  // If we are on the login page, render an isolated layout without sidebar/header
  if (pathname === '/admin/login') {
    return (
      <>
        {children}
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} className="!z-[9999]" style={{ position: 'fixed' }} />
      </>
    );
  }

  return (
    <>
      <div className="flex h-[100dvh] w-full overflow-hidden bg-slate-50 text-slate-800 font-sans">
      
      {/* Desktop Sidebar */}
      <aside 
        className={`${isSidebarOpen ? 'w-64' : 'w-20'} flex-shrink-0 hidden md:flex flex-col bg-white border-r border-slate-200 transition-all duration-300 z-20 shadow-sm relative h-full`}
      >
        {/* Toggle Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-8 bg-white border border-slate-200 rounded-full p-1 text-slate-400 hover:text-slate-600 shadow-sm"
        >
          <ChevronLeft size={16} className={`transition-transform duration-300 ${!isSidebarOpen && 'rotate-180'}`} />
        </button>

        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
            BA
          </div>
          {isSidebarOpen && (
            <div className="overflow-hidden">
              <h1 className="font-bold text-slate-900 whitespace-nowrap">Bismillah Auto</h1>
              <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                <span>GPS Server Online</span>
              </div>
            </div>
          )}
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link 
                key={item.name}
                href={item.href} 
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                  isActive 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
                title={!isSidebarOpen ? item.name : undefined}
              >
                <Icon size={20} className={isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'} />
                {isSidebarOpen && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <Link 
            href="/" 
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200"
            title={!isSidebarOpen ? "Storefront" : undefined}
          >
            <Store size={20} />
            {isSidebarOpen && <span>Storefront</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col h-full overflow-hidden min-w-0">
        
        {/* Top Header */}
        <header className="bg-white/95 backdrop-blur border-b border-slate-200 h-14 flex-shrink-0 z-30 px-4 md:px-8 flex items-center justify-between shadow-sm relative">
          {/* Breadcrumb / Title */}
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <span className="hidden sm:inline">Admin</span>
            <span className="hidden sm:inline text-slate-300">/</span>
            <span className="text-slate-900 capitalize">
              {pathname === '/admin' ? 'Overview' : pathname.split('/').pop()?.replace('-', ' ') || 'Dashboard'}
            </span>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={handleLogout}
              title="Logout"
              className="relative p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
            >
              <LogOut size={20} />
            </button>
            <div className="flex items-center gap-2 cursor-pointer bg-slate-50 py-1.5 px-2 rounded-full border border-slate-100 hover:border-slate-200 transition-colors">
              <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                M
              </div>
              <span className="text-sm font-medium text-slate-700 pr-2 hidden sm:inline">Manager</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-scroll p-4 md:p-8 pb-24 md:pb-8">
          <div className="max-w-6xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>



      {/* Mobile Bottom Navigation (Thumb-friendly) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 pb-safe z-50 shadow-[0_-8px_20px_-15px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link 
                key={item.name}
                href={item.href} 
                className={`flex flex-col items-center justify-center w-16 h-full space-y-1 ${isActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <div className={`relative p-1.5 rounded-full transition-colors ${isActive ? 'bg-blue-50' : ''}`}>
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  {/* Fake notification badge on Products */}
                  {item.name === 'Products' && !isActive && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></span>
                  )}
                </div>
                <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>{item.name}</span>
              </Link>
            );
          })}
          
          <Link 
            href="/" 
            className="flex flex-col items-center justify-center w-16 h-full space-y-1 text-slate-400 hover:text-slate-600"
          >
            <div className="p-1.5 rounded-full">
              <Store size={22} strokeWidth={2} />
            </div>
            <span className="text-[10px] font-medium">Store</span>
          </Link>
        </div>
      </div>
      </div>
      
      <ToastContainer autoClose={2500} className="!z-[9999] md:!top-4 !top-2 !max-w-[90vw] !mx-auto" closeOnClick draggable hideProgressBar={false} newestOnTop pauseOnFocusLoss={false} pauseOnHover position="top-center" rtl={false} theme="light" />
    </>
  );
}
