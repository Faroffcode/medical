import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

const DoctorsPage = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            const { data, error } = await supabase
                .from('doctors')
                .select('*');

            if (error) {
                console.error('Error fetching doctors:', error);
            } else {
                setDoctors(data);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <div>
            <h1>Doctors List</h1>
            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor.id}>
                        <h2>{doctor.name}</h2>
                        <p>Specialization: {doctor.specialization}</p>
                        <p>Contact: {doctor.contact}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorsPage;