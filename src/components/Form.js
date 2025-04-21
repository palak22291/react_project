import React, { useState } from 'react';
import './Form.css'; // You can use your own CSS or tailwind if preferred

function Form() {
  const [students, setStudents] = useState([
    { rollNumber: '123', name: 'newton', email: 'newton@gmail.com' },
    { rollNumber: '124', name: 'aakash', email: 'aakash@gmail.com' },
    { rollNumber: '125', name: 'anish', email: 'anish@gmail.com' }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const openModal = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedStudent(null);
    setShowModal(false);
  };

  const confirmMarkout = () => {
    alert(`${selectedStudent.name} marked out!`);
    setShowModal(false);
  };

  return (
    <div className={`container ${showModal ? 'blurred' : ''}`}>

      {/* Header */}
      <div className="header-row">
        <h3 className="red">Enrollment Number</h3>
        <h3 className="green">Name</h3>
        <h3 className="yellow">Email</h3>
        <h3 className="gray">Action</h3>
      </div>

      {/* Data Rows */}
      {students.map((student, index) => (
        <div className="data-row" key={index}>
          <h3 className="red">{student.rollNumber}</h3>
          <h3 className="green">{student.name}</h3>
          <h3 className="yellow">{student.email}</h3>
          <div className="gray">
            <button className="markout-btn" onClick={() => openModal(student)}>Markout</button>
          </div>
        </div>
      ))}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="close-btn" onClick={closeModal}>✕</button>
            <h2>Are you sure?</h2>
            <p>Are you sure you want to mark out?</p>
            <p>This action cannot be undone.</p>
            <div className="modal-buttons">
              <button className="delete-btn" onClick={confirmMarkout}>Markout</button>
              <button className="cancel-btn" onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
