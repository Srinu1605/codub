import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const TermsAndConditions = () => {
  
  return (
    <div className="mt-5">
      <h1 className="text-center mb-4">Terms and Conditions</h1>

      <Card>
        <Card.Body>
          <h5>1. Definitions</h5>
          <p><strong>Company:</strong> Top Freshers Technologies Private Limited (TFTPL), who is offering the program or course.</p>
          <p><strong>Program:</strong> A set of learning sessions and accessories available to a learner to access online (via the web) and complete according to the performance requirements by the Company in a stipulated time duration.</p>
          <p><strong>Platform:</strong> A Technology driven solution in which the learning content, the program, the course, the package resides and functions enabling the learner to acquire the knowledge or skill, which he/she is opting to acquire from TFTPL.</p>
          <p><strong>Package:</strong> A set of question/problem set to which the learner is to find solution or answer, with or without practice. Package enables the learner to prepare, practice and perform.</p>
          <p><strong>Applicant:</strong> A person who wishes to enroll for a program or course offered by the Company by completing its Registration steps.</p>
          <p><strong>Learner:</strong> A person who is enrolled for a course or program offered by the Company.</p>
          <p><strong>User:</strong> A term used for an applicant and/or a learner, to whomsoever the particular condition/statement is applicable.</p>
          <p><strong>Event:</strong> A workshop or seminar or activity conducted by the Company for education, awareness creation, testing, or similar purposes, whether on charge or free of charge.</p>
          <p><strong>Registration:</strong> The act of filling in a Registration Form meant for the program or course, which could be done either online or in paper form, as the current practice may be.</p>
          <p><strong>Fee:</strong> Amount of money payable and/or paid by an applicant or learner for going through the program or course, including any relevant miscellaneous expenses specified by the Company.</p>
          <p><strong>Payment:</strong> The act of paying fee for accessing and using a program or course, usually after Registration.</p>
          <p><strong>Enrolment:</strong> The act of completing the Registration and Payment of fee for a program or course as per the payment terms applicable.</p>
          <p><strong>Learning space:</strong> The set of pages containing learning sessions and support, which the learner will be able to view, navigate through, and use.</p>
          <p><strong>Account:</strong> User’s records (personal information, performance data etc) stored in any form with the Company.</p>
          <p><strong>Online Identity:</strong> The unique combination of username, PIN and key that are assigned to a user.</p>
          <p><strong>Commencement date:</strong> The date on which user will be able to start accessing and using the program.</p>
          <p><strong>Certificate:</strong> A proof issued by the Company in learner’s name that the learner has completed the program as per the standards of performance set by the Company.</p>

          <h5 className="mt-4">2. Fee and payment</h5>
          <p>Program fees should be paid by the user or anybody on behalf of the user in full before the program commences, unless the Company has permitted any deviations in writing.</p>
          <p>Any program fee displaying in the Company’s online payment facility is for guidance only. It is the user’s liability to pay correct and current fee as confirmed by the authorized personnel of the Company.</p>
          <p>All payments made for program must be made in Indian Rupees only. Otherwise, any charges incurred in processing the payment shall be borne by the user.</p>
          <p>Program fee collected by the Company is subject to current taxation rules as applicable in India.</p>
          <p>Program fee collected in part or whole by the Company is non-refundable even under circumstances like withdrawal of enrolment by the user.</p>

          <h5 className="mt-4">3. Online payment security</h5>
          <p>The Company shall not be liable for damages or loss of any kind if the online payee fails to exercise caution and/or follow security rules.</p>

          </Card.Body>
          </Card>
          
          </div>
          
  );
};
export default TermsAndConditions ;