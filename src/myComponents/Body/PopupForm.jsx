"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../../../components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../../components/ui/form"
import { Input } from "../../../components/ui/input"
import { Textarea } from "../../../components/ui/textarea"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

function ProfileForm() {
    // ...
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (

        <form className=" lg:max-w-lg mx-auto">
            <div className="lg:grid grid-cols-2 gap-4">
                <div >
                    <label htmlFor="email" className="block mb-1 lg:mb-1 lg:mb-2 text-xs lg:text-xs  font-medium text-gray-900 dark:text-white">First name</label>
                    <input type="email" id="email" className="bg-gray-50 b  sm:mb-2 order lg:h-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div >
                    <label htmlFor="password" className="block mb-1 lg:mb-2 text-xs font-medium text-gray-900 dark:text-white">Last name</label>
                    <input type="password" id="password" className="b  sm:mb-2 g-gray-50 border lg:h-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div >
                    <label htmlFor="email" className="block mb-1 lg:mb-2 text-xs font-medium text-gray-900 dark:text-white">Phone number</label>
                    <input type="email" id="email" className="bg-g  sm:mb-2 ray-50 border lg:h-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div >
                    <label htmlFor="password" className="block mb-1 lg:mb-2 text-xs  font-medium text-gray-900 dark:text-white">Email ID</label>
                    <input type="password" id="password" className="b  sm:mb-2 g-gray-50 border lg:h-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div >
                    <label htmlFor="email" className="block mb-1 lg:mb-2 text-xs sm:text-xs font-medium text-gray-900 dark:text-white">Travel Date</label>
                    <input type="email" id="email" className="bg-g  sm:mb-2 ray-50 border lg:h-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-1 lg:mb-2 text-xs  font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="b  sm:mb-2 g-gray-50 border lg:h-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>



                {/* <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div> */}
            </div>
            <div >

                <label htmlFor="message" className="block mb-1 lg:mb-2 text-xs  font-medium text-gray-900 dark:text-white">Your message</label>
                <textarea id="message" rows="4" className="block  sm:mb-2  p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            </div>
            <div className="flex justify-center p-0 " >

                <Button type="submit" variant="outline">Submit</Button>
            </div>

        </form>
    )
}
export default ProfileForm

