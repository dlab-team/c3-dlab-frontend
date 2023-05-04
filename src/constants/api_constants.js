const URL_BASE="http://localhost:8080/api"

const url_api={
    //get
    profile_form: URL_BASE + "/1/profile/form",
    current_user: URL_BASE + "/1/users/currentuser/",
    //put
    add_user: URL_BASE + "/1/profile/adduser",
    //post
    get_user: URL_BASE + "/1/profile/getuser",
    sign_up: URL_BASE + "/1/users/signup",
    sign_in: URL_BASE + "/1/users/signin",
    sign_out: URL_BASE + "/users/1/signout"
}
export {url_api}