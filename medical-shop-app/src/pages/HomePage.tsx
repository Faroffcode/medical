import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to the Medical Shop</h1>
                <p>Your one-stop solution for finding pathology labs, medical shops, and doctors.</p>
                <section>
                    <h2>Services</h2>
                    <ul>
                        <li><a href="/pathology-labs">Find Pathology Labs</a></li>
                        <li><a href="/medical-shops">Locate Medical Shops</a></li>
                        <li><a href="/doctors">View Doctors' Details</a></li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;