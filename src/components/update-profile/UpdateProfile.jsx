"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    await authClient.updateUser({
      image: photo,
      name: name,
    });
    toast.success(
      "Name and Image change perfectly, Please click the close button",
    );
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="border-b-4 border-[#0a9396] text-[#0a9396] px-4 py-1 cursor-pointer flex rounded-full gap-1 items-center font-semibold"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <BiEdit></BiEdit>Update your information
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box p-4 rounded-xl bg-black border-[#0a9396] border-b-4 border-t-4 shadow-sm shadow-[#0a9396]">
          <div>
            <h2 className="font-bold text-3xl text-center text-[#0a9396]">Update your information</h2>

            <form
              className="mt-5 flex justify-center items-center"
              onSubmit={onSubmit}
            >
              <fieldset className="fieldset bg-base-200 border-[#0a9396] rounded-box w-sm border-4 p-4 relative">
                <label className="label text-lg text-[#0a9396] font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="type your name"
                  name="name"
                />

                <label className="label text-lg text-[#0a9396] font-semibold">
                  Photo Url
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="enter your photo url"
                  name="photo"
                />

                <button className="btn btn-neutral mt-4" type="submit">
                  Save
                </button>
              </fieldset>
            </form>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="text-[#0a9396] border-2 border-[#0a9396] px-3 text-center py-1 lg:px-4 lg:py-2 rounded-full font-semibold lg:font-bold text-sm lg:text-md cursor-pointer hover:bg-[#0a9396] hover:text-[#0a9396] hover:border-2 hover:border-white hover:shadow-sm hover:shadow-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateProfile;
