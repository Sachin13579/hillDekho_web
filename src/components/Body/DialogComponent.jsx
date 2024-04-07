import {
    Dialog,
    DialogContent,
    // DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../@/components/ui/dialog"
import { Label } from "../../../@/components/ui/label"
import { Input } from "../../../@/components/ui/input"
import { Button } from "../../../@/components/ui/button"


const DialogComponent = () => {
    return (

        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline">Request a Call</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create your iternary with us</DialogTitle>
                </DialogHeader>
                <div>
                    <label htmlFor="firstName" className="block text-xs font-medium text-gray-700"> Email </label>

                    <input
                        type="text"
                        id="firstName"
                        placeholder="john"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                    <label htmlFor="lastName" className="block text-xs font-medium text-gray-700"> Email </label>

                    <input
                        type="text"
                        id="lastName"
                        placeholder="doe"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                    <label htmlFor="phoneNumber" className="block text-xs font-medium text-gray-700"> Email </label>

                    <input
                        type="Number"
                        id="phoneNumber"
                        placeholder="901-123-4567"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                    <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Email </label>

                    <input
                        type="email"
                        id="UserEmail"
                        placeholder="john@rhcp.com"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                    <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Email </label>

                    <input
                        type="email"
                        id="UserEmail"
                        placeholder="john@rhcp.com"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                {/* <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div> */}
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default DialogComponent

