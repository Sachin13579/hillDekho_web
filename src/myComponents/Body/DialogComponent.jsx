import {
    Dialog,
    DialogContent,
    // DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../components/ui/dialog"
import { Label } from "../../../components/ui/label"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"
import ProfileForm from "./PopupForm"


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

                <ProfileForm />

                {/* <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    )
}
export default DialogComponent

