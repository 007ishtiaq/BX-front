import React from "react";
import { Link } from "react-router-dom";
import "./AdminSmallNav.css";

export default function AdminSmallNav() {
  return (
    <div className="navaboveside">
      <ul class="manageacul">
        <Link to="/AdminPanel?page=SubmittedForms">
          <li class="manageacli clsremove SubmittedForms">Submitted Forms</li>
        </Link>
        <Link to="/AdminPanel?page=ContactForms">
          <li class="manageacli clsremove ContactForms">Contact Forms</li>
        </Link>
        <Link to="/AdminPanel?page=OptinEmails">
          <li class="manageacli clsremove OptinEmails">Opt-In Emails</li>
        </Link>
      </ul>
    </div>
  );
}
