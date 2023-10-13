export async function generateStaticParams() {
    const response = await fetch('http://.../product').then(res => res.json());

    return response.map((product: {id: string}) => ({
        id: product.id,
    }))
  }
   
  export default function Page({ params }: { params: { id: string } }) {
    const { id } = params
    return <h1>product page {id}</h1>
  }