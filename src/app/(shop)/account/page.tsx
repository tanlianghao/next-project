export function generateStaticParams() {
    return [{id: "1"}, {id: "2"}];
}
export default function Page({ params }: { params: {id: string}}) {
    const id = params.id;
    return <h1>account page {id}</h1>
}