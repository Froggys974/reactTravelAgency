import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../components/index/index';
import ErrorPage from '../error-page';
import Contact from '../components/contact/contact';
import Destination from '../components/Destinations/destination';
import Agency from '../components/Agency/agency';
import TermsAndConditions from '../components/TermAndServices/termAndService';
import Paris from '../components/Destinations/France/Paris/paris';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Destination" element={<Destination />} />Agency
      <Route path="/Agency" element={<Agency />}/>
      <Route path="/TermsAndConditions" element={<TermsAndConditions />}/>
      <Route path="/Destination/France/Paris" element={<Paris />}/> {/* not best method*/}

      <Route path="*" element={<ErrorPage />} /> {/* Catch-all route */}

    </Routes>
  );
}

export default AppRoutes;