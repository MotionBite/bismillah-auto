import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import prisma from '../../../lib/prisma';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const product = await prisma.product.create({
      data: {
        name: data.name,
        shortName: data.shortName || null,
        price: Number(data.price),
        originalPrice: data.originalPrice ? Number(data.originalPrice) : null,
        currency: data.currency || "BDT",
        sku: data.sku || null,
        brand: data.brand || null,
        warranty: data.warranty || null,
        installation: data.installation || null,
        images: data.images || [],
        description: data.description || "",
        longDescription: data.longDescription || null,
        features: data.features || [],
        keyFeatures: data.keyFeatures || [],
        specifications: data.specifications || {},
        faqs: data.faqs || [],
        inStock: data.inStock !== undefined ? data.inStock : true,
      }
    });

    revalidatePath('/product');
    revalidatePath('/');

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}
