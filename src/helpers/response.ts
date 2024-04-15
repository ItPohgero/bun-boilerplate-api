import type { BunResponse } from "bunrest/src/server/response";

interface PropsResponseJson {
    message?: string | unknown;
}

interface PropsResponseJsonWithData extends PropsResponseJson {
    data: any;
}

export const Response = (res: BunResponse) => ({
    /**
     * Method to send a JSON response with status code 200 (OK) along with data.
     * This method is designed to handle various response data structures.
     * @param props - The response properties containing message and data.
     * @param statusCode - The status code of the response (default is 200).
     * @returns The BunResponse object with JSON data and specified status code.
     */
    Json200WithData: (props: PropsResponseJsonWithData, statusCode: number = 200) => {
        const { message, data } = props;
        return res.status(statusCode).json({
            "Message": message ?? "Success",
            "Code": statusCode,
            "Results": data,
        });
    },

    /**
     * Method to send a JSON response with status code 200 (OK).
     * This method is designed to handle various response data structures.
     * @param props - The response properties containing message.
     * @param statusCode - The status code of the response (default is 200).
     * @returns The BunResponse object with JSON data and specified status code.
     */
    Json200: (props: PropsResponseJson) => {
        const { message } = props;
        const Code = 200;
        return res.status(Code).json({
            "Message": message ?? "Success",
            "Code": Code,
        });
    },

    /**
     * Method to send a JSON response with status code 201 (Created).
     * This method is designed to handle various response data structures.
     * @param props - The response properties containing message.
     * @param statusCode - The status code of the response (default is 200).
     * @returns The BunResponse object with JSON data and specified status code.
     */
    Json201: (props: PropsResponseJson) => {
        const { message } = props;
        const Code = 201;
        return res.status(Code).json({
            "Message": message ?? "Created successfully",
            "Code": Code,
        });
    },

    /**
     * Method to send a JSON response with status code 400 (Bad Request).
     * This method is designed to handle various response data structures.
     * @param props - The response properties containing message.
     * @param statusCode - The status code of the response (default is 200).
     * @returns The BunResponse object with JSON data and specified status code.
     */
    Json400: (props: PropsResponseJson) => {
        const { message } = props;
        const Code = 400;
        return res.status(Code).json({
            "Message": message ?? "Bad request",
            "Code": Code,
        });
    },

    /**
    * Method to send a JSON response with status code 404 (Not Found).
    * This method is designed to handle various response data structures.
    * @param props - The response properties containing message.
    * @param statusCode - The status code of the response (default is 200).
    * @returns The BunResponse object with JSON data and specified status code.
    */
    Json404: (props: PropsResponseJson) => {
        const { message } = props;
        const Code = 404;
        return res.status(Code).json({
            "Message": message ?? "Not found",
            "Code": Code,
        });
    },

    /**
    * Method to send a JSON response with status code 500 (Internal Server Error).
    * This method is designed to handle various response data structures.
    * @param props - The response properties containing message.
    * @param statusCode - The status code of the response (default is 200).
    * @returns The BunResponse object with JSON data and specified status code.
    */
    Json500: (props: PropsResponseJson) => {
        const { message } = props;
        const Code = 500;
        return res.status(Code).json({
            "Message": message ?? "Internal server error",
            "Code": Code,
        });
    },
});
