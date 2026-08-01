// const sessionMap=new Map();
const jwt = require('jsonwebtoken');
const secret = 'Core@1510';
function setUser(user) {
    // sessionMap.set(id,user);
    return jwt.sign({
        _id: user._id,
        name:user.name,
        email: user.email,
    }, secret);
}

function getUser(token) {
    // return sessionMap.get(id);
    if (!token) return null;
    try {
        return jwt.verify(token, secret)
    } catch (error) {
        return null;
    }
}


module.exports = {
    setUser,
    getUser,
}