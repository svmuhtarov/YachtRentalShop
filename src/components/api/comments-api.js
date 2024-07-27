import requester from "./requester"

const BASE_URL = 'http://localhost:3030/jsonstore/games';

const builURL = (gameId) => `${BASE_URL}/${gameId}/comments`

const create = async ( gameId, username, text) => await requester.post(builURL(gameId), {username, text });


const getAllcomments = async(gameId) => {

    const result = await requester.get(builURL(gameId))
    const comments  = Object.values(result)

    return comments
};


export default {
    create,
    getAllcomments
}