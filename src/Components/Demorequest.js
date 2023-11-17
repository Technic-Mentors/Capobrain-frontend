import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export default function Demorequest() {
  const [email, setEmail] = useState([]);
  const [user, setUser] = useState([]);
  const [editUser, setEditUser] = useState([])
  const [editId, setEditId] = useState([])
  const fetachAllUsers = async () => {
    await fetch(
      "http://localhost:8001/api/auth/getallusers",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setEmail(data));
  };
  useEffect(() => {
    fetachAllUsers();
  });
  const viewuser = (id) => {
    console.log(id);
    fetch(`http://localhost:8001/api/auth/getusers/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  };

  const edituser = (id) => {
    fetch(`http://localhost:8001/api/auth/getusers/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setEditId(data._id)
        setEditUser(data);
      });
  };

  const updateuser = () => {
    fetch(`http://localhost:8001/api/auth/getusers/${editId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setEditId(data._id)
        setEditUser(data);
      });
  };

  const deluser = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
      return result;
    });
    if (isConfirmed) {
      fetch(`http://localhost:8001/api/auth/deluser/${id}`, {
        method: "DELETE",
      });
    }
    fetachAllUsers();
  };
  return (
    <div style={{ backgroundColor: "rgb(246 249 255)" }}>
      <div className="container">
        {/* <div className="card">
        <div className="card-body"> */}
        <h1 className="pt-5 text-center">Received Demo Requests</h1>
        <div className="row py-5">
          <div className="col-12">
            <table
              className="table table-bordered"
              style={{ backgroundColor: "white" }}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Whatsapp Number</th>
                  <th>School Name</th>
                  <th>Message</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {email.map((request) => {
                  return (
                    <tr>
                      <td>{request.name}</td>
                      <td>{request.email}</td>
                      <td>{request.phoneno}</td>
                      <td>{request.schoolname}</td>
                      <td>{request.message}</td>
                      <td>
                        <FontAwesomeIcon
                          className="me-1"
                          icon={faEye}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          style={{ color: "blue" }}
                          onClick={() => viewuser(request._id)}
                        />
                        <i
                          className="fas fa-edit me-1"
                          style={{ color: "blue" }}
                          data-bs-toggle="modal"
                          data-bs-target="#staticedit"
                          onClick={() => edituser(request._id)}
                        ></i>
                        <i
                          className="fas fa-trash"
                          style={{ color: "blue" }}
                          onClick={() => deluser(request._id)}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* <!-- View Modal --> */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div>
                  <div>
                    <form>
                      <label className="form-lable">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={user.name}
                      />
                      <label className="form-lable">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={user.email}
                      />
                      <label className="form-lable">Whatsapp Number</label>
                      <input
                        className="form-control"
                        type="number"
                        name="phoneno"
                        value={user.phoneno}
                      />
                      <label className="form-lable">School Name</label>
                      <input
                        className="form-control"
                        type="name"
                        name="schoolname"
                        value={user.schoolname}
                      />
                      <label className="form-lable">Message</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        value={user.message}
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn1"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- edit Modal --> */}
        <div
          className="modal fade"
          id="staticedit"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div>
                  <div>
                    <form>
                      <label className="form-lable">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={editUser.name}
                      />
                      <label className="form-lable">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={editUser.email}
                      />
                      <label className="form-lable">Whatsapp Number</label>
                      <input
                        className="form-control"
                        type="number"
                        name="phoneno"
                        value={editUser.phoneno}
                      />
                      <label className="form-lable">School Name</label>
                      <input
                        className="form-control"
                        type="name"
                        name="schoolname"
                        value={editUser.schoolname}
                      />
                      <label className="form-lable">Message</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        value={editUser.message}
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn1"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
