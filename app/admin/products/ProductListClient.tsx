"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Search, Plus, Edit, Trash2, Package, PackageX, Filter, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function ProductListClient({ initialProducts }: { initialProducts: any[] }) {
  const router = useRouter();
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState('');
  const [stockFilter, setStockFilter] = useState<'ALL' | 'IN_STOCK' | 'OUT_OF_STOCK'>('ALL');
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [isToggling, setIsToggling] = useState<string | null>(null);

  // Filter Logic
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          (p.sku && p.sku.toLowerCase().includes(search.toLowerCase())) ||
                          (p.brand && p.brand.toLowerCase().includes(search.toLowerCase()));
    
    const matchesStock = stockFilter === 'ALL' 
                         ? true 
                         : stockFilter === 'IN_STOCK' 
                           ? p.inStock 
                           : !p.inStock;

    return matchesSearch && matchesStock;
  });

  const executeDelete = async (id: string) => {
    setIsDeleting(id);
    
    const deletePromise = fetch(`/api/products/${id}`, { method: 'DELETE' }).then(res => {
      if (!res.ok) throw new Error("Failed");
      return res.json();
    });

    toast.promise(
      deletePromise,
      {
        pending: 'ডিলিট করা হচ্ছে...',
        success: 'প্রোডাক্ট সফলভাবে ডিলিট করা হয়েছে!',
        error: 'প্রোডাক্ট ডিলিট ব্যর্থ হয়েছে!'
      }
    ).then(() => {
      setProducts((prev) => prev.filter(p => p.id !== id));
      router.refresh();
      setIsDeleting(null);
    }).catch(() => {
      setIsDeleting(null);
    });
  };

  const handleDelete = (id: string) => {
    const toastId = toast(
      <div className="flex flex-col gap-3">
        <div className="font-medium text-slate-800 text-sm">আপনি কি নিশ্চিত যে এই প্রোডাক্টটি ডিলিট করতে চান?</div>
        <div className="flex gap-2 justify-end mt-1">
          <button 
            onClick={() => toast.dismiss(toastId)}
            className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            ক্যান্সেল
          </button>
          <button 
            onClick={() => {
              toast.dismiss(toastId);
              executeDelete(id);
            }}
            className="px-3 py-1.5 text-xs font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            হ্যাঁ, ডিলিট করুন
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: false,
      }
    );
  };

  const handleStockToggle = async (id: string, currentStock: boolean) => {
    setIsToggling(id);
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inStock: !currentStock })
      });
      if (res.ok) {
        const updated = await res.json();
        setProducts(products.map(p => p.id === id ? { ...p, inStock: updated.inStock } : p));
        toast.success(updated.inStock ? "প্রোডাক্ট 'In Stock' করা হয়েছে!" : "প্রোডাক্ট 'Out of Stock' করা হয়েছে!");
        router.refresh();
      } else {
        toast.error("স্ট্যাটাস আপডেট ব্যর্থ হয়েছে!");
      }
    } catch (e) {
      toast.error("সার্ভার এরর! আপডেট করা যায়নি।");
    } finally {
      setIsToggling(null);
    }
  };

  const calculateDiscount = (original: number, current: number) => {
    if (!original || original <= current) return 0;
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Products</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your store inventory</p>
        </div>
        <Link 
          href="/admin/products/new"
          className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
        >
          <Plus size={18} />
          <span>Add Product</span>
        </Link>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search products by name, SKU or brand..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-1 shrink-0 overflow-x-auto hide-scrollbar">
          {(['ALL', 'IN_STOCK', 'OUT_OF_STOCK'] as const).map(filter => (
            <button
              key={filter}
              onClick={() => setStockFilter(filter)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap border ${
                stockFilter === filter 
                ? 'bg-white text-blue-600 shadow-sm border-slate-200/50' 
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {filter === 'ALL' ? 'All Items' : filter === 'IN_STOCK' ? 'In Stock' : 'Out of Stock'}
            </button>
          ))}
        </div>
      </div>

      {/* Product View */}
      {filteredProducts.length === 0 ? (
        <div className="min-h-[260px] flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-slate-200 bg-white">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
            <PackageX size={32} className="text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">No products found</h3>
          <p className="text-slate-500 mt-1 max-w-sm mb-6 text-center">
            {search ? 'Try adjusting your search or filters to find what you are looking for.' : 'Get started by adding your first product to the inventory.'}
          </p>
          {!search && (
            <Link 
              href="/admin/products/new"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
            >
              <Plus size={18} />
              <span>Add First Product</span>
            </Link>
          )}
        </div>
      ) : (
        <>
          {/* Mobile View: High-contrast Product Cards */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {filteredProducts.map(product => {
              const discount = calculateDiscount(product.originalPrice, product.price);
              const imgUrl = Array.isArray(product.images) && product.images[0] ? product.images[0].url : null;
              
              return (
                <div key={product.id} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 rounded-xl bg-slate-100 flex-shrink-0 border border-slate-200 overflow-hidden relative">
                      {imgUrl ? (
                        <img src={imgUrl} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">No Img</div>
                      )}
                      {discount > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-bl-lg">
                          -{discount}%
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                      <div>
                        {product.brand && <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md inline-block mb-1">{product.brand}</span>}
                        <h3 className="font-semibold text-slate-900 truncate leading-tight">{product.name}</h3>
                        <div className="text-xs text-slate-500 mt-0.5">{product.sku || 'No SKU'}</div>
                      </div>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="font-bold text-slate-900">{product.price} ৳</span>
                        {product.originalPrice && <span className="text-xs text-slate-400 line-through">{product.originalPrice} ৳</span>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-1">
                    <button 
                      onClick={() => handleStockToggle(product.id, product.inStock)}
                      disabled={isToggling === product.id}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                        product.inStock 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100' 
                        : 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100'
                      } ${isToggling === product.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isToggling === product.id ? 'Updating...' : product.inStock ? <><CheckCircle2 size={14}/> In Stock</> : 'Out of Stock'}
                    </button>
                    
                    <div className="flex gap-2">
                      <Link 
                        href={`/admin/products/${product.id}`}
                        className="p-2 text-slate-600 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors"
                      >
                        <Edit size={16} />
                      </Link>
                      <button 
                        onClick={() => handleDelete(product.id)}
                        disabled={isDeleting === product.id}
                        className="p-2 text-red-600 bg-red-50 rounded-lg border border-red-100 hover:bg-red-100 transition-colors disabled:opacity-50"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop View: Polished Data Table */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-semibold rounded-tl-2xl w-5/12">Product Info</th>
                  <th className="p-4 font-semibold w-36">Pricing</th>
                  <th className="p-4 font-semibold w-48">Stock Status</th>
                  <th className="p-4 font-semibold text-right rounded-tr-2xl w-28">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredProducts.map((product) => {
                  const discount = calculateDiscount(product.originalPrice, product.price);
                  const imgUrl = Array.isArray(product.images) && product.images[0] ? product.images[0].url : null;
                  
                  return (
                    <tr key={product.id} className="hover:bg-slate-50/80 transition-colors group h-[88px]">
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0 relative">
                            {imgUrl ? (
                              <img src={imgUrl} alt={product.name} className="w-full h-full object-cover" />
                            ) : (
                              <Package size={20} className="text-slate-300" />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{product.name}</div>
                            <div className="flex items-center gap-2 mt-1">
                              {product.brand && <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">{product.brand}</span>}
                              <span className="text-xs text-slate-400">{product.sku || 'No SKU'}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex flex-col justify-center min-h-[42px]">
                          <div className="font-medium text-slate-900 leading-tight">{product.price} ৳</div>
                          {product.originalPrice ? (
                            <div className="flex items-center gap-1.5 mt-1 h-[18px]">
                              <span className="text-xs text-slate-400 line-through leading-tight">{product.originalPrice} ৳</span>
                              {discount > 0 && <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-sm leading-none">-{discount}%</span>}
                            </div>
                          ) : (
                            <div className="h-[18px] mt-1"></div>
                          )}
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={product.inStock}
                            disabled={isToggling === product.id}
                            onChange={() => handleStockToggle(product.id, product.inStock)} 
                          />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          <span className={`ms-3 text-sm font-medium inline-block w-24 ${product.inStock ? 'text-slate-900' : 'text-slate-400'}`}>
                            {isToggling === product.id ? '...' : product.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </label>
                      </td>
                      <td className="p-4 text-right align-middle">
                        <div className="flex justify-end gap-2 transition-opacity">
                          <Link 
                            href={`/admin/products/${product.id}`}
                            className="p-2 text-slate-400 hover:text-blue-600 bg-white rounded-lg border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-colors shadow-sm"
                            title="Edit Product"
                          >
                            <Edit size={16} />
                          </Link>
                          <button 
                            onClick={() => handleDelete(product.id)}
                            disabled={isDeleting === product.id}
                            className="p-2 text-slate-400 hover:text-red-600 bg-white rounded-lg border border-slate-200 hover:border-red-200 hover:bg-red-50 transition-colors shadow-sm disabled:opacity-50"
                            title="Delete Product"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
