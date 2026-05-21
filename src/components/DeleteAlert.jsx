"use client";

import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export function DeleteAlert({booking}) {
  const {docName, _id} =booking;

  const handleDelete = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/booking/${_id}`,{
      method: "DELETE",
      headers: {
        "content-type" : "application/json"
      }
    })

    const data = await res.json();
    toast.warn('delete successful')
    redirect('/dashboard')

  }
  return (
    <AlertDialog>
      <Button variant="outline" className={'rounded-lg border border-red-500 text-red-500'}><TrashBin></TrashBin> Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{docName} booking appointment!!</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}