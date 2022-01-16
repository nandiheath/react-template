import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import PlainLayout from 'components/layouts/PlainLayout';
import NotFound from 'components/pages/NotFound';
import Login from 'components/pages/Login';
import MenuLayout from 'components/layouts/MenuLayout';
import Dashboard from 'components/pages/Dashboard';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<PlainLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/app" element={<MenuLayout />}>
          <Route element={<Dashboard />} />
        </Route>

        <Route path="/" element={<Navigate to="/app" />} />

        {/* default route */}
        <Route
          path="*"
          element={
            <PlainLayout>
              <NotFound />
            </PlainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
