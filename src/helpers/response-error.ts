import type { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const PrismaErrorToHttpResponse = (error: PrismaClientKnownRequestError) => {
    switch (error?.code) {
        case 'P2002':
            return {
                message: "Dupiclate Data",
                target: error?.meta?.target
            }
    }
    return { message: "Internal Server Error", target: [] }
};
export default PrismaErrorToHttpResponse;
