import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getQuoteRequest, setRequestReplied } from "../../../functions/contact";
import { toast } from "react-hot-toast";
import AdminsideNavcopy from "../../../components/nav/AdminsideNavcopy";
import Switch from "../../../components/Switch/Switch";
import "./ContactFormSingle.css";

export default function ApplyFormSingle({ match }) {
  const [request, setRequest] = useState([]);
  const [isReplied, setIsReplied] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  const { id } = match.params;

  useEffect(() => {
    loadQuoteRequest();
  }, [id, isReplied]);

  const loadQuoteRequest = () =>
    getQuoteRequest(id, user.token)
      .then((res) => {
        // console.log(JSON.stringify(res.data, null, 4));
        setRequest(res.data);
        if (res.data) {
          setIsReplied(res.data.isReplied);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.status === 401 && "Unauthrised");
      });

  const setrequestReplied = () => {
    setRequestReplied(request._id, user.token)
      .then((res) => {
        // console.log(res.data);
        setIsReplied(res.data.isReplied);
        toast.success("Reply Status Updated");
      })
      .catch((error) => {
        toast.error(`Reply Status failed`);
        console.error(error);
      });
  };

  return (
    <div class="manageacmaincont">
      <div class="manageaccont">
        <AdminsideNavcopy currentActive="SubmittedForms" />
        <div class="navrightside">
          <div className="formhead">
            <p>Quote Request</p>
          </div>
          <div className="formsub">
            <p>
              {" "}
              <span className="cformheading"> Submitted At: </span>{" "}
              {new Date(request.createdAt).toLocaleString()}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Full Name </span> {request.Name}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Phone Number </span>{" "}
              {request.PhoneNum}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Email Address </span>{" "}
              {request.Email}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Product Type </span>{" "}
              {request.ProductType}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Required Quantity </span>{" "}
              {request.Quantity}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Units of Measurement </span>{" "}
              {request.Units}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Height </span> {request.Height}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Width </span> {request.Width}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Depth </span> {request.Depth}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Use of Colors </span>{" "}
              {request.Colors}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Use of Sheet Type </span>{" "}
              {request.Width}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Product Details </span>{" "}
              {request.Details}{" "}
            </p>
            <p>
              {" "}
              <span className="cformheading"> Width </span> {request.Width}{" "}
            </p>

            <span className="actionswitchcform">
              Reply Status:
              <Switch checked={isReplied} handlechange={setrequestReplied} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
