export declare class EncodingUtils {
    /**
     * 'utf8': Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
     * 'base64': Base64 encoding.
     *
     * @param str text
     */
    static base64Encode(str: string): string;
    /**
     * encode a URL
     * @param str
     */
    static base64EncodeUrl(str: string): string;
    /**
     * 'utf8': Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
     * 'base64': Base64 encoding.
     *
     * @param base64Str Base64 encoded text
     */
    static base64Decode(base64Str: string): string;
    /**
     * @param base64Str Base64 encoded Url
     */
    static base64DecodeUrl(base64Str: string): string;
}