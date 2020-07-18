export class StringUtils {
    truncate = (input:string,length: number) => input.length > length ? `${input.substring(0, length)}...` : input;
}