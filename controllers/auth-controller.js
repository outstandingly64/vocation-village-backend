const signUpUser = (req, res) => {
    res.send('user sign up');
}

const logInUser = (req, res) => {
    res.send('user log in');
}

const updateUser = (req, res) => {
    res.send('user update');
}

export {signUpUser, logInUser, updateUser}