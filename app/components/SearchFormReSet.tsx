"use client"

const SearchFormReSet = () => {
    const reset = () => {
        const form = document.querySelector('form') as HTMLFormElement;
        if(form) {
            form.reset();
     
            window.location.href = '/';
        }
    };

    return (
        <div>
            <button type="button" onClick={reset} className="text-black">
                X
            </button>
        </div>
    );
};

export default SearchFormReSet