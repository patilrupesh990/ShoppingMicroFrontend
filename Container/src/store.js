import React, {createContext,useContext,useState} from 'react';

const productContext = createContext([[],()=>{}]);

export function productProvider({children}){
    return(
        <productContext.Provider products={useState([])}>
            {children}
        </productContext.Provider>
    )
}

export function useProduct(){
    return useContext(productContext);
}