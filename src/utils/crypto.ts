import crypto from "crypto";
import CryptoJS from "crypto-js";

const secretKey = "1234567890123456";

export const encrypt = (text: string) => {
	const ciphertext = CryptoJS.AES.encrypt(text, secretKey).toString();
	return encodeURIComponent(ciphertext);
};

export const decrypt = (ciphertext: string) => {
	const decodedCiphertext = decodeURIComponent(ciphertext);

	const bytes = CryptoJS.AES.decrypt(decodedCiphertext, secretKey);
	const originalText = bytes.toString(CryptoJS.enc.Utf8);

	return originalText;
};

export function base64(text: string) {
	return btoa(text);
}

export const hmac = (identifier: string, secretKey: string) => {
	const hash = crypto.createHmac("sha256", secretKey).update(identifier).digest("hex");
	return hash;
};
