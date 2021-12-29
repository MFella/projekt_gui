const saveToken = (token: string) => {
    localStorage.setItem("token", token);
}

const saveUserList = (list: string[]) => {
    localStorage.setItem("usersList", JSON.stringify(list));
}

const saveUser = (user: string) => {
    localStorage.setItem("user", user);
}

const getToken = () => {
    return localStorage.getItem("token");
};

const getCurrentUser = (): string => {
    if (localStorage.getItem("token")) {
        const user = localStorage.getItem("user")
        return user ? user : "";
    }
    return "";
};

const getUsersList = () => {
    if (localStorage.getItem("token")) {
        const t = localStorage.getItem("usersList")
        return t ? JSON.parse(t) : undefined
    }
    return undefined;
};
const deleteSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("usersList");
};

const isUserAuthenticated = () => {
    return getToken() != undefined;
}

export default {
    saveToken,
    saveUserList,
    saveUser,
    getToken,
    getCurrentUser,
    getUsersList,
    deleteSession,
    isUserAuthenticated,
}