interface Book{
    title:string;
}

interface Book{
    price:number;
}

let book1:Book={
    title:'Learning TypeScript',
    price:500
};

type BookCategory='Programming' | 'Science';

//type BookCategory='History';