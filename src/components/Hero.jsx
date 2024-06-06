import React from "react";
import Button from "./Button";

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
            <div className="flex flex-col gap-4">
                <p>IT'S TIME TO BECOME</p>
                <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Attractively<span className="text-blue-400">Athletic</span>
                </h1>
            </div>
            <p className="text-sm md:text-base font-light">
                By using{" "}
                <span className="text-blue-400 font-medium">
                    Attractively Athletic
                </span>{" "}
                app, you agree to consult your doctor before starting any
                workouts. Keep your account details secret and play nice—no
                funny business! All content is ours, so{" "}
                <span className="text-blue-400 font-medium">
                    no unauthorized borrowing
                </span>
                . We can change or stop the app anytime. Not liable for any
                mishaps—exercise wisely and enjoy your fitness journey!
            </p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    );
}
