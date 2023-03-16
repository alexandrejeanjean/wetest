export const Books = 'https://anapioficeandfire.com/api/books/'

export const getBooks = () => fetch(Books).then((res) => res.json());