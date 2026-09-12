import Link from 'next/link';
import { Package, Plus, TrendingUp, Users } from 'lucide-react';
import prisma from '../../lib/prisma';

export default async function AdminDashboard() {
  // Fetch counts from database
  let productCount = 0;
  try {
    productCount = await prisma.product.count();
  } catch (error) {
    console.error("Database connection failed:", error);
    // Silent fail for now, handled by UI
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500 mt-1">Welcome to the Bismillah Auto Admin Panel</p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-full mb-3">
            <Package size={24} />
          </div>
          <p className="text-3xl font-bold text-slate-900">{productCount}</p>
          <p className="text-sm text-slate-500 mt-1">Products</p>
        </div>
        
        {/* Mock Stats for visual appeal */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
          <div className="p-3 bg-green-50 text-green-600 rounded-full mb-3">
            <TrendingUp size={24} />
          </div>
          <p className="text-3xl font-bold text-slate-900">24</p>
          <p className="text-sm text-slate-500 mt-1">Sales (This Month)</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-full mb-3">
            <Users size={24} />
          </div>
          <p className="text-3xl font-bold text-slate-900">145</p>
          <p className="text-sm text-slate-500 mt-1">Total Customers</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link 
            href="/admin/products/new" 
            className="flex items-center p-4 bg-blue-600 text-white rounded-xl shadow-sm hover:bg-blue-700 transition-colors"
          >
            <div className="p-2 bg-blue-500 rounded-lg mr-4">
              <Plus size={24} />
            </div>
            <div>
              <h3 className="font-semibold">Add New Product</h3>
              <p className="text-blue-100 text-sm">Create a new GPS tracker entry</p>
            </div>
          </Link>

          <Link 
            href="/admin/products" 
            className="flex items-center p-4 bg-white border border-slate-200 text-slate-800 rounded-xl shadow-sm hover:bg-slate-50 transition-colors"
          >
            <div className="p-2 bg-slate-100 text-slate-600 rounded-lg mr-4">
              <Package size={24} />
            </div>
            <div>
              <h3 className="font-semibold">Manage Products</h3>
              <p className="text-slate-500 text-sm">Edit or delete existing products</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
