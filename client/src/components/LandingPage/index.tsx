import * as React from "react"
import { isMobile } from "react-device-detect";

export default function LandingPage() {
    if (isMobile) {
        window.location.href = "/controler/1";
    }
    window.location.href = "/1";

    return (
        <></>
    );
}
