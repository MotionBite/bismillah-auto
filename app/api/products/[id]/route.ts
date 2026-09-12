import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import prisma from '../../../../lib/prisma';

export const dynamic = 'force-dynamic';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json();
    
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name: data.name,
        shortName: data.shortName,
        price: data.price ? Number(data.price) : undefined,
        originalPrice: data.originalPrice ? Number(data.originalPrice) : null,
        currency: data.currency,
        sku: data.sku,
        brand: data.brand,
        warranty: data.warranty,
        installation: data.installation,
        images: data.images,
        description: data.description,
        longDescription: data.longDescription,
        features: data.features,
        keyFeatures: data.keyFeatures,
        specifications: data.specifications,
        faqs: data.faqs,
        inStock: data.inStock,
      }
    });
    
    revalidatePath('/product');
    revalidatePath('/');

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.product.delete({
      where: { id }
    });
    
    revalidatePath('/product');
    revalidatePath('/');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}
