import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

const PathologyLabsPage = () => {
    const [labs, setLabs] = useState([]);

    useEffect(() => {
        const fetchLabs = async () => {
            const { data, error } = await supabase
                .from('pathology_labs')
                .select('*');

            if (error) {
                console.error('Error fetching labs:', error);
            } else {
                setLabs(data);
            }
        };

        fetchLabs();
    }, []);

    return (
        <div>
            <h1>Pathology Labs</h1>
            <ul>
                {labs.map(lab => (
                    <li key={lab.id}>
                        <h2>{lab.name}</h2>
                        <p>{lab.address}</p>
                        <p>Contact: {lab.contact}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PathologyLabsPage;