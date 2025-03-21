import Form from 'next/form'
import SearchFormReSet from './SearchFormReSet';

const SearchForm = () => {

    const query = "test";

    

    return (
        <>
        
        <Form action="/" scroll={false} className='bg-white border border-pink-800 rounded-md  max-w-80 h-12 px-3 flex items-center '>
            <input name="query" defaultValue={query} className="outline-none mx-4" placeholder='search Startups and invest' />
     <div className="flex gap-2">
          {query && (
             <SearchFormReSet/>
          ) }
     </div>
    </Form>
        
        </>
  )
}

export default SearchForm
