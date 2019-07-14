const db = require('../../data/dbConfig');

module.exports={
    getUserMetaById,
    getUserMetaByUserId,
    getUserMetaByStateId,
    getUserMetaByShelterUserId,
    createUserMeta,
    updateUserMeta,
    deleteUserMeta,
}

function getUserMetaById(id) {
    return db('user_meta') 
    .where({ id })
}

function getUserMetaByUserId(user_id) {
    return db('user_meta')
    .where({ user_id })
}

function getUserMetaByStateId(state_id) {
    return db('user_meta')
    .where({ state_id })
}

function getUserMetaByShelterUserId(shelter_user_id) {
    return db('user_meta')
    .where({ shelter_user_id })
}

function createUserMeta(user_meta) {
    return db('user_meta')
    .insert(user, 'id')
    .then( ([id]) => getUserMetaById(id))
}

function updateUserMeta(user_meta, user_id) {
    return db('user_meta')
    .where({ user_id })
    .update(user_meta)
}

function deleteUserMeta(user_id){
    return db('users_meta')
    .where({ user_id })
    .del()
}