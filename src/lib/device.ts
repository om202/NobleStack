export function getDeviceId(): string {
    if (typeof window === "undefined") {
        return "server-side-unknown";
    }

    const STORAGE_KEY = "noble_device_id";
    let deviceId = localStorage.getItem(STORAGE_KEY);

    if (!deviceId) {
        // Generate a new UUID
        if (typeof crypto !== "undefined" && crypto.randomUUID) {
            deviceId = crypto.randomUUID();
        } else {
            // Fallback for older browsers
            deviceId = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                const r = (Math.random() * 16) | 0;
                const v = c === "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            });
        }
        localStorage.setItem(STORAGE_KEY, deviceId);
    }

    return deviceId;
}
