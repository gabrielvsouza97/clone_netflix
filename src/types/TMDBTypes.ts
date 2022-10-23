export type ResponseTopRated = {

};


export type GetHomeList = 
    {
        englishName: string,
        brazilianName: string;
        genreId?: number;
        items: []
    };