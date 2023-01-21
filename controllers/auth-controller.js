// these will all perform asynchronous operations

const signUpUser = async (req, res) => {
    res.send('user sign up');
}

const logInUser = async (req, res) => {
    res.send('user log in');
}

const updateUser = async (req, res) => {
    res.send('user update');
}

export {signUpUser, logInUser, updateUser}