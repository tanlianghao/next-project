// Generate segments for both [category] and [product]
export async function generateStaticParams() {
    const products = await fetch('http://.../products').then((res) => res.json())
   
    return products.map((product: { category: { slug: any; }; id: any; }) => ({
      category: product.category.slug,
      product: product.id,
    }))
  }
   
  export default function Page({
    params,
  }: {
    params: { category: string; product: string }
  }) {
    return <h1>product page {params.category} {params.product}</h1>
    // ...
  }