class Helper {
    static isLogin() {
        let token = sessionStorage.getItem("token");
        return token !== null;
    }

    static isEmpty(value) {
        return value.length === 0;
    }

    static API_BASE = "https://cart-api.teamrabbil.com/api";
}

export default Helper