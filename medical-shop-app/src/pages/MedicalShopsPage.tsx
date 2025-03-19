import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

const MedicalShopsPage = () => {
    const [medicalShops, setMedicalShops] = useState([]);

    useEffect(() => {
        const fetchMedicalShops = async () => {
            const { data, error } = await supabase
                .from('medical_shops')
                .select('*');

            if (error) {
                console.error('Error fetching medical shops:', error);
            } else {
                setMedicalShops(data);
            }
        };

        fetchMedicalShops();
    }, []);

    return (
        <div>
            <h1>Medical Shops</h1>
            <ul>
                {medicalShops.map((shop) => (
                    <li key={shop.id}>
                        <h2>{shop.name}</h2>
                        <p>{shop.address}</p>
                        <p>Contact: {shop.contact}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MedicalShopsPage;