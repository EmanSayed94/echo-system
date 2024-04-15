
export function urlSafeToBase64(urlSafeString) {
    const base64String = urlSafeString?.replace(/-/g, '+').replace(/_/g, '/');
    return base64String;
}