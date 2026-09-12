import prisma from '../../../lib/prisma';
import ProductListClient from './ProductListClient';

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return <ProductListClient initialProducts={products} />;
}
