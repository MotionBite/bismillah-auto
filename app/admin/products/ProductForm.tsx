"use client";

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Plus, X, Image as ImageIcon, AlertCircle, UploadCloud, Loader2, Trash2, PlusCircle, Settings, HelpCircle, ListTodo } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'react-toastify';

interface ProductFormProps {
  initialData?: any;
  isEdit?: boolean;
}

const COMMON_FEATURES = [
  "লাইভ ট্র্যাকিং",
  "ইঞ্জিন লক/কাট-অফ",
  "জিও-ফেন্সিং",
  "স্পিড অ্যালার্ট",
  "ভয়েস মনিটরিং",
  "ওয়াটারপ্রুফ IP67",
  "হিস্ট্রি প্লেব্যাক",
  "অ্যান্টি-থেফট অ্যালার্ম"
];

export default function ProductForm({ initialData, isEdit = false }: ProductFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  // State for complex fields
  const [images, setImages] = useState<string[]>(
    initialData?.images ? (Array.isArray(initialData.images) ? initialData.images.map((i: any) => i.url) : []) : []
  );
  
  const [features, setFeatures] = useState<string[]>(initialData?.features || []);
  const [featureInput, setFeatureInput] = useState('');



  // Auto-scroll focused inputs to center for mobile
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.innerWidth < 768 && 
        target && 
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') &&
        (target as HTMLInputElement).type !== 'checkbox' && 
        (target as HTMLInputElement).type !== 'file'
      ) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      }
    };
    
    document.addEventListener('focusin', handleFocusIn);
    return () => document.removeEventListener('focusin', handleFocusIn);
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');
      
      const data = await res.json();
      setImages([...images, data.url]);
      toast.success("ছবি সফলভাবে আপলোড হয়েছে!");
    } catch (err) {
      toast.error("ছবি আপলোড ব্যর্থ হয়েছে! আবার চেষ্টা করুন।");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const toggleFeature = (feat: string) => {
    if (features.includes(feat)) {
      setFeatures(features.filter(f => f !== feat));
    } else {
      setFeatures([...features, feat]);
    }
  };

  const handleAddCustomFeature = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (featureInput.trim() && !features.includes(featureInput.trim())) {
        setFeatures([...features, featureInput.trim()]);
        setFeatureInput('');
      }
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      shortName: formData.get('shortName'),
      price: formData.get('price'),
      originalPrice: formData.get('originalPrice'),
      sku: formData.get('sku'),
      brand: formData.get('brand'),
      warranty: formData.get('warranty'),
      installation: formData.get('installation'),
      description: formData.get('description'),
      longDescription: formData.get('longDescription'),
      images: images.map(url => ({ url, alt: formData.get('name'), title: formData.get('name') })),
      features: features,
      keyFeatures: initialData?.keyFeatures || [],
      specifications: initialData?.specifications || { build: [], power: [], connectivity: [], cost: [] },
      faqs: initialData?.faqs || [],
      inStock: formData.get('inStock') === 'on'
    };

    try {
      const url = isEdit ? `/api/products/${initialData.id}` : '/api/products';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to save product');
      
      toast.success(isEdit ? "প্রোডাক্ট সফলভাবে আপডেট হয়েছে!" : "নতুন প্রোডাক্ট যুক্ত হয়েছে!");
      router.push('/admin/products');
      router.refresh();
    } catch (err) {
      toast.error("প্রোডাক্ট সেভ করতে সমস্যা হয়েছে!");
      setLoading(false);
    }
  }

  // Calculate discount for live preview
  const [currentPrice, setCurrentPrice] = useState(initialData?.price?.toString() || '');
  const [originalPrice, setOriginalPrice] = useState(initialData?.originalPrice?.toString() || '');
  
  const discount = (originalPrice && currentPrice && Number(originalPrice) > Number(currentPrice)) 
    ? Math.round(((Number(originalPrice) - Number(currentPrice)) / Number(originalPrice)) * 100) 
    : 0;

  return (
    <form onSubmit={handleSubmit} className="pb-24 md:pb-0">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/products" className="p-2 bg-white rounded-full border border-slate-200 text-slate-500 hover:text-slate-900 shadow-sm transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{isEdit ? 'Edit Product' : 'Add New Product'}</h1>
          <p className="text-slate-500 text-sm mt-1">Fill out the details for the GPS Tracker</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Basic Details Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">1</span>
              Basic Details
            </h2>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Product Name *</label>
                <input required onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('অনুগ্রহ করে প্রোডাক্টের নাম লিখুন')} onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')} defaultValue={initialData?.name} name="name" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="MotoLock GPS v4.0" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Brand</label>
                  <input defaultValue={initialData?.brand} name="brand" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="MotoLock" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">SKU</label>
                  <input defaultValue={initialData?.sku} name="sku" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="MOTO-GPS-V4" />
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Stock Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">2</span>
              Pricing & Stock
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Price (৳) *</label>
                <input 
                  required 
                  onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('অনুগ্রহ করে প্রোডাক্টের দাম লিখুন')}
                  onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                  value={currentPrice}
                  onChange={(e) => setCurrentPrice(e.target.value)}
                  name="price" 
                  type="number" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                  placeholder="1299" 
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-1">Original Price (৳)</label>
                <div className="relative">
                  <input 
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    name="originalPrice" 
                    type="number" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                    placeholder="4500" 
                  />
                  {discount > 0 && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-emerald-100 text-emerald-700 font-bold text-xs px-2 py-1 rounded-md">
                      -{discount}%
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div>
                <h3 className="font-medium text-slate-900">In Stock</h3>
                <p className="text-xs text-slate-500 mt-0.5">Is this item currently available for sale?</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" name="inStock" defaultChecked={initialData ? initialData.inStock : true} className="sr-only peer" />
                <div className="w-14 h-7 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          {/* Description Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">3</span>
              Descriptions
            </h2>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Short Description *</label>
                <textarea required onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('অনুগ্রহ করে প্রোডাক্টের বিবরণ লিখুন')} onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')} defaultValue={initialData?.description} name="description" rows={2} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none" placeholder="আপনার বাইকের স্মার্ট সিকিউরিটি সঙ্গী!"></textarea>
                <p className="text-[11px] text-slate-500 mt-1">সহজ নির্দেশিকা: ১-২ লাইনের মধ্যে প্রোডাক্টের মূল আকর্ষণ লিখুন।</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Long Description</label>
                <textarea defaultValue={initialData?.longDescription} name="longDescription" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none" placeholder="বিস্তারিত বিবরণ..."></textarea>
              </div>
            </div>
          </div>





        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          
          {/* Visual Image Manager with Cloudinary */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <ImageIcon size={20} className="text-blue-600" />
              Images
            </h2>
            
            <div className="mb-4">
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                accept="image/*" 
                className="hidden" 
              />
              <button 
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="w-full flex flex-col items-center justify-center gap-2 bg-slate-50 border-2 border-dashed border-blue-200 rounded-xl p-6 text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {uploading ? (
                  <Loader2 size={28} className="animate-spin text-blue-500" />
                ) : (
                  <UploadCloud size={28} />
                )}
                <span className="text-sm font-medium text-slate-700">
                  {uploading ? 'Uploading...' : 'Click to Upload Image'}
                </span>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {images.map((url, idx) => (
                <div key={idx} className="relative group rounded-xl overflow-hidden border border-slate-200 aspect-square bg-slate-50">
                  <img src={url} alt={`Preview ${idx}`} className="w-full h-full object-cover" />
                  <button 
                    type="button"
                    onClick={() => handleRemoveImage(idx)}
                    className="absolute top-1 right-1 bg-red-500/90 hover:bg-red-600 text-white p-1.5 rounded-full opacity-0 md:group-hover:opacity-100 transition-opacity"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Chips */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <ListTodo size={20} className="text-blue-600" />
              Short Tags (Features)
            </h2>
            <p className="text-[11px] text-slate-500 mb-3">সহজ নির্দেশিকা: নিচের অপশনগুলো থেকে ক্লিক করে ফিচার ট্যাগ সিলেক্ট করুন।</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {COMMON_FEATURES.map(feat => {
                const isSelected = features.includes(feat);
                return (
                  <button
                    key={feat}
                    type="button"
                    onClick={() => toggleFeature(feat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                      isSelected 
                      ? 'bg-blue-50 text-blue-700 border-blue-200' 
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {feat}
                  </button>
                );
              })}
              {/* Custom features not in common list */}
              {features.filter(f => !COMMON_FEATURES.includes(f)).map(feat => (
                <div key={feat} className="px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1">
                  {feat}
                  <button type="button" onClick={() => toggleFeature(feat)} className="hover:text-red-500 outline-none"><X size={12}/></button>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100">
              <input 
                type="text" 
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                onKeyDown={handleAddCustomFeature}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
                placeholder="Type custom feature tag & hit Enter" 
              />
            </div>
          </div>

          {/* Service Details */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
               <Settings size={20} className="text-blue-600" />
               Service Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Warranty</label>
                <input defaultValue={initialData?.warranty} name="warranty" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="1 Year Replacement" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Installation</label>
                <input defaultValue={initialData?.installation} name="installation" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Free Installation" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sticky Mobile Action Footer */}
      <div className="fixed bottom-16 md:bottom-0 left-0 right-0 md:relative md:mt-8 p-4 md:p-0 bg-white md:bg-transparent border-t border-slate-200 md:border-t-0 shadow-[0_-4px_10px_-5px_rgba(0,0,0,0.1)] md:shadow-none z-40 flex justify-end">
        <button 
          type="submit"
          disabled={loading || uploading}
          className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 md:py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:shadow-none"
        >
          {loading ? 'Saving...' : <><Save size={20} /> {isEdit ? 'Save Changes' : 'Publish Product'}</>}
        </button>
      </div>

    </form>
  );
}
