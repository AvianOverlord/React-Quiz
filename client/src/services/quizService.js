import axios from "axios";

export default
{
    getAll: async () => {
        console.log("Started request");
        axios.get("/api/quizlist").then((res) => {
            console.log("Got request back");
            return res;
        }).catch(err =>
            {
                console.log(err);
            });
    }
}