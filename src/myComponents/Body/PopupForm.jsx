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
        // <Form   {...form}>
        //     <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-sm mx-auto space-y-8" >
        //         <FormField
        //             control={form.control}
        //             name="username"
        //             render={({ field }) => (
        //                 <FormItem className="lg:grid grid-cols-2 gap-4">
        //                     <div>

        //                         <FormLabel>First Name</FormLabel>
        //                         <FormControl>
        //                             <Input placeholder="Enter first name" {...field} />
        //                         </FormControl>
        //                         <FormMessage />
        //                     </div>
        //                     {/* <FormDescription>
        //                         This is your public display name.
        //                     </FormDescription> */}
        //                     <div className="mt-0">

        //                         <FormLabel>Last Name</FormLabel>
        //                         <FormControl>
        //                             <Input placeholder="Enter last name" {...field} />
        //                         </FormControl>
        //                         <FormMessage />
        //                     </div>
        //                     <div>

        //                         <FormLabel>Phone Number</FormLabel>
        //                         <FormControl>
        //                             <Input placeholder="Enter first name" {...field} />
        //                         </FormControl>
        //                         <FormMessage />
        //                     </div>
        //                     <div className="mt-0">

        //                         <FormLabel>Email ID</FormLabel>
        //                         <FormControl>
        //                             <Input placeholder="Enter last name" {...field} />
        //                         </FormControl>
        //                         <FormMessage />
        //                     </div>
        //                     <div>

        //                         <FormLabel>Travel Date</FormLabel>
        //                         <FormControl>
        //                             <Input placeholder="Enter first name" {...field} />
        //                         </FormControl>
        //                         <FormMessage />
        //                     </div>
        //                     <div className="mt-0">

        //                         <FormLabel>Number of travellers</FormLabel>
        //                         <FormControl>
        //                             <Input placeholder="Enter last name" {...field} />
        //                         </FormControl>
        //                         <FormMessage />
        //                     </div>



        //                 </FormItem>
        //             )}
        //         />
        //         <div>
        //             <FormLabel>Travel Date</FormLabel>
        //             <FormControl>
        //                 {/* <Input placeholder="Enter first name" {...field} /> */}
        //                 <Textarea />
        //             </FormControl>
        //             <FormMessage />
        //         </div>

        //         <div className="flex justify-center">

        //             <Button variant="outline" type="submit">Submit</Button>
        //         </div>
        //     </form>
        // </Form>
        <form class="max-w-lg mx-auto">
            <div className="lg:grid grid-cols-2 gap-4">
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email ID</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Travel Date</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                {/* <div class="flex items-start mb-5">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div> */}
            </div>
            <div >

                <Button type="submit" variant="outline">Submit</Button>
            </div>

        </form>
    )
}
export default ProfileForm

