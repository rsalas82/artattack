import userDataMock from "./mock/userdata.mock"

export const userMockAuthenticate = ({username, password}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const existsUser = userDataMock.find(user => user.username === username)
            if (!existsUser) {
                reject({code: 404, message: "Username was not found"});
            }

            if(existsUser && existsUser.password !== password) {
                reject({code: 404, message: "Password incorrect"});
            }

            resolve({data: existsUser});
        }, 500);
      });
}