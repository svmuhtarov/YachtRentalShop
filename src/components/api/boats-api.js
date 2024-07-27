import * as request from "./requester";
const BASE_URL = 'http://localhost:3030/jsonstore/boats';

 const getAll = async() =>  {
    const result = await request.get(BASE_URL);

    const games = Object.values(result);

    return games;
};

// const getOne = async(gameId) =>  {
//     const game = await request.get(`${BASE_URL}/${gameId}`);

//     return game;
// };
const getOne = (boatId) => request.get(`${BASE_URL}/${boatId}`);

 const gamesApi = {
    getAll,
    getOne
}


export default gamesApi;