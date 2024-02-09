import { register } from "./model";
import { useBase } from "h3";

const router = createRouter();

router.post(
    "/register",
    defineEventHandler(async (event) => {
        return await register(event);
    })
);

export default useBase("/api/auth", router.handler);