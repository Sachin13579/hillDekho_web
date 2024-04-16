"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../../components/ui/infinite-moving-cards";
import { playFairDisplay } from '../../ui-Utils/fonts';

export function InfiniteMovingCardsDemo() {
    return (

        <main className="mt-20 mb-20 flex justify-center items-center flex-col gap-10 ">
            <div className="flex flex-col items-center text-center gap-2 ">
                < h1 className=" sm:text-xs lg:text-base leading-6 tracking-widest text-Aquamarine700" > TESTIMONIALS</h1 >
                <h2 className={`${playFairDisplay.className} text-3xl lg:text-5xl font-bold`}>Hear What Our Adventurers Have to Say!</h2>
            </div >
            <div className="w-full rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </main >
    );
}

// const testimonials = [
//     {
//         quote:
//             "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//         name: "Charles Dickens",
//         title: "A Tale of Two Cities",
//         image:'/testimonial.png'
//     },
//     {
//         quote:
//             "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//         name: "William Shakespeare",
//         title: "Hamlet",
//     },
//     {
//         quote: "All that we see or seem is but a dream within a dream.",
//         name: "Edgar Allan Poe",
//         title: "A Dream Within a Dream",
//     },
//     {
//         quote:
//             "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//         name: "Jane Austen",
//         title: "Pride and Prejudice",
//     },
//     {
//         quote:
//             "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//         name: "Herman Melville",
//         title: "Moby-Dick",
//     },
// ];
const testimonials = [
    {
        quote:
            "Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
        image: '/testimonial.png'
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
        image: '/testimonial.png'
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
        image: '/testimonial.png'
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
        image: '/testimonial.png'
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
        image: '/testimonial.png'
    },
];
