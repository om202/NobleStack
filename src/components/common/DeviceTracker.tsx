"use client";

import { useEffect } from "react";
import { getDeviceId } from "@/lib/device";

export default function DeviceTracker() {
    useEffect(() => {
        // Initialize device ID on mount (boot)
        getDeviceId();
    }, []);

    return null;
}
