import CryptoJS from "crypto-js";

const secretKey = "1234567890123456";

export const encrypt = (text: string) => {
	const ciphertext = CryptoJS.AES.encrypt(text, secretKey).toString();
	return encodeURIComponent(ciphertext);
};

// Função para descriptografar
export const decrypt = (ciphertext: string) => {
	const decodedCiphertext = decodeURIComponent(ciphertext);

	const bytes = CryptoJS.AES.decrypt(decodedCiphertext, secretKey);
	const originalText = bytes.toString(CryptoJS.enc.Utf8);

	return originalText;
};

export function test(string: string) {
	const encrypted = encrypt(string);
	console.log("Encrypted:", encrypted);

	const decrypted = decrypt(encrypted);
	console.log("Decrypted:", JSON.parse(decrypted));
}
