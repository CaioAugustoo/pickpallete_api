import { MESSAGES } from "../../constants";
import { HttpException } from "../HttpException";

const throwWrongApiKeyException = () => {
  throw new HttpException(401, MESSAGES.WRONG_API_KEY);
};

const throwApiKeyMissingException = () => {
  throw new HttpException(401, MESSAGES.API_KEY_MISSING);
};

export { throwWrongApiKeyException, throwApiKeyMissingException };
