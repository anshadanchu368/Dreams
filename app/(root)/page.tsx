import SearchForm from "../components/SearchForm";

export default async function Home({ searchParams}: {
  searchParams:Promise<{query?:string}>
}) {
  const query= (await searchParams).query;
  return (
   <>
   <section className="flex flex-col items-center bg-pink-100 py-5">
    <h1 className="heading">Home</h1>

    <p className="text-black-100 text-md !max-w-3xl font-sans my-2">Pitch Your Ideas And Get funded By India's Top investors</p>

    <SearchForm query={query}/>

   </section>
   </>
  );
}
