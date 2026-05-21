"use client";
import React from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
  TimeField,
} from "@heroui/react";
import { toast } from "react-toastify";
import { BiEdit } from "react-icons/bi";
import { redirect } from "next/navigation";

const EditModal = ({booking}) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Booking = Object.fromEntries(formData.entries());
    console.log(Booking);

    const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/booking/${booking._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Booking),
    });

    const data = await res.json();
    toast.success("Edit successful")
    redirect('/dashboard')
  };
  return (
    <div>
      <Modal>
        <Button variant="outline" className={'border border-[#0a9396] text-[#0a9396] rounded-lg'}><BiEdit></BiEdit>Edit</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading className="text-2xl font-bold">
                  Book Appointment
                </Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  with{" "}
                  <span className="text-lg font-bold">
                    {booking.docName}
                  </span>
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="space-y-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {/*Name */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={booking.docName} name="docName" isRequired>
                          <Label>Doctor Name</Label>
                          <Input
                          disabled
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>
                      <div className="md:col-span-2">
                        <TextField defaultValue={booking.name} name="name" isRequired>
                          <Label>Name</Label>
                          <Input
                            placeholder="Your Name"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>
                      {/*Email */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={booking.email} name="email" isRequired>
                          <Label>Email</Label>
                          <Input
                            placeholder="Your Email"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>
                      {/*Number */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={booking.number} name="number" isRequired>
                          <Label>Phone Number</Label>
                          <Input
                            placeholder="Your Number"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      <div className="flex gap-10">
                        {/* Category - Updated Select Component */}
                        <div>
                          <Select
                            name="gender"
                            isRequired
                            className="w-full"
                            placeholder="Select"
                          >
                            <Label>Gender</Label>
                            <Select.Trigger className="rounded-2xl">
                              <Select.Value />
                              <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                              <ListBox>
                                <ListBox.Item id="male" textValue="male">
                                  Male
                                  <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="female" textValue="female">
                                  Female
                                  <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="others" textValue="others">
                                  Others
                                  <ListBox.ItemIndicator />
                                </ListBox.Item>
                              </ListBox>
                            </Select.Popover>
                          </Select>
                        </div>

                        {/* Departure Date */}
                        <div className="md:col-span-2">
                          <TextField
                          defaultValue={booking.departureDate}
                            name="departureDate"
                            type="date"
                            isRequired
                          >
                            <Label>Departure Date</Label>
                            <Input type="date" className="rounded-2xl" />
                            <FieldError />
                          </TextField>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={booking.reason} name="reason" isRequired>
                          <Label>Reason</Label>
                          <TextArea
                            placeholder="Describe your reason"
                            className="rounded-3xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>
                    </div>

                    <TimeField
                      isRequired
                      className="w-full"
                      name="appointmentTime"
                    >
                      <Label>Appointment time</Label>
                      <TimeField.Group>
                        <TimeField.Input>
                          {(segment) => <TimeField.Segment segment={segment} />}
                        </TimeField.Input>
                      </TimeField.Group>
                    </TimeField>

                    {/* Buttons */}
                    <Button
                      type="submit"
                      slot="close"
                      className={"bg-[#0a9396] rounded-lg w-full"}
                    >
                      Edit
                    </Button>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditModal;
