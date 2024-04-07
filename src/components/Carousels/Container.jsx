'use client';



const Container = ({ children }) => {
    return (
        <div
            className="
        max-w-[2520px]
        mx-auto
        xl:px-20 
        md:px-10
        sm:px-2
        px-4
    to-white-100 via-white h-30 bg-gradient-to-t from-white
       overflow-x-auto
   
      "
        >
            {children}
        </div>
    );
}

export default Container;