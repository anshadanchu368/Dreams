"use client"

import Link from "next/link";


const SearchFormReSet = () => {

    const reset = () => {
        const form = document.querySelector('form') as HTMLFormElement;

        if(form) form.reset();
    };

  return (
    <div>
        <button type="reset" onClick={reset}>
                <Link href="/" className=" text-black">X</Link>
            </button>
    </div>
  )
}

export default SearchFormReSet
