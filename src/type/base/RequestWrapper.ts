export default class ResponseWrapper<T> {
    private success: boolean; // 是否成功
    private message: Array<string>; // 回傳訊息
    private responseBody: T; // 回傳資料
    private messageLevel: string;
    private returnCode: string;

    get isSuccess() {
        return this.success;
    }

    get getMessage() {
        return this.message;
    }

    get getResponseBody(): T {
        return this.responseBody;
    }

    get getMessageLevel() {
        return this.messageLevel;
    }

    get getReturnCode() {
        return this.returnCode;
    }
}
