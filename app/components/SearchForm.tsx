import Form from "next/form";
import SearchFormReSet from "./SearchFormReSet";

const SearchForm = ({query}:{query?: string}) => {
  return (
    <>
      <Form
        action="/"
        scroll={false}
        className="bg-white border border-pink-800 rounded-md  max-w-80 h-12 px-1 flex items-center "
      >
        <input
          name="query"
          defaultValue={query}
          className="outline-none px-2"
          placeholder="search Startups and invest"
        />
        <div className="flex gap-2">
            {query && <SearchFormReSet />}
            <button type="submit" className="">S</button>
        </div>
      </Form>
    </>
  );
};

export default SearchForm;
