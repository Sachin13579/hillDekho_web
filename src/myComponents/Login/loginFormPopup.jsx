"use client";
import { Button } from "../../../components/ui/button";
// import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { useState } from "react";

export function LoginFormPopup({ text }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="authButton">{text}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{text}</DialogTitle>
          <DialogDescription>
            Enter your email and password to login to your account
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              email
            </Label>
            <Input
              id="name"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="admin@example.com"
              type="email"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              value={password}
              placeholder="enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
