exports.getFullAddress = function (user){
    if(!user.street || !user.city || !user.province || !user.postal){
        return 'Invalid user'
    }
    return `${user.street}, ${user.city}, ${user.province}, ${user.postal}`
}