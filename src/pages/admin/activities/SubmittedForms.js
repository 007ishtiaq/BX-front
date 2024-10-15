import React, { useState, useEffect } from "react";
import {
  getQuoteRequests,
  deleteQuoteRequest,
} from "../../../functions/contact";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ContactForm.css";
import { ReactComponent as Ticksvg } from "../../../images/admin/tickcheck.svg";
import { ReactComponent as Crosssvg } from "../../../images/admin/cross.svg";
import { toast } from "react-hot-toast";

export default function SubmittedForms() {
  const [requests, setRequests] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = () =>
    getQuoteRequests(user.token).then((res) => {
      setRequests(res.data);
    });

  const removeRequest = (requestId) => {
    const userConfirmed = window.confirm(`Sure you want Remove Request ?`);

    if (userConfirmed) {
      deleteQuoteRequest(requestId, user.token)
        .then((res) => {
          if (res.data.success) {
            toast.success("Quote Request Deleted");
            loadRequests();
          }
          if (res.data.error) {
            toast.error(res.data.error);
          }
        })
        .catch((error) => {
          toast.error("Something Went Wrong");
        });
    }
  };

  return (
    <>
      <div>Submitted Quote Requests</div>
      <div>
        <table className="TTtable">
          <thead>
            <tr>
              <th class="ordli">Submitted At</th>
              <th class="ordli">Full Name</th>
              <th class="ordli">Phone Num</th>
              <th class="ordli condi">Email</th>
              <th class="ordli">Reply</th>
              <th class="ordli">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request._id}>
                <td class="ordli">
                  <Link to={`/admin/form/${request._id}`}>
                    {new Date(request.createdAt).toLocaleString()}
                  </Link>
                </td>
                <td class="ordli">{request.Name}</td>
                <td class="ordli">{request.PhoneNum}</td>
                <td class="ordli condi">{request.Email}</td>
                <td class="ordli">
                  <div>
                    {request.isReplied ? (
                      <div className="pticksvg">
                        <Ticksvg />
                      </div>
                    ) : (
                      <div className="pcrosssvg">
                        <Crosssvg />
                      </div>
                    )}{" "}
                  </div>
                </td>
                <td class="ordli condi">
                  {" "}
                  <button
                    class="mybtn btnprimary delorder"
                    onClick={() => {
                      removeRequest(request._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
