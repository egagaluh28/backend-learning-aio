import CryptoJS from "crypto-js";
import { config } from "../config";

const base64UrlEncode = (input: string): string => {
  return input.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

const base64UrlDecode = (input: string): string => {
  const base64 = input.replace(/-/g, "+").replace(/_/g, "/");
  return base64 + "=".repeat((4 - (base64.length % 4)) % 4);
};

function formatId(id: number){
    const idString = id.toString();
    const paddedId = idString.padStart(6, '0');
    return `NM${paddedId}`;
};

export function encryptFormatId(id: number){
    const formattedId = formatId(id);
    const cipherText = CryptoJS.AES.encrypt(formattedId, config.aesSecret).toString();
    return base64UrlEncode(cipherText);
};

export function decryptFormatId(cipherText: string){
    const decodedCipherText = base64UrlDecode(cipherText);
    const bytes = CryptoJS.AES.decrypt(decodedCipherText, config.aesSecret);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    
    // Remove the prefix 'NM' and lea  ding zeros, then parse back to number
    const idString = decrypted.replace(/^NM0*/, '');
    return parseInt(idString, 10);
};
