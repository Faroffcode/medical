import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';

const AppointmentForm: React.FC = () => {
    const [doctorId, setDoctorId] = useState('');
    const [patientName, setPatientName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('appointments')
            .insert([
                { doctor_id: doctorId, patient_name: patientName, date: appointmentDate, time: appointmentTime }
            ]);

        if (error) {
            setMessage('Error booking appointment: ' + error.message);
        } else {
            setMessage('Appointment booked successfully!');
            setDoctorId('');
            setPatientName('');
            setAppointmentDate('');
            setAppointmentTime('');
        }
    };

    return (
        <div>
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Doctor ID:</label>
                    <input
                        type="text"
                        value={doctorId}
                        onChange={(e) => setDoctorId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Patient Name:</label>
                    <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Appointment Date:</label>
                    <input
                        type="date"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Appointment Time:</label>
                    <input
                        type="time"
                        value={appointmentTime}
                        onChange={(e) => setAppointmentTime(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Book Appointment</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AppointmentForm;