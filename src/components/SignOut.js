export function SignOut() {
    localStorage.removeItem("token");
    RemoveUser();
    console.log("you signed out");
}

export const RemoveUser = () => {
    localStorage.removeItem("user");

}